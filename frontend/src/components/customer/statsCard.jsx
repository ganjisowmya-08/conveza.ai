import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatsCard({ title, value, change, isPositive, icon: Icon, color = "green" }) {
    const colorMap = {
        green: {
            bg: "bg-green-50",
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            badgeBg: "bg-green-100 text-green-700",
        },
        blue: {
            bg: "bg-blue-50",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            badgeBg: "bg-blue-100 text-blue-700",
        },
        purple: {
            bg: "bg-purple-50",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            badgeBg: "bg-purple-100 text-purple-700",
        },
        emerald: {
            bg: "bg-emerald-50",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600",
            badgeBg: "bg-emerald-100 text-emerald-700",
        },
    };

    const activeColor = colorMap[color] || colorMap.green;

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${activeColor.iconBg} ${activeColor.iconColor} flex items-center justify-center`}>
                    <Icon size={24} />
                </div>
                {change && (
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        {change}
                    </span>
                )}
            </div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-1 tracking-tight">{value}</h3>
        </div>
    );
}
