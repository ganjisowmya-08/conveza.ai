import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Chart() {
    const data = [
        { day: "Mon", sent: 420, read: 390 },
        { day: "Tue", sent: 680, read: 610 },
        { day: "Wed", sent: 950, read: 890 },
        { day: "Thu", sent: 810, read: 750 },
        { day: "Fri", sent: 1240, read: 1180 },
        { day: "Sat", sent: 910, read: 840 },
        { day: "Sun", sent: 1100, read: 1020 },
    ];

    const maxVal = 1400;

    return (
        <div className="bg-white p-7 md:p-8 rounded-3xl border border-purple-100/80 shadow-2xs font-body">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="space-y-1">
                    <h3 className="text-lg font-heading font-extrabold text-slate-900 leading-snug">Message Delivery & Engagement</h3>
                    <p className="text-xs md:text-sm font-body text-slate-500 leading-relaxed">Weekly broadcast and automation activity</p>
                </div>
                <div className="flex items-center gap-5 text-xs font-body font-semibold">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#6847BA]"></div>
                        <span className="text-slate-600">Messages Sent</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FCD144]"></div>
                        <span className="text-slate-600">Messages Read</span>
                    </div>
                </div>
            </div>

            {/* Bar Chart Visual */}
            <div className="h-64 flex items-end justify-between gap-4 pt-8 pb-3 border-b border-purple-100/60">
                {data.map((item, index) => {
                    const sentHeight = (item.sent / maxVal) * 100;
                    const readHeight = (item.read / maxVal) * 100;

                    return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
                            <div className="w-full flex items-end justify-center gap-2 h-full relative">
                                {/* Sent Bar (Royal Purple #6847BA) */}
                                <div
                                    style={{ height: `${sentHeight}%` }}
                                    className="w-full max-w-[18px] bg-[#6847BA] rounded-t-md group-hover:bg-[#5737a6] transition-all duration-300 relative"
                                >
                                    {/* Tooltip */}
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-900 text-[#FCD144] font-mono text-[11px] py-1 px-2.5 rounded-md font-bold whitespace-nowrap transition-opacity pointer-events-none z-10 shadow-md">
                                        {item.sent} sent
                                    </div>
                                </div>

                                {/* Read Bar (Golden Yellow #FCD144) */}
                                <div
                                    style={{ height: `${readHeight}%` }}
                                    className="w-full max-w-[18px] bg-[#FCD144] rounded-t-md transition-all duration-300"
                                ></div>
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-500 mt-2">{item.day}</span>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-center justify-between mt-6 text-xs font-body text-slate-500">
                <span className="flex items-center gap-1.5 text-[#6847BA] font-mono font-extrabold">
                    <ArrowUpRight size={16} /> 98.4% Average Delivery Rate
                </span>
                <span className="font-mono text-slate-400">Updated 5 mins ago</span>
            </div>
        </div>
    );
}
