import React from 'react';
import { Eye, Pencil, Play, Pause, MoreHorizontal, ArrowRight } from 'lucide-react';
import SkeletonLoader from '../../common/SkeletonLoader';
import EmptyState from '../../common/EmptyState';
import { STATUS_COLORS } from '../../../utils/dashboardConstants';

export default function RecentCampaignsTable({ data = [], loading = false }) {
    if (loading) {
        return (
            <div className="bg-white rounded-3xl border border-purple-100/50 p-6 shadow-sm h-full">
                <SkeletonLoader count={1} type="text" />
                <div className="mt-8 space-y-4">
                    <SkeletonLoader count={4} type="table-row" />
                </div>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="h-full">
                <EmptyState 
                    icon="Send" 
                    title="No Recent Campaigns" 
                    description="You haven't launched any campaigns recently."
                    actionText="Create Campaign"
                />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-[450px] flex flex-col group transition-all hover:shadow-md">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">Recent Campaigns</h2>
                    <p className="text-sm text-slate-500 font-medium">Monitor your latest WhatsApp campaigns</p>
                </div>
                <button className="px-4 py-2 bg-[#6847BA] text-white rounded-xl text-sm font-bold shadow-sm shadow-purple-500/20 hover:bg-[#5839a3] transition-colors">
                    View All
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-100">
                            <th className="pb-4 pt-2 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Campaign</th>
                            <th className="pb-4 pt-2 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                            <th className="pb-4 pt-2 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Sent</th>
                            <th className="pb-4 pt-2 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Delivered</th>
                            <th className="pb-4 pt-2 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Replies</th>
                            <th className="pb-4 pt-2 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {data.map((campaign) => {
                            const statusStyle = STATUS_COLORS[campaign.status] || STATUS_COLORS.paused;

                            return (
                                <tr key={campaign.id} className="hover:bg-slate-50/50 transition-colors group/row">
                                    <td className="py-4 px-2">
                                        <p className="font-bold text-slate-900">{campaign.name}</p>
                                        <p className="text-xs font-medium text-slate-400">{campaign.subtext}</p>
                                    </td>
                                    <td className="py-4 px-2">
                                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${statusStyle.bg} ${statusStyle.text}`}>
                                            <div className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                                            {statusStyle.label}
                                        </div>
                                    </td>
                                    <td className="py-4 px-2 font-semibold text-slate-700">{campaign.sent}</td>
                                    <td className="py-4 px-2 font-semibold text-slate-700">{campaign.delivered}</td>
                                    <td className="py-4 px-2 font-semibold text-slate-700">{campaign.replies}</td>
                                    <td className="py-4 px-2 text-right">
                                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover/row:opacity-100 transition-opacity">
                                            <button className="p-2 text-slate-400 hover:text-[#6847BA] hover:bg-purple-50 rounded-xl transition-colors" title="View">
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors" title="Edit">
                                                <Pencil size={16} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors" title="More">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
