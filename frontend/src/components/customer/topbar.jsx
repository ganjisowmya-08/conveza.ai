import React from "react";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
    return (
        <header className="bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between px-8 py-4 shrink-0 z-10 sticky top-0 select-none font-sans w-full h-[72px]">
            {/* Left: Search Bar */}
            <div className="flex-1 flex items-center">
                <div className="flex items-center bg-white border border-slate-200 rounded-lg px-3 py-2 w-[380px] text-slate-500 shadow-sm">
                    <Search size={16} className="mr-2 text-slate-400" />
                    <input type="text" placeholder="Search contacts, campaigns..." className="bg-transparent border-none outline-none text-sm w-full text-slate-900 placeholder:text-slate-400" />
                </div>
            </div>

            {/* Right Action Panel */}
            <div className="flex items-center gap-6">
                
                {/* Pro Plan Text */}
                <span className="text-emerald-600 font-medium text-sm">
                    Pro Plan
                </span>

                {/* Notifications Button */}
                <button
                    className="text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    title="Notifications"
                >
                    <Bell size={20} strokeWidth={2} />
                </button>
                
                {/* User Profile */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                        H
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-900 leading-tight">Hema</span>
                        <span className="text-xs text-slate-500 leading-tight">Demo Business</span>
                    </div>
                </div>
            </div>
        </header>
    );
}