import React, { useState, useEffect, useRef } from "react";
import {
    Send, Bot, User, Trash2, BadgeCheck, FileText,
    Sparkles, RefreshCw, Cpu, Layers, AlertCircle, HelpCircle
} from "lucide-react";

export default function TestAgent() {
    // Local storage states loaded on mount
    const [configs, setConfigs] = useState({
        business: {
            companyName: "Conveza Organic Threads",
            industry: "E-Commerce",
            website: "https://convezathreads.com",
            email: "support@convezathreads.com",
            phone: "+91 98765 43210",
            address: "Hyderabad, India",
            description: "We sell high-quality, eco-friendly organic apparel online. We are known for our soft organic cotton t-shirts and summer dresses, and we offer free shipping on orders over $50."
        },
        personality: {
            agentName: "Convy",
            tone: "Friendly",
            language: "English",
            greeting: "Hi! Welcome to Conveza Threads 🌿. I'm Convy, your AI shopping assistant. How can I help you find the perfect eco-friendly outfit today?",
            behavior: "• Be warm, helpful, and enthusiastic about sustainability.\n• Recommend our organic cotton t-shirts and summer dresses.\n• Remind customers about the free shipping on orders over $50.\n• If a customer is unhappy or has a shipping issue, guide them to ask for a \"human agent\".",
            fallbackMessage: "I'm sorry, I couldn't find an answer to that in my knowledge base. Would you like me to connect you to a human support agent?",
            negativeKeywords: "competitorX, competitorY, discount code hack, credit card details"
        },
        knowledge: {
            website: "https://convezathreads.com/collections",
            faq: "Q: What is your return policy?\nA: We offer free returns and exchanges within 30 days of delivery.\n\nQ: How long does shipping take?\nA: Orders are processed in 1-2 days. Standard shipping takes 3-5 business days.",
            products: "• Classic Organic T-Shirt: $25 (Colors: Sage Green, Navy, Oatmeal)\n• Eco Summer Floral Dress: $49 (Sizes: XS, S, M, L)",
            instructions: "• Help customers choose the right color/size of T-shirt.\n• Always direct users to checkout when they decide on a product."
        },
        integrations: {
            gemini: false,
            openai: false,
            customApi: false,
            customApiUrl: "https://api.convezathreads.com/v1/webhook",
            customApiMethod: "POST",
            customApiAuth: "Bearer my-secret-token-123",
            customApiTrigger: "leadCapture",
            crmProvider: "hubspot",
            crmToken: ""
        },
        skills: {
            leadCapture: true,
            leadFields: { name: true, email: true, phone: true, company: false },
            appointmentBooking: false,
            bookingLink: "https://calendly.com/conveza-support",
            orderTracking: false,
            orderApi: "https://api.convezathreads.com/v1/orders",
            faqSupport: true,
            humanHandoff: true,
            handoffEmail: "support@convezathreads.com",
            multilingual: false,
            sentimentAnalysis: false,
            smartRecommendations: true
        },
        widget: {
            primaryColor: "#9333ea",
            bubbleColor: "#9333ea",
            textColor: "#ffffff",
            launcherText: "Chat with us",
            launcherStyle: "pill",
            position: "right",
            welcomeText: "👋 Hello! Welcome to Conveza Threads. How can I help you find the perfect outfit?",
            avatarStyle: "🤖",
            agentName: "Convy"
        }
    });

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [temperature, setTemperature] = useState(0.7);
    const [leadInputs, setLeadInputs] = useState({ name: "", email: "", phone: "", company: "" });
    const [apiLogs, setApiLogs] = useState([]);
    const [activeContext, setActiveContext] = useState({
        intent: "None",
        retrievedInfo: "None",
        activeRule: "None"
    });

    const messagesEndRef = useRef(null);

    // Scroll to bottom on new message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Load configs from local storage
    const loadConfigs = () => {
        const savedBusiness = localStorage.getItem("conveza_business");
        const savedPersonality = localStorage.getItem("conveza_personality");
        const savedKnowledge = localStorage.getItem("conveza_knowledge");
        const savedIntegrations = localStorage.getItem("conveza_integrations");
        const savedSkills = localStorage.getItem("conveza_skills");
        const savedWidget = localStorage.getItem("conveza_widget_settings");

        setConfigs(prev => ({
            business: savedBusiness ? JSON.parse(savedBusiness) : prev.business,
            personality: savedPersonality ? JSON.parse(savedPersonality) : prev.personality,
            knowledge: savedKnowledge ? JSON.parse(savedKnowledge) : prev.knowledge,
            integrations: savedIntegrations ? JSON.parse(savedIntegrations) : prev.integrations,
            skills: savedSkills ? JSON.parse(savedSkills) : prev.skills,
            widget: savedWidget ? JSON.parse(savedWidget) : prev.widget,
        }));
    };

    // Load on mount and set initial greeting
    useEffect(() => {
        loadConfigs();
    }, []);

    // Set initial greeting after configs load
    useEffect(() => {
        setMessages([
            {
                id: 1,
                sender: "agent",
                text: configs.widget.welcomeText || configs.personality.greeting || `Hello! How can I help you today?`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        ]);
    }, [configs.widget.welcomeText, configs.personality.greeting]);

    // Simple context extraction helper (Simulates RAG)
    const extractContext = (text, query) => {
        const lines = text.split("\n");
        const matched = lines.filter(line => line.toLowerCase().includes(query.toLowerCase()));
        if (matched.length > 0) {
            return matched.join("\n");
        }
        return text;
    };

    // Handle Custom API Webhook call simulation
    const handleLeadSubmit = (formData) => {
        const timestamp = new Date().toLocaleTimeString();
        const apiConfig = configs.integrations;

        const newLog = {
            id: Date.now(),
            time: timestamp,
            url: apiConfig.customApiUrl || "https://api.convezathreads.com/v1/webhook",
            method: apiConfig.customApiMethod || "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": apiConfig.customApiAuth || "Bearer secret_token_123"
            },
            payload: formData,
            status: "200 OK",
            success: true
        };

        if (apiConfig.customApi) {
            setApiLogs(prev => [newLog, ...prev]);
            alert(`🚀 Custom API Webhook Sync Successful!\nPayload details written to custom API logs console.`);
        } else {
            alert(`Lead detail captured locally! Enable 'Custom API Integration' under integrations to simulate live server syncing.`);
        }
    };

    // Formulate a response based on current config parameters
    const generateSimulatedResponse = (userInput) => {
        const text = userInput.toLowerCase().trim();
        let reply = "";
        let matchedIntent = "General Greeting";
        let matchedRule = "Standard Conversation";
        let retrieved = `RAG Prompt [Temp: ${temperature}]`;
        let msgType = "text";

        const { business, personality, knowledge, skills } = configs;
        const agentName = personality.agentName || configs.widget.agentName || "Convy";
        const companyName = business.companyName || "our business";
        const tone = personality.tone || "Friendly";

        // 1. Check Safety Guardrails (Banned Keywords)
        const negativeKeywordsStr = personality.negativeKeywords || "";
        if (negativeKeywordsStr.trim()) {
            const keywords = negativeKeywordsStr.split(",").map(k => k.trim().toLowerCase()).filter(Boolean);
            const foundKeyword = keywords.find(k => text.includes(k));
            if (foundKeyword) {
                setActiveContext({
                    intent: "Safety Blocklist",
                    retrievedInfo: `Term detected: "${foundKeyword}"`,
                    activeRule: "Enforce safety output refusal"
                });
                return {
                    text: `⚠️ [Safety Guardrail] I am programmed to not discuss or comment on topics regarding "${foundKeyword}". How can I help you with our products instead?`,
                    type: "text"
                };
            }
        }

        // 2. Lead Capture Trigger
        if (skills.leadCapture && (text.includes("lead") || text.includes("sign up") || text.includes("register") || text.includes("subscribe") || text.includes("join") || text.includes("leave details"))) {
            matchedIntent = "Lead Capture Request";
            retrieved = "Skills Manager -> Lead Capture Schema";
            matchedRule = "Display interactive lead input fields";
            reply = `Sure! I'd love to help you get registered. Please fill out your details in the lead form below:`;
            msgType = "leadForm";
        }
        // 3. Appointment Booking Trigger
        else if (skills.appointmentBooking && (text.includes("appointment") || text.includes("book") || text.includes("meeting") || text.includes("schedule") || text.includes("call with custom"))) {
            matchedIntent = "Appointment Booking Request";
            retrieved = `Skills Manager -> URL: ${skills.bookingLink}`;
            matchedRule = "Present calendar reservation link";
            reply = `I can definitely help you set up a call with our team. Click the link below to book a time that works best for you!`;
            msgType = "bookingButton";
        }
        // 4. Order Tracking Trigger
        else if (skills.orderTracking && (text.includes("track") || text.includes("where is my order") || text.includes("order status") || text.includes("order id") || text.includes("package"))) {
            matchedIntent = "Order Tracking Query";
            retrieved = `Skills Manager -> API Endpoint: ${skills.orderApi}`;
            matchedRule = "Render order tracker lookup utility";
            reply = `I can search for your shipment status. Please enter your Order ID in the lookup box below:`;
            msgType = "orderTracker";
        }
        // 5. Contact Info
        else if (text.includes("contact") || text.includes("support") || text.includes("phone") || text.includes("email") || text.includes("address") || text.includes("call")) {
            matchedIntent = "Contact Inquiry";
            retrieved = `Email: ${business.email}, Phone: ${business.phone}, Address: ${business.address}`;
            matchedRule = "Provide direct support channel info";
            reply = `You can get in touch with our team at ${companyName} through the following channels:\n` +
                `📧 Email: ${business.email || "support@conveza.ai"}\n` +
                `📞 Phone: ${business.phone || "Not available"}\n` +
                (business.address ? `📍 Address: ${business.address}\n` : "") +
                (business.website ? `🌐 Website: ${business.website}` : "");
        }
        // 6. Human handoff trigger
        else if (text.includes("human") || text.includes("agent") || text.includes("person") || text.includes("unhappy") || text.includes("issue") || text.includes("problem") || text.includes("representative")) {
            matchedIntent = "Escalation Request";
            retrieved = skills.humanHandoff ? `Human Handoff enabled (Alert sent to: ${skills.handoffEmail || "support@conveza.ai"})` : "Handoff disabled (Fallback redirect)";
            matchedRule = "Activate handoff skill protocols";
            reply = skills.humanHandoff 
                ? `I understand. I am transferring this chat to a human agent right now. A support representative will review our history and take over shortly.\n\nIn the meantime, you can reach support at ${skills.handoffEmail || business.email || "support@conveza.ai"}.`
                : `I understand your concern. While live human chat is currently offline, you can reach out directly to support at ${business.email || "support@conveza.ai"}.`;
        }
        // 7. Check for return policy
        else if (text.includes("return") || text.includes("refund") || text.includes("exchange") || text.includes("policy")) {
            matchedIntent = "Return Policy Inquiry";
            matchedRule = "Consult FAQ Database";
            if (knowledge.faq.toLowerCase().includes("return")) {
                retrieved = "FAQ Matching: 'return/refund'";
                reply = `Here is our return policy:\n${extractContext(knowledge.faq, "return")}`;
            } else {
                retrieved = "System default refund policy fallback";
                reply = `For ${companyName}, standard returns and exchanges are accepted within 30 days of delivery. Items must be in their original, unused condition.`;
            }
        }
        // 8. Check for shipping
        else if (text.includes("shipping") || text.includes("delivery") || text.includes("how long")) {
            matchedIntent = "Shipping Policy Inquiry";
            matchedRule = "Consult FAQ Database";
            if (knowledge.faq.toLowerCase().includes("shipping") || knowledge.faq.toLowerCase().includes("deliver")) {
                retrieved = "FAQ Matching: 'shipping/delivery'";
                reply = `Here is the shipping information:\n${extractContext(knowledge.faq, "shipping") || extractContext(knowledge.faq, "deliver")}`;
            } else {
                retrieved = "System default shipping policies fallback";
                reply = `Standard shipping generally takes 3-5 business days. We offer free shipping on orders exceeding $50!`;
            }
        }
        // 9. Check for products
        else if (text.includes("product") || text.includes("buy") || text.includes("pricing") || text.includes("price") || text.includes("t-shirt") || text.includes("dress") || text.includes("catalog") || text.includes("offer")) {
            matchedIntent = "Catalog / Product Inquiry";
            matchedRule = "Retrieve catalog entries from Knowledge Base";
            if (knowledge.products.trim()) {
                retrieved = "Knowledge Base -> Products Section";
                reply = `Here are the products/services we have available:\n${knowledge.products}`;
            } else {
                retrieved = "System default catalog template";
                reply = `We provide high-quality offerings. At ${companyName}, we specialize in eco-friendly products like our soft organic t-shirts ($25) and classic summer dresses ($49).`;
            }
        }
        // 10. Check for greeting
        else if (text.includes("hi") || text.includes("hello") || text.includes("hey") || text.includes("greeting") || text.includes("who are you")) {
            matchedIntent = "Greeting";
            retrieved = "Personality Custom Welcome greeting";
            matchedRule = "Greet visitor and state name";
            reply = configs.widget.welcomeText || personality.greeting || `Hello! I'm ${agentName}, your virtual assistant. How can I help you today?`;
        }
        // 11. Fallback (If no match, use custom fallback response)
        else {
            matchedIntent = "Fallback Query";
            matchedRule = "Trigger user defined fallback message";
            retrieved = "No direct FAQ matches found in vector index.";
            reply = personality.fallbackMessage || "I'm sorry, I couldn't find an answer to that in my knowledge base. Let me know if you would like me to connect you to human support.";
        }

        // Apply temperature effect on outputs (simulated creativity)
        if (temperature > 0.8 && msgType === "text") {
            reply = reply + ` ✨ (Let me know if there's anything else you need help with! 🌿)`;
        } else if (temperature < 0.3 && msgType === "text") {
            reply = reply.replace(/😊|🌿|✨/g, "").trim(); // strip emojis for highly structured output
        }

        // Apply Custom Tone modifications
        reply = applyToneModifier(reply, tone);

        // Update active RAG debugging window
        setActiveContext({
            intent: matchedIntent,
            retrievedInfo: retrieved,
            activeRule: matchedRule
        });

        return { text: reply, type: msgType };
    };

    const applyToneModifier = (text, tone) => {
        switch (tone.toLowerCase()) {
            case "friendly":
                return `😊 ${text}\n\n🌿 Let me know if you have any other questions!`;
            case "casual":
                return `Hey there! ${text.replace(/Regarding/g, "About").replace(/Here is/g, "Check this out:")} ✌️`;
            case "professional":
                return `${text}\n\nIf you require further details, please let me know.`;
            case "formal":
                return `Dear Valued Customer,\n\n${text}\n\nRespectfully,\n${configs.widget.agentName || configs.personality.agentName || "Convy"}`;
            case "supportive":
                return `I'm completely here to assist you with this! ${text}\n\nWe'll get this sorted out together.`;
            default:
                return text;
        }
    };

    const handleSend = (textToSend = input) => {
        if (!textToSend.trim() || isTyping) return;

        const userMsg = {
            id: Date.now(),
            sender: "user",
            text: textToSend,
            type: "text",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate model latency
        setTimeout(() => {
            const result = generateSimulatedResponse(textToSend);
            const agentMsg = {
                id: Date.now() + 1,
                sender: "agent",
                text: result.text,
                type: result.type,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, agentMsg]);
            setIsTyping(false);
        }, 1200);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    const clearChat = () => {
        setMessages([
            {
                id: Date.now(),
                sender: "agent",
                text: configs.widget.welcomeText || configs.personality.greeting || `Hello! How can I help you today?`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        ]);
        setActiveContext({
            intent: "None",
            retrievedInfo: "None",
            activeRule: "None"
        });
    };

    const quickTestChips = [
        { label: "👋 Greet AI", text: "Hello! Who are you?" },
        { label: "📦 Shipping Time", text: "How long does shipping take?" },
        { label: "👗 View Products", text: "What products do you sell?" },
        { label: "🔄 Returns & Exchanges", text: "Tell me about your return policy" },
        { label: "📞 Speak to Human", text: "I need to talk to a real person support representative" }
    ];

    const additionalSkillChips = [
        { label: "📋 Capture Lead", text: "I want to sign up and leave my details", enabled: configs.skills.leadCapture },
        { label: "📅 Book Call", text: "How do I schedule an appointment?", enabled: configs.skills.appointmentBooking },
        { label: "🚚 Track Package", text: "I want to track my order status", enabled: configs.skills.orderTracking },
    ];

    // Check loaded state sizes
    const activeIntegrationsCount = (configs.integrations.openai ? 1 : 0) + (configs.integrations.gemini ? 1 : 0);
    const activeModelName = configs.integrations.gemini
        ? "Gemini 1.5 Flash"
        : configs.integrations.openai
            ? "GPT-4o Mini"
            : "Conveza AI Core (Simulated)";

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header Title */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        Test AI Agent
                        <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full border border-amber-200">
                            Developer Sandbox
                        </span>
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Interact with your agent in real-time. The agent dynamically loads your active Business Profile, AI Personality, Custom Branding, and enabled Skills.
                    </p>
                </div>

                <button
                    onClick={loadConfigs}
                    style={{ 
                        backgroundColor: configs.widget.primaryColor + '12', 
                        color: configs.widget.primaryColor,
                        borderColor: configs.widget.primaryColor + '30'
                    }}
                    className="flex items-center gap-2 text-xs font-bold px-3 py-2 border rounded-lg hover:brightness-95 transition cursor-pointer"
                >
                    <RefreshCw size={14} className="animate-spin-hover" />
                    Reload Configs
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden font-sans">

                {/* Chat Panel (Col-span 2) */}
                <div className="lg:col-span-2 flex flex-col h-[640px]">
                    {/* Console Header */}
                    <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div 
                                style={{ 
                                    backgroundColor: configs.widget.primaryColor + '15',
                                    color: configs.widget.primaryColor,
                                    borderColor: configs.widget.primaryColor + '35'
                                }}
                                className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm text-lg"
                            >
                                {configs.widget.avatarStyle || "🤖"}
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-gray-800">
                                    {configs.widget.agentName || configs.personality.agentName || "Convy"}
                                </h3>
                                <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Active Tone: <span className="font-semibold" style={{ color: configs.widget.primaryColor }}>{configs.personality.tone || "Friendly"}</span>
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={clearChat}
                            className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 font-semibold transition px-2.5 py-1.5 hover:bg-red-50 rounded-lg border border-transparent hover:border-red-100"
                        >
                            <Trash2 size={14} />
                            Clear Chat
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/30">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div className={`flex items-start gap-2.5 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border shrink-0 ${msg.sender === "user"
                                            ? "bg-purple-100 border-purple-200 text-purple-700"
                                            : "bg-white border-gray-200 text-gray-600"
                                        }`}>
                                        {msg.sender === "user" ? <User size={14} /> : <span>{configs.widget.avatarStyle || "🤖"}</span>}
                                    </div>
                                    <div
                                        style={msg.sender === "user" ? { backgroundColor: configs.widget.primaryColor } : {}}
                                        className={`px-4 py-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap leading-relaxed ${msg.sender === "user"
                                                ? "text-white rounded-tr-none"
                                                : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                                            }`}
                                    >
                                        {/* Plain Text Reply */}
                                        <p>{msg.text}</p>
                                        
                                        {/* Skill Type 1: Lead Capture Form */}
                                        {msg.type === "leadForm" && (
                                            <div className="space-y-2 mt-3 p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-750 shadow-inner">
                                                <p className="font-bold text-xs text-gray-800 mb-2 flex items-center gap-1">📋 Register Details</p>
                                                {Object.keys(configs.skills.leadFields).filter(f => configs.skills.leadFields[f]).map(field => (
                                                    <div key={field}>
                                                        <label className="block text-[9px] uppercase font-bold text-gray-500">{field}</label>
                                                        <input
                                                            type="text"
                                                            placeholder={`Enter your ${field}...`}
                                                            onChange={(e) => setLeadInputs(prev => ({ ...prev, [field]: e.target.value }))}
                                                            value={leadInputs[field] || ""}
                                                            className="w-full text-xs border border-gray-200 rounded-lg p-2 mt-0.5 outline-none bg-white text-gray-800 focus:border-purple-600"
                                                        />
                                                    </div>
                                                ))}
                                                <button
                                                    onClick={() => handleLeadSubmit(leadInputs)}
                                                    style={{ backgroundColor: configs.widget.primaryColor }}
                                                    className="w-full text-white text-xs font-bold py-2 px-3 rounded-lg mt-2 transition cursor-pointer hover:brightness-95 shadow-sm"
                                                >
                                                    Submit Details
                                                </button>
                                            </div>
                                        )}

                                        {/* Skill Type 2: Appointment Booking Link Button */}
                                        {msg.type === "bookingButton" && (
                                            <div className="mt-2.5">
                                                <a
                                                    href={configs.skills.bookingLink}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    style={{ backgroundColor: configs.widget.primaryColor }}
                                                    className="inline-flex items-center gap-1.5 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md transition hover:scale-105 active:scale-95"
                                                >
                                                    📅 Schedule Appointment
                                                </a>
                                            </div>
                                        )}

                                        {/* Skill Type 3: Live Order Tracker Form */}
                                        {msg.type === "orderTracker" && (
                                            <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 space-y-2 shadow-inner">
                                                <label className="block text-[9px] uppercase font-bold text-gray-500">Order Reference ID</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Order ID (e.g., #1002)..."
                                                    id="tracker-order-id"
                                                    className="text-xs border border-gray-200 rounded-lg p-2 w-full bg-white outline-none focus:border-purple-600"
                                                />
                                                <button
                                                    onClick={() => {
                                                        const idVal = document.getElementById("tracker-order-id")?.value || "#1002";
                                                        alert(`Querying Endpoint: ${configs.skills.orderApi}\nResult for order ${idVal}: Shipped via FedEx. In Transit.`);
                                                    }}
                                                    style={{ backgroundColor: configs.widget.primaryColor }}
                                                    className="w-full text-white text-xs font-bold py-2 px-3 rounded-lg transition cursor-pointer hover:brightness-95 shadow-sm"
                                                >
                                                    Track Order Status
                                                </button>
                                            </div>
                                        )}

                                        <p className={`text-[10px] mt-1 text-right font-medium ${msg.sender === "user" ? "text-purple-200" : "text-gray-400"
                                            }`}>
                                            {msg.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Typing Animation */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="flex items-start gap-2.5 max-w-[80%]">
                                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-600 flex items-center justify-center shrink-0">
                                        <span>{configs.widget.avatarStyle || "🤖"}</span>
                                    </div>
                                    <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Test Chips & Enabled Skills Chips */}
                    <div className="px-6 py-2 bg-gray-50 border-t border-gray-100 flex flex-col gap-1.5 shrink-0">
                        <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
                            {quickTestChips.map((chip, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSend(chip.text)}
                                    disabled={isTyping}
                                    className="text-[11px] bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 px-2.5 py-1.5 rounded-full transition cursor-pointer font-semibold shrink-0 disabled:opacity-50"
                                >
                                    {chip.label}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1">
                            {additionalSkillChips.map((chip, idx) => {
                                if (!chip.enabled) return null;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSend(chip.text)}
                                        disabled={isTyping}
                                        style={{ borderColor: configs.widget.primaryColor + '40', color: configs.widget.primaryColor }}
                                        className="text-[11px] bg-white hover:brightness-95 border px-2.5 py-1.5 rounded-full transition cursor-pointer font-bold shrink-0 disabled:opacity-50"
                                    >
                                        ⚡ {chip.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Chat Input form */}
                    <div className="p-4 border-t border-gray-100 bg-white flex items-center gap-3 shrink-0">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isTyping}
                            placeholder={`Ask ${configs.widget.agentName || configs.personality.agentName || "Convy"} something...`}
                            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition bg-gray-50/50 focus:bg-white disabled:opacity-50"
                        />
                        <button
                            onClick={() => handleSend()}
                            disabled={!input.trim() || isTyping}
                            style={{ backgroundColor: configs.widget.primaryColor }}
                            className="p-3 rounded-xl text-white shadow-md transition cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none hover:brightness-90"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>

                {/* Training Context Sidebar (Col-span 1) */}
                <div className="lg:col-span-1 bg-gray-50/70 p-6 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-between h-[640px] overflow-y-auto">
                    <div className="space-y-5">

                        {/* Section 1: Active Model */}
                        <div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                                Sandbox Model Engine
                            </span>
                            <div className="bg-white border border-gray-200 rounded-xl p-3.5 flex items-center gap-3 shadow-sm">
                                <div 
                                    style={{ backgroundColor: configs.widget.primaryColor + '12', color: configs.widget.primaryColor }}
                                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                                >
                                    <Cpu size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs text-gray-800">
                                        {activeModelName}
                                    </h4>
                                    <p className="text-[10px] text-gray-400 font-medium">
                                        {activeIntegrationsCount > 0 ? "Synced Provider Engine" : "Local Mock Engine"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Temperature creativity slider */}
                        <div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                                Creativity (Temperature)
                            </span>
                            <div className="bg-white border border-gray-200 rounded-xl p-3.5 shadow-sm space-y-2">
                                <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
                                    <span>Temperature</span>
                                    <span className="font-mono font-bold" style={{ color: configs.widget.primaryColor }}>{temperature}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0.0"
                                    max="1.0"
                                    step="0.1"
                                    value={temperature}
                                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                                    className="w-full accent-purple-600 cursor-pointer h-1.5 bg-gray-200 rounded-lg appearance-none"
                                />
                            </div>
                        </div>

                        {/* Section 3: Custom API logs panel */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    🔗 Custom API Connection Logs
                                </span>
                                {apiLogs.length > 0 && (
                                    <button 
                                        onClick={() => setApiLogs([])}
                                        className="text-[9px] text-red-500 hover:text-red-750 font-bold cursor-pointer"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-inner text-[10px] font-mono text-slate-200 max-h-[160px] overflow-y-auto space-y-3">
                                {apiLogs.length === 0 ? (
                                    <p className="text-slate-500 italic text-center py-4">
                                        No logs. Enable 'Custom API' in integrations & submit the lead form to test.
                                    </p>
                                ) : (
                                    apiLogs.map(log => (
                                        <div key={log.id} className="space-y-1 border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                                            <div className="flex justify-between text-slate-400">
                                                <span>[{log.time}]</span>
                                                <span className="text-emerald-400 font-bold">{log.status}</span>
                                            </div>
                                            <div className="text-purple-400 font-bold">
                                                {log.method} <span className="text-slate-300 break-all">{log.url}</span>
                                            </div>
                                            <div className="bg-slate-950 p-1.5 rounded border border-slate-800 text-[9px] text-slate-400 overflow-x-auto max-h-24">
                                                <div className="font-bold text-slate-500 mb-0.5">Payload:</div>
                                                <pre className="text-amber-400">{JSON.stringify(log.payload, null, 2)}</pre>
                                                <div className="font-bold text-slate-500 my-0.5">Headers:</div>
                                                <pre className="text-slate-500">{JSON.stringify(log.headers, null, 2)}</pre>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Section 4: Live LLM RAG Debugging details */}
                        <div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                                Real-Time RAG Graph
                            </span>
                            <div className="bg-white border border-gray-100 rounded-xl p-3.5 space-y-2.5 shadow-sm text-xs">
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Matched Intent</span>
                                    <span className="font-semibold text-gray-800 text-[11px] block mt-0.5">
                                        {activeContext.intent}
                                    </span>
                                </div>
                                <hr className="border-gray-100" />
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Retrieved Info Segment</span>
                                    <span className="font-medium text-gray-600 text-[11px] block mt-0.5 leading-relaxed truncate-2-lines max-h-[38px] overflow-hidden" title={activeContext.retrievedInfo}>
                                        {activeContext.retrievedInfo}
                                    </span>
                                </div>
                                <hr className="border-gray-100" />
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Active Behavioral Rule</span>
                                    <span className="font-medium text-gray-600 text-[11px] block mt-0.5 leading-snug">
                                        {activeContext.activeRule}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sandbox Notice */}
                    <div className="mt-5 p-3.5 bg-yellow-50/70 border border-yellow-100 rounded-xl flex gap-2.5">
                        <AlertCircle size={18} className="text-yellow-600 shrink-0" />
                        <p className="text-[10px] text-yellow-800 leading-relaxed font-medium">
                            <strong>Local Simulation</strong>: Real LLM pipelines trigger upon dashboard publish. All tab settings (Branding, Skills, Guardrails, Webhooks) synchronize dynamically here.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}