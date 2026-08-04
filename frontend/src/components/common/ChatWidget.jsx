import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, Sparkles, UserCheck } from "lucide-react";
import { chatStorage } from "../../services/chatStorage";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [chatStatus, setChatStatus] = useState("active");
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [leadInputs, setLeadInputs] = useState({ name: "", email: "", phone: "" });
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Load and sync messages from storage
    useEffect(() => {
        const syncChat = () => {
            const activeChat = chatStorage.getOrCreateActiveChat();
            setMessages(activeChat.messages);
            setChatStatus(activeChat.status);
        };

        syncChat();

        // Listen for updates from other files/tabs
        window.addEventListener("conveza_chats_updated", syncChat);
        window.addEventListener("storage", syncChat);

        return () => {
            window.removeEventListener("conveza_chats_updated", syncChat);
            window.removeEventListener("storage", syncChat);
        };
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (textToSend) => {
        if (!textToSend.trim()) return;

        // Get current active chat
        const activeChat = chatStorage.getOrCreateActiveChat();

        // Save visitor's message to storage
        chatStorage.addMessage(activeChat.id, "user", textToSend);
        setInputValue("");

        // If the chat is already escalated to a human, do NOT reply with AI.
        // The manual agent will continue the task from the dashboard.
        if (activeChat.status === "escalated") {
            return;
        }

        setIsTyping(true);

        // Generate AI Response (Simulated)
        setTimeout(() => {
            let aiText = "";
            let msgType = "text";
            let shouldEscalate = false;
            const textLower = textToSend.toLowerCase();

            if (textLower.includes("pricing") || textLower.includes("cost") || textLower.includes("pay")) {
                aiText = "Conveza.AI plans start at just $49/month for small businesses, which includes 1 active AI agent, 1000 contacts, and basic analytics. We offer a 14-day free trial with no credit card required! 🚀";
            } else if (textLower.includes("feature") || textLower.includes("what can you do") || textLower.includes("capability")) {
                aiText = "We help you deploy autonomous agents that: \n• Answer customer queries 24/7 on WhatsApp\n• Qualify leads and run WhatsApp Ads\n• Sync customer data with your CRM\n• Manage broadcast messaging and campaign templates.";
            } else if (textLower.includes("free") || textLower.includes("trial")) {
                aiText = "Yes! You can start a 14-day free trial right now by clicking 'Start Free Trial' or 'Get Started Free' on our website. No credit card is required to sign up!";
            } else if (textLower.includes("demo") || textLower.includes("book")) {
                aiText = "We'd love to show you a live demo! You can book a session with our specialists by clicking the 'Book a Demo' button on our landing page.";
            } else if (textLower.includes("hi") || textLower.includes("hello") || textLower.includes("hey") || textLower.includes("who are you") || textLower.includes("greet")) {
                aiText = "Hi there! I am Convy, your Conveza.AI virtual assistant. I can help you set up WhatsApp automations, capture leads, track order shipments, or check features/pricing. How can I help you today? 👋";
            } else if (textLower.includes("shipping") || textLower.includes("delivery") || textLower.includes("how long")) {
                aiText = "Standard shipping generally takes 3-5 business days. We offer free shipping on orders exceeding $50! 📦";
            } else if (textLower.includes("product") || textLower.includes("sell") || textLower.includes("catalog") || textLower.includes("clothing") || textLower.includes("threads")) {
                aiText = "We offer a curated collection of organic apparel: \n• Classic Organic T-Shirt: $25 (Sage Green, Navy, Oatmeal)\n• Eco Summer Floral Dress: $49 (Sizes: XS, S, M, L) 👗";
            } else if (textLower.includes("return") || textLower.includes("refund") || textLower.includes("exchange") || textLower.includes("policy")) {
                aiText = "We offer free returns and exchanges within 30 days of delivery. Items must be in original, unused condition with tags. 🔄";
            } else if (textLower.includes("human") || textLower.includes("agent") || textLower.includes("person") || textLower.includes("representative")) {
                aiText = "Connecting you to a human support agent... I have escalated this conversation, and a representative will review our history and take over shortly. 📞";
                shouldEscalate = true;
            } else if (textLower.includes("lead") || textLower.includes("sign up") || textLower.includes("register") || textLower.includes("subscribe") || textLower.includes("leave details")) {
                aiText = "Sure! I'd love to help you get registered. Please enter your contact details in the form below:";
                msgType = "leadForm";
            } else if (textLower.includes("track") || textLower.includes("where is my order") || textLower.includes("status") || textLower.includes("package")) {
                aiText = "I can check your package status. Please enter your Order ID below to track it:";
                msgType = "orderTracker";
            } else {
                // AI doesn't know: Fallback and Escalate!
                aiText = "I apologize, but I don't have information about that specific request in my knowledge base. I am transferring this chat to a human support agent now to help you continue your task.";
                shouldEscalate = true;
            }

            // Save AI reply
            chatStorage.addMessage(activeChat.id, "ai", aiText, msgType);

            // Escalate if fallback triggered
            if (shouldEscalate) {
                chatStorage.escalateChat(activeChat.id, textToSend);
            }

            setIsTyping(false);
        }, 1200);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSendMessage(inputValue);
    };

    const suggestedPrompts = [
        { label: "👋 Greet AI", text: "Hello! Who are you?" },
        { label: "📦 Shipping Time", text: "How long does shipping take?" },
        { label: "👗 View Products", text: "What products do you sell?" },
        { label: "🔄 Returns & Exchanges", text: "Tell me about your return policy" },
        { label: "📞 Speak to Human", text: "I want to talk to a human support representative" },
        { label: "📋 Capture Lead", text: "I want to sign up and leave my details" },
        { label: "🚚 Track Package", text: "I want to track my order status" }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[360px] md:w-[380px] h-[540px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-4 flex items-center justify-between shadow-md shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-white/10">
                                {chatStatus === "escalated" ? (
                                    <UserCheck size={22} className="text-white" />
                                ) : (
                                    <Bot size={22} className="text-white" />
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-sm tracking-wide">
                                    {chatStatus === "escalated" ? "Support Agent Handoff" : "Conveza AI Assistant"}
                                </h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className={`w-2 h-2 rounded-full animate-pulse ${chatStatus === "escalated" ? "bg-amber-300" : "bg-green-300"}`}></span>
                                    <span className="text-xs text-green-100 font-medium">
                                        {chatStatus === "escalated" ? "Human Agent Takeover" : "Online & Active"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3.5 rounded-2xl text-sm shadow-sm whitespace-pre-line leading-relaxed ${
                                        msg.sender === "user"
                                            ? "bg-green-600 text-white rounded-tr-none"
                                            : msg.sender === "manual"
                                            ? "bg-amber-100 text-amber-900 border border-amber-200 rounded-tl-none font-medium"
                                            : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                                    }`}
                                >
                                    {msg.sender === "manual" && (
                                        <p className="text-[10px] text-amber-800 font-semibold mb-1 flex items-center gap-1">
                                            <UserCheck size={11} /> Support Representative
                                        </p>
                                    )}
                                    {msg.text}


                                    {/* Lead Form */}
                                    {msg.type === "leadForm" && (
                                        <div className="space-y-2 mt-3 p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 shadow-inner">
                                            <p className="font-bold text-xs text-gray-800 mb-2 flex items-center gap-1">📋 Register Details</p>
                                            {['name', 'email', 'phone'].map(field => (
                                                <div key={field}>
                                                    <label className="block text-[9px] uppercase font-bold text-gray-500">{field}</label>
                                                    <input
                                                        type="text"
                                                        placeholder={`Enter your ${field}...`}
                                                        onChange={(e) => setLeadInputs(prev => ({ ...prev, [field]: e.target.value }))}
                                                        value={leadInputs[field] || ""}
                                                        className="w-full text-xs border border-gray-200 rounded-lg p-2 mt-0.5 outline-none bg-white text-gray-800 focus:border-green-500"
                                                    />
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    alert(`Lead Captured Successfully:\nName: ${leadInputs.name}\nEmail: ${leadInputs.email}\nPhone: ${leadInputs.phone}`);
                                                    setLeadInputs({ name: "", email: "", phone: "" });
                                                }}
                                                className="w-full bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 px-3 rounded-lg mt-2 transition cursor-pointer hover:brightness-95 shadow-sm"
                                            >
                                                Submit Details
                                            </button>
                                        </div>
                                    )}

                                    {/* Order Tracker */}
                                    {msg.type === "orderTracker" && (
                                        <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 space-y-2 shadow-inner">
                                            <label className="block text-[9px] uppercase font-bold text-gray-500">Order Reference ID</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Order ID (e.g., #1002)..."
                                                id="tracker-order-id-main"
                                                className="text-xs border border-gray-200 rounded-lg p-2 w-full bg-white outline-none focus:border-green-500"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const idVal = document.getElementById("tracker-order-id-main")?.value || "#1002";
                                                    alert(`Querying order ${idVal}: Shipped. In Transit.`);
                                                }}
                                                className="w-full bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition cursor-pointer hover:brightness-95 shadow-sm"
                                            >
                                                Track Order Status
                                            </button>
                                        </div>
                                    )}

                                    <p
                                        className={`text-[10px] mt-1 text-right font-medium ${
                                            msg.sender === "user" ? "text-green-200" : "text-gray-400"
                                        }`}
                                    >
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Prompts */}
                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto scrollbar-none shrink-0">
                        {suggestedPrompts.map((prompt) => (
                            <button
                                key={prompt.label}
                                type="button"
                                onClick={() => handleSendMessage(prompt.text)}
                                className="text-xs bg-white hover:bg-green-50 text-gray-700 hover:text-green-700 border border-gray-200 hover:border-green-200 px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium shrink-0"
                            >
                                {prompt.label}
                            </button>
                        ))}
                    </div>

                    {/* Input Form */}
                    <form onSubmit={handleFormSubmit} className="p-3 border-t border-gray-100 bg-white flex items-center gap-2 shrink-0">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask me anything..."
                            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                        <button
                            type="submit"
                            className="p-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-500/20 hover:shadow-green-500/30 transition-all cursor-pointer flex items-center justify-center"
                        >
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            )}

            {/* FAB Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all cursor-pointer relative group`}
            >
                {/* Attention Pulse Effect */}
                {!isOpen && (
                    <span className="absolute -inset-1 rounded-full bg-green-500/30 animate-ping pointer-events-none"></span>
                )}
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                
                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md flex items-center gap-1.5">
                        <Sparkles size={12} className="text-yellow-400" />
                        Chat with Conveza AI
                    </div>
                )}
            </button>
        </div>
    );
}
