import React from "react";
import { Bell } from "lucide-react";

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

                {/* Plan Badge */}
                <div className="font-body rounded-full bg-brand-accent text-slate-900 text-sm font-semibold flex items-center justify-center" style={{ padding: '4px 12px', whiteSpace: 'nowrap' }}>
                    Pro Plan
                </div>

                {/* Notification */}
                <button className="relative p-2 rounded-lg hover:bg-slate-100 transition">
                    <Bell
                        size={20}
                        className="text-brand-primary"
                    />

                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
                </button>

                {/* User */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-semibold font-body">
                        H
                    </div>

                    <div>
                        <h4 className="font-body text-sm font-semibold text-slate-900">
                            Hema
                        </h4>

                        <p className="font-body text-xs text-slate-500">
                            Demo Business
                        </p>
                    </div>
                </div>

            </div>

        </header>
    );
}