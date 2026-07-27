import React from 'react';
import * as LucideIcons from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import SkeletonLoader from '../../common/SkeletonLoader';

const SPARKLINE_DATA_UP = [
    { value: 10 }, { value: 15 }, { value: 25 }, { value: 20 }, { value: 35 }, { value: 30 }, { value: 45 }
];
const SPARKLINE_DATA_DOWN = [
    { value: 45 }, { value: 35 }, { value: 40 }, { value: 25 }, { value: 30 }, { value: 15 }, { value: 10 }
];

export default function StatsCards({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <SkeletonLoader count={4} type="card" />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 w-full">
            {data.map((item, index) => {
                const IconComponent = LucideIcons[item.icon] || LucideIcons.Activity;
                const isPositive = item.trend === 'up';
                const sparklineData = isPositive ? SPARKLINE_DATA_UP : SPARKLINE_DATA_DOWN;

                return (
                    <div 
                        key={item.id || index}
                        className="bg-white border border-purple-100/50 rounded-[20px] p-5 shadow-[0_4px_20px_-8px_rgba(104,71,186,0.1)] hover:shadow-md transition-shadow flex flex-col justify-between h-[150px] relative overflow-hidden"
                    >
                        {/* Top Row: Icon, Title, Trend */}
                        <div className="flex justify-between items-start w-full mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0 bg-[#6847BA]/10 text-[#6847BA]">
                                    <IconComponent size={18} strokeWidth={2.5} />
                                </div>
                                <p className="text-[14px] font-medium text-slate-500">{item.title}</p>
                            </div>
                            <div className={`flex items-center gap-1 text-[12px] font-bold mt-1 ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                                {isPositive ? <LucideIcons.ArrowUpRight size={14} /> : <LucideIcons.ArrowDownRight size={14} />}
                                {item.growth}
                            </div>
                        </div>
                        
                        {/* Bottom Row: Value/Subtitle (Left) and Sparkline (Right) */}
                        <div className="flex justify-between items-end w-full mt-auto">
                            <div className="flex flex-col">
                                <h3 className="text-[32px] font-black text-slate-900 tracking-tight leading-none mb-2.5">
                                    {item.value}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${isPositive ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                                    <p className="text-[12px] font-medium text-slate-400">{item.subtitle}</p>
                                </div>
                            </div>
                            <div className="h-10 w-24 shrink-0 mb-1">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={sparklineData}>
                                        <Line 
                                            type="monotone" 
                                            dataKey="value" 
                                            stroke={isPositive ? "#6847BA" : "#ef4444"} 
                                            strokeWidth={2.5} 
                                            dot={false}
                                            isAnimationActive={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
