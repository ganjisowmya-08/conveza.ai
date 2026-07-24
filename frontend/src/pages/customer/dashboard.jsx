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
    CheckCircle2,
    ShieldCheck,
    Smartphone,
    Activity,
} from "lucide-react";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-8 md:gap-10 max-w-7xl mx-auto pb-16 font-body">
            {/* Top Greeting Header Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-[#4d3294] via-[#6847BA] to-[#7f58db] p-8 md:p-10 rounded-3xl text-white shadow-xl shadow-[#6847BA]/20 relative overflow-hidden">
                <div className="relative z-10 space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCD144] text-[#3d2f00] text-xs font-heading font-extrabold border border-[#e5b922] shadow-sm">
                        <Sparkles size={14} className="text-[#6847BA] fill-[#6847BA]" /> WhatsApp Business Suite
                    </div>
                    <h1 className="text-3xl md:text-4xl font-heading font-black text-white tracking-tight leading-tight">
                        Welcome back, Hema 👋
                    </h1>
                    <p className="text-purple-100 text-sm md:text-base font-body max-w-xl leading-relaxed font-medium">
                        Your WhatsApp AI Sales Agent is live and currently managing <span className="font-mono font-bold text-[#FCD144]">14</span> active conversations with <span className="font-mono font-bold text-[#FCD144]">98.6%</span> accuracy.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3.5 relative z-10 shrink-0">
                    <button className="px-5 py-3 rounded-2xl bg-[#FCD144] hover:bg-[#e5b922] text-[#3d2f00] font-heading font-black shadow-md transition-all flex items-center gap-2 text-xs md:text-sm cursor-pointer border border-[#e5b922]">
                        <Plus size={18} /> New Broadcast
                    </button>
                    <button className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-heading font-bold transition-all flex items-center gap-2 text-xs md:text-sm cursor-pointer">
                        <Bot size={18} /> AI Settings
                    </button>
                </div>

                {/* Decorative background glow */}
                <div className="absolute right-[-5%] top-[-20%] w-80 h-80 rounded-full bg-[#FCD144]/15 blur-3xl pointer-events-none" />
            </div>

            {/* Top Key Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
                <StatsCard
                    title="Total Messages Sent"
                    value="48,290"
                    change="+18.4%"
                    isPositive={true}
                    icon={Send}
                    color="purple"
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
                    color="green"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                {/* Left 2 Columns: Analytics Chart, Campaigns & Recent Leads Table */}
                <div className="lg:col-span-2 space-y-8 md:space-y-10">
                    {/* Weekly Chart */}
                    <Chart />

                    {/* Recent Broadcast Campaigns */}
                    <CampaignCard />

                    {/* Customer Contacts Table */}
                    <ContactTable />
                </div>

                {/* Right 1 Column: AI Agent Monitor & WhatsApp API Health */}
                <div className="space-y-8 md:space-y-10">
                    {/* AI Sales Agent Status Card */}
                    <div className="bg-white p-7 md:p-8 rounded-3xl border border-purple-100/80 shadow-2xs relative overflow-hidden font-body">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3.5">
                                <div className="w-11 h-11 rounded-2xl bg-[#6847BA] text-[#FCD144] flex items-center justify-center font-heading font-bold text-xl shadow-md shadow-[#6847BA]/20">
                                    🤖
                                </div>
                                <div className="space-y-0.5">
                                    <h3 className="font-heading font-bold text-slate-900 text-base leading-snug">Conveza AI Agent</h3>
                                    <p className="text-xs font-heading font-extrabold text-[#6847BA] flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#FCD144] ring-2 ring-[#6847BA]/30 animate-pulse"></span>
                                        Live & Responding
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50/30 rounded-2xl p-5 border border-purple-100/60 space-y-4 text-xs">
                            <div className="flex justify-between items-center pb-3 border-b border-purple-100/60">
                                <span className="text-slate-500 font-medium leading-relaxed">Agent Accuracy</span>
                                <span className="font-mono font-black text-slate-900">98.6%</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-purple-100/60">
                                <span className="text-slate-500 font-medium leading-relaxed">Chats Handled Today</span>
                                <span className="font-mono font-black text-slate-900">312 Chats</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-500 font-medium leading-relaxed">Avg Turnaround</span>
                                <span className="font-mono font-black text-[#6847BA]">1.2 Seconds</span>
                            </div>
                        </div>

                        <button className="w-full mt-5 py-3 rounded-2xl bg-[#6847BA]/10 hover:bg-[#6847BA]/20 text-[#6847BA] font-heading font-extrabold text-xs transition-colors flex items-center justify-center gap-2 border border-[#6847BA]/30 cursor-pointer">
                            Configure AI Prompts <ArrowUpRight size={16} />
                        </button>
                    </div>

                    {/* WhatsApp API Connection Status */}
                    <div className="bg-white p-7 md:p-8 rounded-3xl border border-purple-100/80 shadow-2xs space-y-5 font-body">
                        <div className="flex items-center justify-between border-b border-purple-100/60 pb-4">
                            <div className="flex items-center gap-2.5">
                                <ShieldCheck size={20} className="text-[#6847BA]" />
                                <h3 className="font-heading font-bold text-slate-900 text-base">WhatsApp API</h3>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-[#FCD144] text-[#3d2f00] border border-[#e5b922]">
                                <CheckCircle2 size={12} /> Connected
                            </span>
                        </div>

                        <div className="space-y-4 text-xs text-slate-600">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2 text-slate-500 font-medium">
                                    <Smartphone size={16} className="text-slate-400" /> Phone Number
                                </span>
                                <span className="font-mono font-bold text-slate-800">+1 (555) 019-2831</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-2 text-slate-500 font-medium">
                                    <Activity size={16} className="text-slate-400" /> Daily Messaging Tier
                                </span>
                                <span className="font-mono font-bold text-slate-800">Tier 3 (100k/day)</span>
                            </div>
                        </div>

                        <div className="pt-2 space-y-2">
                            <div className="flex justify-between text-xs font-mono font-extrabold text-slate-500">
                                <span>Daily Quota Used</span>
                                <span>48,290 / 100,000</span>
                            </div>
                            <div className="w-full h-2.5 bg-purple-50 rounded-full overflow-hidden border border-purple-100">
                                <div className="h-full bg-[#6847BA] rounded-full w-[48%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}