import React from 'react';
import * as LucideIcons from 'lucide-react';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';

export default function QuickActionsGrid({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-6 shadow-sm h-full">
                <SkeletonLoader count={1} type="text" />
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <SkeletonLoader count={2} type="card" />
                    <SkeletonLoader count={2} type="card" />
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="h-full">
                <EmptyState 
                    icon="Zap" 
                    title="No Quick Actions" 
                    description="Configure quick actions in your settings to see them here."
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-full flex flex-col group transition-all hover:shadow-md">
            <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900">Quick Actions</h2>
                <p className="text-sm text-slate-500 font-medium">Common tasks and shortcuts</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {data.map((action) => {
                    const IconComponent = LucideIcons[action.icon] || LucideIcons.Zap;

                    return (
                        <button
                            key={action.id}
                            className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-purple-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/btn"
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm mb-3 group-hover/btn:scale-110 transition-transform duration-300 ${action.color}`}>
                                <IconComponent size={24} strokeWidth={2} />
                            </div>
                            <span className="text-sm font-bold text-slate-700 group-hover/btn:text-[#6847BA] transition-colors">{action.title}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
