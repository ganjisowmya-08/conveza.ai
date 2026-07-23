import React from "react";
import StatsCard from "../../components/customer/statsCard";
import Chart from "../../components/customer/chart";
import CampaignCard from "../../components/customer/campaignCard";
import ContactTable from "../../components/customer/contactTable";
import {
    Send,
    Users,
    MessageSquare,
    Zap,
    Plus,
    Bot,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

export default function Dashboard() {
    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-12">
            {/* Top Greeting Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 p-8 rounded-3xl text-white shadow-xl shadow-green-900/10 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold mb-3">
                        <Sparkles size={14} className="text-yellow-300" /> WhatsApp Business Suite
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight">Welcome back, Hema 👋</h1>
                    <p className="mt-2 text-green-100 text-sm max-w-xl leading-relaxed font-medium">
                        Your WhatsApp AI Sales Agent is active and currently managing 14 live conversations.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 relative z-10">
                    <button className="px-5 py-2.5 rounded-xl bg-white text-green-700 font-bold hover:bg-green-50 shadow-md transition-all flex items-center gap-2 text-sm">
                        <Plus size={18} /> New Broadcast
                    </button>
                    <button className="px-5 py-2.5 rounded-xl bg-green-800/60 hover:bg-green-800/80 backdrop-blur-md border border-white/20 text-white font-semibold transition-all flex items-center gap-2 text-sm">
                        <Bot size={18} /> AI Settings
                    </button>
                </div>

                {/* Decorative glow */}
                <div className="absolute right-[-5%] top-[-20%] w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            </div>

            {/* Stats Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <StatsCard
                    title="Total Messages Sent"
                    value="48,290"
                    change="+18.4%"
                    isPositive={true}
                    icon={Send}
                    color="green"
                />
                <StatsCard
                    title="Active Contacts"
                    value="12,450"
                    change="+12.1%"
                    isPositive={true}
                    icon={Users}
                    color="blue"
                />
                <StatsCard
                    title="Avg Response Rate"
                    value="94.2%"
                    change="+4.5%"
                    isPositive={true}
                    icon={MessageSquare}
                    color="purple"
                />
                <StatsCard
                    title="Automated Conversions"
                    value="1,840"
                    change="+24.8%"
                    isPositive={true}
                    icon={Zap}
                    color="emerald"
                />
            </div>

            {/* Main Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left 2 Columns: Chart & Recent Broadcasts */}
                <div className="lg:col-span-2 space-y-8">
                    <Chart />
                    <CampaignCard />
                </div>

                {/* Right 1 Column: AI Sales Agent Card & Recent Leads */}
                <div className="space-y-8">
                    {/* AI Agent Status Card */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-green-500 to-emerald-400 text-white flex items-center justify-center font-bold text-xl shadow-md">
                                    🤖
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-base">Conveza AI Agent</h3>
                                    <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Active & Responding
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3 text-xs text-gray-600">
                            <div className="flex justify-between items-center pb-2 border-b border-gray-200/60">
                                <span>Agent Accuracy</span>
                                <span className="font-bold text-gray-900">98.6%</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-gray-200/60">
                                <span>Handled Today</span>
                                <span className="font-bold text-gray-900">312 Chats</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Avg Response Time</span>
                                <span className="font-bold text-green-600">1.2 Seconds</span>
                            </div>
                        </div>

                        <button className="w-full mt-4 py-2.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 font-bold text-xs transition-colors flex items-center justify-center gap-1">
                            Configure AI Prompts <ArrowUpRight size={14} />
                        </button>
                    </div>

                    {/* Customer Contacts Component */}
                    <ContactTable />
                </div>
            </div>
        </div>
    );
}