import React from "react";
import { Bell, Search, Sparkles } from "lucide-react";

export default function Topbar() {
    return (
        <header className="h-16 bg-white/90 backdrop-blur-md border-b border-purple-100 flex items-center justify-between px-6 shrink-0 z-10 sticky top-0 select-none font-body">
            {/* Search Input Box */}
            <div className="relative w-72 md:w-96">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" size={16} />
                <input
                    type="text"
                    placeholder="Search contacts, broadcasts, AI logs..."
                    className="w-full pl-9 pr-12 py-2 bg-purple-50/40 border border-purple-100 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6847BA]/40 focus:bg-white transition-all shadow-2xs font-body"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-[#6847BA] bg-purple-100/80 px-1.5 py-0.5 rounded">
                    ⌘K
                </span>
            </div>

            {/* Right Action Icons & User Menu */}
            <div className="flex items-center gap-3">
                {/* Pro Plan Tag */}
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-[#FCD144] text-[#3d2f00] border border-[#e5b922] rounded-full text-xs font-extrabold shadow-2xs font-body">
                    <Sparkles size={13} className="fill-[#6847BA] text-[#6847BA]" /> Pro Plan
                </span>

                {/* Notifications Button */}
                <button className="p-2 text-slate-500 hover:text-[#6847BA] hover:bg-purple-50 rounded-xl transition-colors relative cursor-pointer">
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#6847BA] ring-2 ring-white"></span>
                </button>

                <div className="h-5 w-px bg-purple-100 hidden sm:block" />

                {/* User Avatar & Name */}
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity">
                    <div className="relative">
                        <div className="w-9 h-9 rounded-xl bg-[#6847BA] text-[#FCD144] flex items-center justify-center font-heading font-extrabold text-xs shadow-md shadow-[#6847BA]/20">
                            H
                        </div>
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#FCD144] ring-2 ring-white" />
                    </div>
                    <div className="hidden md:block text-left">
                        <p className="text-xs font-heading font-bold text-slate-900 leading-snug">Hema</p>
                        <p className="text-[10px] font-body font-semibold text-slate-400">Demo Business</p>
                    </div>
                </div>
            </div>
        </header>
    );
}