import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatsCard({ title, value, change, isPositive, icon: Icon, color = "green" }) {
    const colorMap = {
        green: {
            iconBg: "bg-[#6847BA]/10 text-[#6847BA] border border-[#6847BA]/20",
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
        <div className="bg-white p-[20px] rounded-[18px] border border-purple-100/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group font-body">
            <div className="flex items-center justify-between gap-3 mb-4">
                <div className={`w-11 h-11 rounded-2xl ${activeColor.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs`}>
                    <Icon size={22} />
                </div>
                {change && (
                    <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        isPositive ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60" : "bg-rose-50 text-rose-700 border border-rose-200/60"
                    }`}>
                        {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
                        {change}
                    </span>
                )}
            </div>
            <div className="space-y-1.5">
                <p className="text-sm font-heading font-extrabold text-slate-400 uppercase tracking-wider leading-relaxed">{title}</p>
                <h3 className="text-3xl font-mono font-black text-slate-900 tracking-tight leading-tight">{value}</h3>
            </div>
        </div>
    );
}
