import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';
import { COLORS } from '../../../utils/dashboardConstants';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/90 backdrop-blur-md border border-purple-100 p-3 rounded-xl shadow-lg">
                <p className="font-bold text-slate-800 text-sm mb-2">{label}</p>
                {payload.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-xs font-semibold text-slate-500">{entry.name}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-900">{entry.value}%</span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export default function TopPerformingCampaigns({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-6 shadow-sm h-full">
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
                    icon="Trophy" 
                    title="No Top Campaigns" 
                    description="Run more campaigns to see your top performers here."
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-full flex flex-col group transition-all hover:shadow-md">
            <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900">Top Performing Campaigns</h2>
                <p className="text-sm text-slate-500 font-medium">Ranked by Open and Reply rates</p>
            </div>

            <div className="flex-1 w-full h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={data}
                        margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                        barSize={12}
                        barGap={4}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                        <XAxis 
                            type="number" 
                            hide 
                        />
                        <YAxis 
                            dataKey="name" 
                            type="category" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                            width={100}
                        />
                        <Tooltip cursor={{ fill: '#f8fafc' }} content={<CustomTooltip />} />
                        <Bar 
                            dataKey="openRate" 
                            name="Open Rate"
                            fill={COLORS.primary} 
                            radius={[0, 4, 4, 0]}
                        />
                        <Bar 
                            dataKey="replyRate" 
                            name="Reply Rate"
                            fill={COLORS.accent} 
                            radius={[0, 4, 4, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#6847BA]" />
                    <span className="text-xs font-semibold text-slate-500">Open Rate</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FCD144]" />
                    <span className="text-xs font-semibold text-slate-500">Reply Rate</span>
                </div>
            </div>
        </div>
    );
}
