import React, { useState } from "react";
import {
    Bot,
    Sparkles,
    Play,
    Pause,
    Save,
    Send,
    MessageSquare,
    Zap,
    Sliders,
    BrainCircuit,
    UserCheck,
    CheckCircle2,
    Settings,
} from "lucide-react";

export default function AgentModule() {
    const [isAgentActive, setIsAgentActive] = useState(true);
    const [agentRole, setAgentRole] = useState("Sales & Lead Qualification");
    const [agentTone, setAgentTone] = useState("Friendly & Persuasive");
    const [systemPrompt, setSystemPrompt] = useState(
        "You are Conveza AI, an expert sales agent for WhatsApp Business. Your goal is to welcome new leads, answer product questions about pricing and features, recommend relevant items, and encourage leads to book a demo or make a purchase."
    );
    const [autoHandoff, setAutoHandoff] = useState(true);

    // Chat playground state
    const [chatMessages, setChatMessages] = useState([
        { id: 1, sender: "agent", text: "Hello! 👋 I'm your AI Sales Assistant. How can I help boost your sales today?" },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMsg = { id: Date.now(), sender: "user", text: inputMessage };
        setChatMessages((prev) => [...prev, userMsg]);
        const currentInput = inputMessage;
        setInputMessage("");

        // Simulate AI Response
        setTimeout(() => {
            let aiText = "Thank you for asking! Conveza.AI automates your WhatsApp campaigns, captures leads 24/7, and integrates directly with your CRM.";
            if (currentInput.toLowerCase().includes("pricing")) {
                aiText = "Our pricing starts at ₹2,999/month for Growth, and ₹7,499/month for Pro. Would you like me to send you the full pricing breakdown PDF?";
            } else if (currentInput.toLowerCase().includes("demo")) {
                aiText = "I can set up a live 1-on-1 demo for you right now! What time works best for you tomorrow?";
            }

            setChatMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, sender: "agent", text: aiText },
            ]);
        }, 800);
    };

    const handleSaveConfig = () => {
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-12">
            {/* Header Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-green-600 to-emerald-400 text-white flex items-center justify-center text-3xl shadow-lg shadow-green-500/20">
                        🤖
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">AI Agent Module</h1>
                            <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold ${
                                isAgentActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                            }`}>
                                <span className={`w-2 h-2 rounded-full ${isAgentActive ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}></span>
                                {isAgentActive ? "Live & Active" : "Paused"}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                            Configure, train, and test your 24/7 WhatsApp autonomous sales & support agent
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsAgentActive(!isAgentActive)}
                        className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm ${
                            isAgentActive
                                ? "bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                                : "bg-green-600 text-white hover:bg-green-700 shadow-green-600/20"
                        }`}
                    >
                        {isAgentActive ? <Pause size={16} /> : <Play size={16} />}
                        {isAgentActive ? "Pause Agent" : "Activate Agent"}
                    </button>
                    <button
                        onClick={handleSaveConfig}
                        className="px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                    >
                        <Save size={16} />
                        {isSaved ? "Saved!" : "Save Settings"}
                    </button>
                </div>
            </div>

            {/* Performance Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-semibold text-gray-400">Total Conversations Handled</p>
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-1">1,420 Chats</h3>
                    <span className="text-xs font-semibold text-green-600 mt-2 inline-block">↑ 28% this week</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-semibold text-gray-400">AI Response Accuracy</p>
                    <h3 className="text-2xl font-extrabold text-green-600 mt-1">98.6%</h3>
                    <span className="text-xs font-medium text-gray-500 mt-2 inline-block">Based on 500+ ratings</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-semibold text-gray-400">Avg Response Speed</p>
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-1">1.1 Seconds</h3>
                    <span className="text-xs font-semibold text-blue-600 mt-2 inline-block">Instant AI Turnaround</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-semibold text-gray-400">Human Handoff Rate</p>
                    <h3 className="text-2xl font-extrabold text-gray-900 mt-1">4.2%</h3>
                    <span className="text-xs font-medium text-gray-500 mt-2 inline-block">Low escalation rate</span>
                </div>
            </div>

            {/* Main Configuration & Playground Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left 2 Cols: Agent Training & Settings */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Role & Persona */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
                            <Sliders size={20} className="text-green-600" />
                            <h3 className="text-lg font-bold text-gray-900">Agent Persona & Tone</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Primary Role</label>
                                <select
                                    value={agentRole}
                                    onChange={(e) => setAgentRole(e.target.value)}
                                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                                >
                                    <option value="Sales & Lead Qualification">Sales & Lead Qualification</option>
                                    <option value="Customer Support Specialist">Customer Support Specialist</option>
                                    <option value="Appointment Scheduler">Appointment Scheduler</option>
                                    <option value="Order Tracking Assistant">Order Tracking Assistant</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Conversation Tone</label>
                                <select
                                    value={agentTone}
                                    onChange={(e) => setAgentTone(e.target.value)}
                                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                                >
                                    <option value="Friendly & Persuasive">Friendly & Persuasive</option>
                                    <option value="Professional & Formal">Professional & Formal</option>
                                    <option value="Casual & Enthusiastic">Casual & Enthusiastic</option>
                                    <option value="Direct & Concise">Direct & Concise</option>
                                </select>
                            </div>
                        </div>

                        {/* System Prompt / Knowledge Base Instructions */}
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-xs font-bold text-gray-700">System Instruction Prompt</label>
                                <span className="text-[10px] text-gray-400">Teaches the AI how to respond</span>
                            </div>
                            <textarea
                                rows={4}
                                value={systemPrompt}
                                onChange={(e) => setSystemPrompt(e.target.value)}
                                className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 leading-relaxed"
                                placeholder="Describe how the AI agent should greet customers, handle FAQs, and push for sales..."
                            />
                        </div>

                        {/* Auto-Handoff Toggle */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Automatic Human Handoff</h4>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    Transfer conversation to a human support rep if sentiment turns negative
                                </p>
                            </div>
                            <button
                                onClick={() => setAutoHandoff(!autoHandoff)}
                                className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${
                                    autoHandoff ? "bg-green-600" : "bg-gray-300"
                                }`}
                            >
                                <div
                                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                                        autoHandoff ? "translate-x-6" : "translate-x-0"
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right 1 Col: Test Playground */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-[520px]">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                        <div className="flex items-center gap-2">
                            <Sparkles size={18} className="text-green-600" />
                            <h3 className="font-bold text-gray-900 text-base">Test Agent Simulator</h3>
                        </div>
                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                            Live Preview
                        </span>
                    </div>

                    {/* Messages Window */}
                    <div className="flex-1 overflow-y-auto space-y-3 p-3 bg-gray-50 rounded-xl mb-4 border border-gray-100 text-xs">
                        {chatMessages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl ${
                                        msg.sender === "user"
                                            ? "bg-green-600 text-white rounded-tr-none"
                                            : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Field */}
                    <form onSubmit={handleSendMessage} className="relative">
                        <input
                            type="text"
                            placeholder="Type a test message (e.g. 'Pricing?')..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            className="w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-2 p-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            <Send size={12} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
