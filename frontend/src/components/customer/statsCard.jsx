import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatsCard({ title, value, change, isPositive, icon: Icon, color = "green" }) {
    const colorMap = {
        green: {
            iconBg: "bg-purple-50 text-[#6847BA] border border-purple-100",
        },
        blue: {
            iconBg: "bg-blue-50 text-blue-600 border border-blue-100",
        },
        purple: {
            iconBg: "bg-[#6847BA]/10 text-[#6847BA] border border-[#6847BA]/20",
        },
        emerald: {
            iconBg: "bg-amber-50 text-amber-700 border border-amber-200/60",
        },
    };

    const activeColor = colorMap[color] || colorMap.green;

    return (
        <div className="bg-white p-6 md:p-7 rounded-3xl border border-purple-100/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group font-body">
            <div className="flex items-center justify-between gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl ${activeColor.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs`}>
                    <Icon size={22} />
                </div>
                {change && (
                    <span className={`inline-flex items-center gap-1 text-xs font-mono font-extrabold px-3 py-1 rounded-full ${
                        isPositive ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60" : "bg-rose-50 text-rose-700 border border-rose-200/60"
                    }`}>
                        {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
                        {change}
                    </span>
                )}
            </div>
            <div className="space-y-2">
                <p className="text-xs font-heading font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{title}</p>
                <h3 className="text-3xl md:text-4xl font-mono font-black text-slate-900 tracking-tight leading-none">{value}</h3>
            </div>
        </div>
    );
}
