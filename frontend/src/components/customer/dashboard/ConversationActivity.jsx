import React from 'react';
import * as LucideIcons from 'lucide-react';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';

export default function ConversationActivity({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-6 shadow-sm h-full">
                <SkeletonLoader count={1} type="text" />
                <div className="mt-8 space-y-8">
                    <SkeletonLoader count={3} type="text" />
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="h-full">
                <EmptyState 
                    icon="MessageCircle" 
                    title="No Activity Yet" 
                    description="No customer conversations have been recorded today."
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-full flex flex-col group transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">Conversation Activity</h2>
                    <p className="text-sm text-slate-500 font-medium">Live customer interactions timeline</p>
                </div>
            </div>

            <div className="relative border-l-2 border-purple-100 ml-4 space-y-8 pb-4">
                {data.map((item, index) => {
                    const IconComponent = LucideIcons[item.icon] || LucideIcons.Circle;
                    
                    // Determine colors based on type
                    let iconBg = "bg-slate-100 text-slate-500";
                    if (item.type === "user") iconBg = "bg-emerald-100 text-emerald-600";
                    else if (item.type === "ai") iconBg = "bg-purple-100 text-[#6847BA]";
                    else if (item.type === "agent") iconBg = "bg-amber-100 text-amber-600";
                    else if (item.type === "system") iconBg = "bg-blue-100 text-blue-600";

                    return (
                        <div key={item.id} className="relative pl-8">
                            <div className={`absolute -left-[17px] top-0.5 w-8 h-8 rounded-xl flex items-center justify-center ring-4 ring-white ${iconBg}`}>
                                <IconComponent size={14} strokeWidth={2.5} />
                            </div>
                            
                            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:bg-white hover:shadow-md transition-all group/item">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-sm font-bold text-slate-900 group-hover/item:text-[#6847BA] transition-colors">{item.title}</h4>
                                    <span className="text-xs font-semibold text-slate-400">{item.time}</span>
                                </div>
                                <p className="text-xs font-medium text-slate-500">{item.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
