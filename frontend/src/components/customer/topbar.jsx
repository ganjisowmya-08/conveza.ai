import React from "react";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
    return (
        <header className="bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between py-4 sticky top-0 z-10" style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '32px', paddingBottom: '20px' }}>

            {/* Left Section */}
            <div className="flex flex-col">
                <h2 className="font-heading text-2xl font-bold text-brand-primary leading-tight">
                    Good Morning, Hema 👋
                </h2>

                <p className="font-body text-sm text-slate-500 mt-1">
                    Welcome back! Here's what's happening with your business today.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">

                {/* Search Bar */}
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary w-4 h-4 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-body text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary w-64 transition-all placeholder:text-slate-400"
                        style={{ paddingLeft: '40px' }}
                    />
                </div>

                {/* Notification */}
                <button className="relative p-2 rounded-lg hover:bg-slate-100 transition">
                    <Bell
                        size={20}
                        className="text-brand-primary"
                    />

                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
                </button>


            </div>

        </header>
    );
}