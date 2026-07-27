import React from 'react';
import * as LucideIcons from 'lucide-react';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';

export default function AIInsights({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-6 shadow-sm h-full">
                <SkeletonLoader count={1} type="text" />
                <div className="mt-8 space-y-4">
                    <SkeletonLoader count={2} type="card" />
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="h-full">
                <EmptyState 
                    icon="Sparkles" 
                    title="No AI Insights" 
                    description="Conveza AI is still learning from your data. Check back later!"
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-full flex flex-col group transition-all hover:shadow-md relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-purple-200/20 blur-3xl rounded-full pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6 relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-lg font-bold text-slate-900">AI Insights</h2>
                        <div className="px-2 py-0.5 bg-gradient-to-r from-[#6847BA] to-[#8B5CF6] text-white text-[10px] font-black rounded-full uppercase tracking-wider">
                            Beta
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">Smart recommendations for your business</p>
                </div>
                <LucideIcons.Sparkles size={24} className="text-[#6847BA]" />
            </div>

            <div className="space-y-4 relative z-10">
                {data.map((insight) => {
                    const IconComponent = LucideIcons[insight.icon] || LucideIcons.Lightbulb;

                    return (
                        <div key={insight.id} className="bg-gradient-to-r from-purple-50/50 to-white p-4 rounded-2xl border border-purple-100 hover:border-[#6847BA]/30 hover:shadow-sm transition-all group/card cursor-default">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-purple-50 flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform">
                                    <IconComponent size={20} className="text-[#6847BA]" strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 mb-1">{insight.title}</h4>
                                    <p className="text-xs font-medium text-slate-600 leading-relaxed">{insight.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
