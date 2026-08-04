import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
    Users,
    MessageSquare,
    Send,
    Archive,
    Bot,
    Sparkles,
    Clock,
    AlertTriangle,
    CheckCircle2,
    Zap,
    Info,
    ShieldAlert,
    RefreshCw,
    Search,
    UserCheck,
    Phone,
    Mail
} from "lucide-react";
import { chatStorage } from "../../services/chatStorage";

export default function Inbox() {
    const [searchParams] = useSearchParams();
    const queryChatId = searchParams.get("chatId");

    // Inbox states
    const [conversations, setConversations] = useState([]);
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [activeTab, setActiveTab] = useState("escalated"); // 'escalated' | 'resolved'
    const [searchQuery, setSearchQuery] = useState("");
    const [manualReply, setManualReply] = useState("");

    // Simulator states (visitor side)
    const [simulatorText, setSimulatorText] = useState("");
    const [simulatorChat, setSimulatorChat] = useState(null);
    const [simulatorTyping, setSimulatorTyping] = useState(false);

    // Scroll refs
    const workspaceEndRef = useRef(null);
    const simulatorEndRef = useRef(null);

    const syncData = () => {
        const chats = chatStorage.getChats();
        setConversations(chats);

        const visitorChat = chatStorage.getOrCreateActiveChat();
        setSimulatorChat(visitorChat);
    };

    useEffect(() => {
        syncData();

        // Listen for updates
        window.addEventListener("conveza_chats_updated", syncData);
        window.addEventListener("storage", syncData);

        return () => {
            window.removeEventListener("conveza_chats_updated", syncData);
            window.removeEventListener("storage", syncData);
        };
    }, []);

    // If queryChatId changes or is loaded, set as selected chat and activate its matching tab
    useEffect(() => {
        if (queryChatId) {
            setSelectedChatId(queryChatId);
            const chat = chatStorage.getChatById(queryChatId);
            if (chat) {
                setActiveTab(chat.status);
            }
        }
    }, [queryChatId]);

    // Scroll helpers
    useEffect(() => {
        workspaceEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [selectedChatId, conversations]);

    useEffect(() => {
        simulatorEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [simulatorChat]);

    // Send manual reply
    const handleSendManualReply = (e) => {
        e.preventDefault();
        if (!manualReply.trim() || !selectedChatId) return;

        chatStorage.addMessage(selectedChatId, "manual", manualReply);
        setManualReply("");
        syncData();
    };

    // Save/Resolve chat
    const handleSaveChat = (chatId) => {
        chatStorage.resolveChat(chatId);
        setSelectedChatId(null);
        syncData();
    };

    // Reset simulator
    const handleClearSimulation = () => {
        chatStorage.clearVisitorChat();
        syncData();
    };

    // Send customer simulator message
    const handleSimulatorSend = (textToSend) => {
        const text = textToSend || simulatorText;
        if (!text.trim() || !simulatorChat) return;

        chatStorage.addMessage(simulatorChat.id, "user", text);
        setSimulatorText("");
        syncData();

        if (simulatorChat.status === "escalated") {
            return;
        }

        setSimulatorTyping(true);

        setTimeout(() => {
            let aiText = "";
            let msgType = "text";
            let shouldEscalate = false;
            const textLower = text.toLowerCase();

            if (textLower.includes("pricing") || textLower.includes("cost") || textLower.includes("pay")) {
                aiText = "Conveza.AI plans start at just $49/month for small businesses. We offer a 14-day free trial with no credit card required! 🚀";
            } else if (textLower.includes("feature") || textLower.includes("what can you do")) {
                aiText = "We help you deploy autonomous agents that: \n• Answer customer queries 24/7 on WhatsApp\n• Qualify leads\n• Sync customer data with your CRM.";
            } else if (textLower.includes("shipping") || textLower.includes("delivery")) {
                aiText = "Standard shipping takes 3-5 business days. Free shipping on orders over $50! 📦";
            } else if (textLower.includes("product") || textLower.includes("sell")) {
                aiText = "We sell high-quality, eco-friendly organic apparel, like our soft organic cotton t-shirts ($25) and classic summer dresses ($49). 👗";
            } else if (textLower.includes("human") || textLower.includes("agent") || textLower.includes("representative")) {
                aiText = "Connecting you to a human support agent... I have escalated this conversation, and a representative will review our history and take over shortly. 📞";
                shouldEscalate = true;
            } else {
                aiText = "I apologize, but I don't have information about that specific request in my knowledge base. I am transferring this chat to a human support agent now to help you continue your task.";
                shouldEscalate = true;
            }

            chatStorage.addMessage(simulatorChat.id, "ai", aiText, msgType);

            if (shouldEscalate) {
                chatStorage.escalateChat(simulatorChat.id, text);
            }

            setSimulatorTyping(false);
            syncData();
        }, 1000);
    };

    // Filters
    const filteredConversations = conversations.filter(c => {
        if (c.id === "visitor_chat" && c.status === "active") return false;
        const matchesTab = c.status === activeTab;
        const matchesQuery = c.customerName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             (c.unansweredQuestion && c.unansweredQuestion.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesTab && matchesQuery;
    });

    const activeChat = conversations.find(c => c.id === selectedChatId);

    return (
        <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
                        Live Handoff Inbox <span className="bg-amber-100 text-amber-700 text-xs px-2.5 py-1 rounded-full font-bold">Inbox Console</span>
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Live chat takeover terminal. Connect directly with visitors, resolve queries, and archive conversations.
                    </p>
                </div>
                <button 
                    onClick={syncData}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 font-medium text-sm transition cursor-pointer"
                >
                    <RefreshCw size={16} />
                    Refresh Feed
                </button>
            </div>

            {/* Inbox Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Column 1: Conversations Log List */}
                <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-[650px] overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="flex border-b border-gray-100 shrink-0">
                        <button
                            onClick={() => { setActiveTab("escalated"); setSelectedChatId(null); }}
                            className={`flex-1 py-3.5 text-center text-sm font-semibold border-b-2 transition ${
                                activeTab === "escalated"
                                    ? "border-green-600 text-green-700"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            Escalated ({conversations.filter(c => c.status === "escalated").length})
                        </button>
                        <button
                            onClick={() => { setActiveTab("resolved"); setSelectedChatId(null); }}
                            className={`flex-1 py-3.5 text-center text-sm font-semibold border-b-2 transition ${
                                activeTab === "resolved"
                                    ? "border-green-600 text-green-700"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            Saved & Resolved ({conversations.filter(c => c.status === "resolved").length})
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="p-3 border-b border-gray-50 shrink-0">
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search by customer..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
                            />
                        </div>
                    </div>

                    {/* Conversation List */}
                    <div className="flex-1 overflow-y-auto divide-y divide-gray-50 p-2 space-y-1">
                        {filteredConversations.length === 0 ? (
                            <div className="text-center py-10 px-4">
                                <Info size={28} className="mx-auto text-gray-300 mb-2" />
                                <p className="text-xs text-gray-400 font-medium">No chats found in this tab.</p>
                            </div>
                        ) : (
                            filteredConversations.map((chat) => {
                                const lastMsg = chat.messages[chat.messages.length - 1];
                                const isSelected = selectedChatId === chat.id;
                                return (
                                    <button
                                        key={chat.id}
                                        onClick={() => setSelectedChatId(chat.id)}
                                        className={`w-full text-left p-3.5 rounded-xl transition-all cursor-pointer flex flex-col gap-1.5 ${
                                            isSelected 
                                                ? "bg-green-50/70 border border-green-100" 
                                                : "hover:bg-gray-50/70 border border-transparent"
                                        }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-xs text-gray-800 tracking-wide flex items-center gap-1.5">
                                                {chat.customerName}
                                                {chat.status === "escalated" && (
                                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping"></span>
                                                )}
                                            </span>
                                            <span className="text-[10px] text-gray-400 font-medium">
                                                {new Date(chat.updatedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-gray-500 line-clamp-1 italic">
                                            {lastMsg ? lastMsg.text : "No messages yet"}
                                        </p>
                                        {chat.status === "escalated" && chat.unansweredQuestion && (
                                            <div className="mt-1 px-2 py-1 bg-amber-50 rounded-lg text-[9px] text-amber-700 font-bold border border-amber-100 line-clamp-1">
                                                Matter: {chat.unansweredQuestion}
                                            </div>
                                        )}
                                    </button>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Column 2: Manual Agent Takeover Workspace */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-[650px] overflow-hidden">
                    {activeChat ? (
                        <>
                            {/* Selected Chat Header */}
                            <div className="p-4 border-b border-gray-100 flex items-center justify-between shrink-0 bg-gray-50/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm shadow-inner">
                                        {activeChat.customerName.split(" ").map(n => n[0]).join("")}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xs text-gray-800 tracking-wide">{activeChat.customerName}</h4>
                                        <div className="flex gap-2.5 mt-0.5 text-[10px] text-gray-400">
                                            {activeChat.email && <span className="flex items-center gap-1"><Mail size={10} />{activeChat.email}</span>}
                                            {activeChat.phone && <span className="flex items-center gap-1"><Phone size={10} />{activeChat.phone}</span>}
                                        </div>
                                    </div>
                                </div>
                                {activeChat.status === "escalated" ? (
                                    <button
                                        onClick={() => handleSaveChat(activeChat.id)}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow-md cursor-pointer transition"
                                    >
                                        <Archive size={14} />
                                        Save Chat
                                    </button>
                                ) : (
                                    <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-lg flex items-center gap-1">
                                        <CheckCircle2 size={12} /> Saved & Resolved
                                    </span>
                                )}
                            </div>

                            {/* Unanswered query warning callout */}
                            {activeChat.status === "escalated" && activeChat.unansweredQuestion && (
                                <div className="p-3 bg-amber-50/80 border-b border-amber-100 flex items-start gap-2.5 shrink-0">
                                    <ShieldAlert className="text-amber-600 mt-0.5 shrink-0" size={18} />
                                    <div className="text-[11px]">
                                        <p className="font-bold text-amber-800 leading-tight">Unresolved Customer Question (Escalated by AI)</p>
                                        <p className="text-amber-700 font-semibold mt-1 bg-white border border-amber-100 rounded-lg p-2 shadow-inner">
                                            "{activeChat.unansweredQuestion}"
                                        </p>
                                        <p className="text-[10px] text-amber-500 mt-1.5">
                                            *Type your response below as the manual representative to continue the task.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Chat History Thread */}
                            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/30">
                                {activeChat.messages.map((msg) => {
                                    const isUser = msg.sender === "user";
                                    const isManual = msg.sender === "manual";
                                    const isAi = msg.sender === "ai";

                                    return (
                                        <div
                                            key={msg.id}
                                            className={`flex ${isManual ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed shadow-sm ${
                                                    isManual
                                                        ? "bg-amber-500 text-white rounded-tr-none"
                                                        : isAi
                                                        ? "bg-purple-100 text-purple-950 border border-purple-200 rounded-tl-none"
                                                        : "bg-white text-gray-800 border border-gray-200/60 rounded-tl-none"
                                                }`}
                                            >
                                                <div className="flex justify-between items-center gap-4 mb-1">
                                                    <span className="font-bold text-[9px] uppercase tracking-wider opacity-85">
                                                        {isManual ? "✍️ You (Manual Agent)" : isAi ? "🤖 AI Assistant" : "👤 Customer"}
                                                    </span>
                                                    <span className="text-[9px] opacity-60 font-medium">
                                                        {msg.time}
                                                    </span>
                                                </div>
                                                <p className="whitespace-pre-wrap">{msg.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div ref={workspaceEndRef} />
                            </div>

                            {/* Reply Input Form */}
                            {activeChat.status === "escalated" ? (
                                <form onSubmit={handleSendManualReply} className="p-3 border-t border-gray-100 shrink-0 bg-white flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Type manual reply to continue task..."
                                        value={manualReply}
                                        onChange={(e) => setManualReply(e.target.value)}
                                        className="flex-1 px-3.5 py-2.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-gray-50/50"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl flex items-center justify-center shadow-md transition cursor-pointer hover:scale-102"
                                    >
                                        <Send size={15} />
                                    </button>
                                </form>
                            ) : (
                                <div className="p-3.5 border-t border-gray-100 text-center text-xs text-gray-400 font-semibold bg-gray-50/50 shrink-0">
                                    This chat is archived. Review history in Saved log.
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-gray-50/20">
                            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-4 text-green-600 border border-green-100 shadow-sm">
                                <UserCheck size={32} />
                            </div>
                            <h3 className="text-md font-bold text-gray-800">Support Representative Desk</h3>
                            <p className="text-xs text-gray-400 max-w-sm mt-1 leading-relaxed">
                                Select an escalated customer conversation from the list to take over, resolve queries, and save the chat history.
                            </p>
                        </div>
                    )}
                </div>

                {/* Column 3: Built-in Live Chat Widget Simulator */}
                <div className="lg:col-span-4 bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl p-4 flex flex-col h-[650px]">
                    <div className="flex justify-between items-center text-gray-400 text-xs px-2 pb-3 border-b border-gray-800 shrink-0">
                        <span className="font-bold flex items-center gap-1.5 text-[11px] text-green-400 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span> Live Website Simulator
                        </span>
                        <button 
                            onClick={handleClearSimulation}
                            className="text-[10px] bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold px-2 py-1 rounded-lg transition cursor-pointer"
                        >
                            Reset Chat
                        </button>
                    </div>

                    {simulatorChat ? (
                        <div className="flex-1 flex flex-col overflow-hidden bg-gray-950 rounded-2xl mt-3 relative border border-gray-800">
                            {/* Simulator Header */}
                            <div className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white p-3 shrink-0 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xs border border-white/10">
                                    {simulatorChat.status === "escalated" ? <UserCheck size={16} /> : <Bot size={16} />}
                                </div>
                                <div>
                                    <h5 className="font-bold text-[11px] leading-tight">
                                        {simulatorChat.status === "escalated" ? "Support Takeover Active" : "Convy AI Agent"}
                                    </h5>
                                    <span className="text-[9px] text-indigo-200">
                                        {simulatorChat.status === "escalated" ? "Connected to Representative" : "AI Agent Responding"}
                                    </span>
                                </div>
                            </div>

                            {/* Escalated Notification Warning */}
                            {simulatorChat.status === "escalated" && (
                                <div className="bg-amber-600/95 text-white text-[10px] py-1 px-3 flex items-center justify-center gap-1.5 shrink-0 font-medium">
                                    <Clock size={11} className="animate-spin" /> Manual support representative is active
                                </div>
                            )}

                            {/* Message Feed */}
                            <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-950/70">
                                {simulatorChat.messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-normal shadow-sm ${
                                                msg.sender === "user"
                                                    ? "bg-purple-600 text-white rounded-tr-none"
                                                    : msg.sender === "manual"
                                                    ? "bg-amber-100 text-amber-955 rounded-tl-none border border-amber-200 font-semibold"
                                                    : "bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700"
                                            }`}
                                        >
                                            {msg.sender === "manual" && (
                                                <div className="text-[9px] font-extrabold text-amber-800 mb-0.5 uppercase tracking-wide">
                                                    Manual Support
                                                </div>
                                            )}
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}

                                {simulatorTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></span>
                                        </div>
                                    </div>
                                )}
                                <div ref={simulatorEndRef} />
                            </div>

                            {/* Quick Test Fallbacks */}
                            <div className="p-2 border-t border-gray-800/60 bg-gray-950 flex flex-col gap-1 shrink-0">
                                <p className="text-[9px] text-gray-500 font-bold px-1.5 mb-0.5">QUICK TEST CONVERSATION ESCALATIONS:</p>
                                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                                    <button
                                        onClick={() => handleSimulatorSend("Do you support international shipment or returns?")}
                                        className="text-[9px] font-semibold bg-gray-900 hover:bg-gray-850 text-purple-300 border border-purple-900/60 px-2.5 py-1 rounded-full transition shrink-0 cursor-pointer"
                                    >
                                        Ask unknown query (Shipping)
                                    </button>
                                    <button
                                        onClick={() => handleSimulatorSend("Can I print my custom company logo on t-shirts?")}
                                        className="text-[9px] font-semibold bg-gray-900 hover:bg-gray-850 text-purple-300 border border-purple-900/60 px-2.5 py-1 rounded-full transition shrink-0 cursor-pointer"
                                    >
                                        Ask unknown query (Logo)
                                    </button>
                                </div>
                            </div>

                            {/* Input Form */}
                            <form 
                                onSubmit={(e) => { e.preventDefault(); handleSimulatorSend(); }} 
                                className="p-2.5 border-t border-gray-850 bg-gray-950 flex gap-2 shrink-0"
                            >
                                <input
                                    type="text"
                                    placeholder="Type message as visitor..."
                                    value={simulatorText}
                                    onChange={(e) => setSimulatorText(e.target.value)}
                                    className="flex-1 px-3 py-2 text-[11px] bg-gray-900 text-gray-150 border border-gray-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500"
                                />
                                <button
                                    type="submit"
                                    className="p-2 bg-purple-650 hover:bg-purple-700 text-white rounded-xl flex items-center justify-center transition cursor-pointer"
                                >
                                    <Send size={13} />
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-500 text-xs">
                            Loading Simulator...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
