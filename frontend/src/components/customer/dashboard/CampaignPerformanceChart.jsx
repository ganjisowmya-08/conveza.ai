import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { Calendar, MoreVertical, TrendingUp } from 'lucide-react';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';
import { COLORS } from '../../../utils/dashboardConstants';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/90 backdrop-blur-md border border-purple-100 p-4 rounded-2xl shadow-xl shadow-purple-500/10">
                <p className="font-bold text-slate-800 mb-3 text-sm">{label}</p>
                <div className="space-y-2">
                    {payload.map((entry, index) => (
                        <div key={index} className="flex items-center gap-4 justify-between">
                            <div className="flex items-center gap-2">
                                <div 
                                    className="w-2.5 h-2.5 rounded-full ring-2 ring-white" 
                                    style={{ backgroundColor: entry.color }} 
                                />
                                <span className="text-xs font-medium text-slate-500 capitalize">{entry.name}</span>
                            </div>
                            <span className="text-sm font-bold text-slate-900">
                                {entry.value.toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};

export default function CampaignPerformanceChart({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-8 shadow-sm h-full">
                <SkeletonLoader count={1} type="text" />
                <div className="mt-8">
                    <SkeletonLoader count={1} type="chart" />
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="h-full">
                <EmptyState 
                    icon="BarChart3" 
                    title="No Performance Data" 
                    description="Launch a campaign to start seeing performance metrics over time."
                    actionText="Create Campaign"
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-[450px] flex flex-col group transition-all hover:shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">Campaign Performance</h2>
                    <p className="text-sm text-slate-500 font-medium">Messages sent and customer replies over the last 7 days</p>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">
                        <TrendingUp size={14} />
                        <span>+18.6%</span>
                    </div>
                    
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-[#6847BA] rounded-xl text-sm font-bold hover:bg-purple-100 transition-colors border border-purple-100">
                        <Calendar size={16} />
                        <span>Last 7 Days</span>
                    </button>
                    
                    <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-xl transition-colors">
                        <MoreVertical size={20} />
                    </button>
                </div>
            </div>

            {/* Custom Legend */}
            <div className="flex flex-wrap items-center gap-6 mb-8 px-2">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-[#6847BA]" />
                        <span className="text-xs font-semibold text-slate-500">Messages</span>
                    </div>
                    <span className="text-xl font-black text-slate-900">17.8K</span>
                </div>
                <div className="w-px h-8 bg-slate-200 hidden sm:block" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-[#FCD144]" />
                        <span className="text-xs font-semibold text-slate-500">Replies</span>
                    </div>
                    <span className="text-xl font-black text-slate-900">4.5K</span>
                </div>
                <div className="w-px h-8 bg-slate-200 hidden sm:block" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold text-slate-500">Response Rate</span>
                    </div>
                    <span className="text-xl font-black text-slate-900">25%</span>
                </div>
            </div>

            <div className="flex-1 w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.15}/>
                                <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorReplies" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={COLORS.accent} stopOpacity={0.15}/>
                                <stop offset="95%" stopColor={COLORS.accent} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
                            tickFormatter={(value) => `${value >= 1000 ? (value / 1000) + 'k' : value}`}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '4 4' }} />
                        <Area 
                            type="monotone" 
                            dataKey="messages" 
                            stroke={COLORS.primary} 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorMessages)" 
                            activeDot={{ r: 6, strokeWidth: 0, fill: COLORS.primary }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="replies" 
                            stroke={COLORS.accent} 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorReplies)" 
                            activeDot={{ r: 6, strokeWidth: 0, fill: COLORS.accent }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
