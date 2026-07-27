import React from 'react';
import { Target, TrendingUp, ArrowRight } from 'lucide-react';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';
import { COLORS } from '../../../utils/dashboardConstants';

export default function MonthlyTarget({ data, loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-6 shadow-sm h-full flex items-center justify-center">
                <div className="w-full">
                    <SkeletonLoader count={1} type="text" />
                    <div className="mt-8 flex justify-center">
                        <div className="w-40 h-40 rounded-full border-8 border-slate-100"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="h-full">
                <EmptyState 
                    icon="Target" 
                    title="No Targets Set" 
                    description="Set your monthly goals to track your progress here."
                />
            </div>
        );
    }

    const { target, achieved, performanceGrowth } = data;
    const percentage = Math.min(Math.round((achieved / target) * 100), 100);
    const remaining = Math.max(target - achieved, 0);
    
    // SVG Circle parameters
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-[450px] flex flex-col group transition-all hover:shadow-md">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">Monthly Target</h2>
                    <p className="text-sm text-slate-500 font-medium">WhatsApp messages goal</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#6847BA] flex items-center justify-center">
                    <Target size={20} strokeWidth={2} />
                </div>
            </div>

            {/* Circular Progress */}
            <div className="flex justify-center items-center flex-1 my-4">
                <div className="relative flex items-center justify-center">
                    <svg className="transform -rotate-90 w-40 h-40">
                        {/* Background Track */}
                        <circle
                            cx="80"
                            cy="80"
                            r={radius}
                            stroke="#F8FAFC"
                            strokeWidth="12"
                            fill="transparent"
                        />
                        {/* Progress Track */}
                        <circle
                            cx="80"
                            cy="80"
                            r={radius}
                            stroke="url(#gradient)"
                            strokeWidth="12"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-out"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={COLORS.primary} />
                                <stop offset="100%" stopColor={COLORS.secondary} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-black text-slate-900">{percentage}%</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Completed</span>
                    </div>
                </div>
            </div>

            {/* Stats Breakdown */}
            <div className="bg-slate-50 rounded-2xl p-4 mt-2">
                <div className="flex justify-between items-end mb-2">
                    <div>
                        <p className="text-xs font-semibold text-slate-500 mb-1">Messages Sent</p>
                        <p className="text-xl font-bold text-slate-900">{achieved.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-semibold text-slate-500 mb-1">Remaining</p>
                        <p className="text-xl font-bold text-slate-900">{remaining.toLocaleString()}</p>
                    </div>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div 
                        className="bg-gradient-to-r from-[#6847BA] to-[#8B5CF6] h-full rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                <div>
                    <p className="text-xs font-semibold text-slate-500 mb-1">Performance</p>
                    <div className="flex items-center gap-1 text-emerald-600 font-bold text-sm">
                        <TrendingUp size={16} />
                        <span>{performanceGrowth}</span>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#6847BA] text-white rounded-xl text-sm font-bold shadow-sm shadow-purple-500/20 hover:bg-[#5839a3] hover:shadow-md transition-all group/btn">
                    View Report
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
