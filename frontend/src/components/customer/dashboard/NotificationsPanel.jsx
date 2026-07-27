import React from 'react';
import * as LucideIcons from 'lucide-react';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';
import { NOTIFICATION_TYPES } from '../../../utils/dashboardConstants';

export default function NotificationsPanel({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-6 shadow-sm h-full">
                <SkeletonLoader count={1} type="text" />
                <div className="mt-8 space-y-6">
                    <SkeletonLoader count={4} type="text" />
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="h-full">
                <EmptyState 
                    icon="Bell" 
                    title="All Caught Up" 
                    description="You have no new notifications right now."
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-full flex flex-col group transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">Notifications</h2>
                    <p className="text-sm text-slate-500 font-medium">Recent activity alerts</p>
                </div>
                <button className="px-3 py-1.5 text-[#6847BA] hover:bg-purple-50 rounded-lg text-sm font-bold transition-colors">
                    View All
                </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-5 custom-scrollbar">
                {data.map((notification) => {
                    const typeConfig = NOTIFICATION_TYPES[notification.type] || NOTIFICATION_TYPES.system;
                    const IconComponent = LucideIcons[typeConfig.icon] || LucideIcons.Bell;

                    return (
                        <div key={notification.id} className="flex gap-4 group/item">
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${typeConfig.bg} ${typeConfig.color}`}>
                                <IconComponent size={18} strokeWidth={2.5} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-0.5">
                                    <p className="text-sm font-bold text-slate-900 truncate pr-2">{notification.title}</p>
                                    <span className="text-xs font-semibold text-slate-400 whitespace-nowrap shrink-0">{notification.time}</span>
                                </div>
                                <p className="text-xs font-medium text-slate-500 line-clamp-2">{notification.message}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
