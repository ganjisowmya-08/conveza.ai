import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/90 backdrop-blur-md border border-purple-100 p-3 rounded-xl shadow-lg">
                <p className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <span 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: payload[0].payload.color }} 
                    />
                    {payload[0].name}: {payload[0].value}%
                </p>
            </div>
        );
    }
    return null;
};

export default function DeviceAnalytics({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-6 shadow-sm h-full">
                <SkeletonLoader count={1} type="text" />
                <div className="mt-8 flex justify-center">
                    <SkeletonLoader count={1} type="chart" />
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="h-full">
                <EmptyState 
                    icon="MonitorSmartphone" 
                    title="No Device Data" 
                    description="Not enough traffic to analyze device usage yet."
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-full flex flex-col group transition-all hover:shadow-md">
            <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900">Device Analytics</h2>
                <p className="text-sm text-slate-500 font-medium">Customer interactions by device</p>
            </div>

            <div className="flex-1 w-full flex items-center justify-center relative">
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-black text-slate-900">100%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Traffic</span>
                </div>
            </div>

            {/* Custom Legend underneath */}
            <div className="flex justify-center gap-6 mt-6">
                {data.map((entry, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-xs font-semibold text-slate-500">{entry.name}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-900">{entry.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
