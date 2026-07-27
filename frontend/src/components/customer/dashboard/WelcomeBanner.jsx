import React from 'react';
import { Users, ScanLine, IndianRupee, Server } from 'lucide-react';

export default function WelcomeBanner({ name = "Hema", loading = false }) {
    if (loading) {
        return <div className="w-full h-[180px] bg-white rounded-[24px] animate-pulse mb-8" />;
    }

    return (
        <div className="w-full bg-gradient-to-r from-purple-50 via-white to-white rounded-[24px] border border-purple-100 p-8 shadow-sm flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">LIVE</span>
                    <span className="text-[11px] font-medium text-slate-400">All systems operational - refreshed 10s ago</span>
                </div>
                
                <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-3 flex items-center gap-3">
                    Good afternoon, {name} <span className="text-3xl animate-bounce">👋</span>
                </h1>
                
                <p className="text-[15px] font-medium text-slate-500 leading-relaxed max-w-xl">
                    Here's the real-time pulse of your Conveza.ai WhatsApp ecosystem across all your active campaigns and server nodes.
                </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 xl:gap-8">
                {/* Mini Stat 1 */}
                <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-100/50 text-[#6847BA] flex items-center justify-center">
                        <Users size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-800">1,284</h4>
                        <p className="text-[11px] font-semibold text-slate-400">Active users now</p>
                    </div>
                </div>

                <div className="w-px h-16 bg-slate-200 hidden sm:block" />

                {/* Mini Stat 2 */}
                <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
                        <ScanLine size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-800">320</h4>
                        <p className="text-[11px] font-semibold text-slate-400">Live replies / min</p>
                    </div>
                </div>

                <div className="w-px h-16 bg-slate-200 hidden sm:block" />

                {/* Mini Stat 3 */}
                <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                        <IndianRupee size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-800">₹18.4L</h4>
                        <p className="text-[11px] font-semibold text-slate-400">Revenue today</p>
                    </div>
                </div>

                <div className="w-px h-16 bg-slate-200 hidden sm:block" />

                {/* Mini Stat 4 */}
                <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
                        <Server size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-800">99.98%</h4>
                        <p className="text-[11px] font-semibold text-slate-400">Server health</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
