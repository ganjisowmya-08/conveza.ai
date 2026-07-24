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
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Message Delivery & Engagement</h3>
                    <p className="text-sm text-gray-500">Weekly broadcast and automation activity</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-gray-600">Messages Sent</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-emerald-300"></div>
                        <span className="text-gray-600">Messages Read</span>
                    </div>
                </div>
            </div>

            {/* Bar Chart Visual */}
            <div className="h-64 flex items-end justify-between gap-4 pt-6 pb-2 border-b border-gray-100">
                {data.map((item, index) => {
                    const sentHeight = (item.sent / maxVal) * 100;
                    const readHeight = (item.read / maxVal) * 100;

                    return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                            <div className="w-full flex items-end justify-center gap-1.5 h-full relative">
                                {/* Sent Bar */}
                                <div
                                    style={{ height: `${sentHeight}%` }}
                                    className="w-full max-w-[20px] bg-gradient-to-t from-green-600 to-green-500 rounded-t-lg group-hover:from-green-700 group-hover:to-green-600 transition-all duration-300 relative"
                                >
                                    {/* Tooltip */}
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded font-semibold whitespace-nowrap transition-opacity pointer-events-none z-10">
                                        {item.sent} sent
                                    </div>
                                </div>

                                {/* Read Bar */}
                                <div
                                    style={{ height: `${readHeight}%` }}
                                    className="w-full max-w-[20px] bg-gradient-to-t from-emerald-300 to-emerald-200 rounded-t-lg transition-all duration-300"
                                ></div>
                            </div>
                            <span className="text-xs font-semibold text-gray-500 mt-2">{item.day}</span>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-center justify-between mt-4 text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1 text-green-600 font-semibold">
                    <ArrowUpRight size={14} /> 98.4% Average Delivery Rate
                </span>
                <span>Updated 5 mins ago</span>
            </div>
        </div>
    );
}
