import React from "react";
import { Megaphone, CheckCircle2, Clock, Play, MoreVertical } from "lucide-react";

export default function CampaignCard() {
    const campaigns = [
        {
            id: 1,
            name: "Summer Flash Sale 2026",
            audience: "VIP Customers (3,420)",
            sent: "3,420",
            delivered: "99.2%",
            openRate: "94.8%",
            status: "Completed",
            statusColor: "bg-[#6847BA]/10 text-[#6847BA] border-[#6847BA]/20",
            time: "Today, 10:30 AM",
        },
        {
            id: 2,
            name: "Abandoned Cart Nurture",
            audience: "Checkout Drops (840)",
            sent: "840",
            delivered: "98.5%",
            openRate: "91.2%",
            status: "Active",
            statusColor: "bg-[#FCD144] text-[#3d2f00] border-[#e5b922]",
            time: "Ongoing Automation",
        },
        {
            id: 3,
            name: "Weekend Special Discount",
            audience: "All Subscribers (12,500)",
            sent: "0",
            delivered: "0%",
            openRate: "0%",
            status: "Scheduled",
            statusColor: "bg-purple-50 text-purple-700 border-purple-200/60",
            time: "Scheduled for Sat, 09:00 AM",
        },
    ];

    return (
        <div className="bg-white p-7 md:p-8 rounded-3xl border border-purple-100/80 shadow-2xs font-body">
            <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                    <h3 className="text-lg font-heading font-extrabold text-slate-900 leading-snug">Recent Campaigns</h3>
                    <p className="text-xs md:text-sm font-body text-slate-500 leading-relaxed">WhatsApp broadcast performance</p>
                </div>
                <button className="text-xs md:text-sm font-heading font-extrabold text-[#6847BA] hover:text-[#5737a6] transition-colors cursor-pointer">
                    View All &rarr;
                </button>
            </div>

            <div className="flex flex-col gap-4 md:gap-5">
                {campaigns.map((campaign) => (
                    <div
                        key={campaign.id}
                        className="p-5 rounded-2xl border border-purple-100/60 hover:border-[#6847BA]/40 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-purple-50/20"
                    >
                        <div className="flex items-center gap-4 min-w-0">
                            <div className="w-11 h-11 rounded-2xl bg-[#6847BA]/10 text-[#6847BA] flex items-center justify-center font-semibold shrink-0 shadow-2xs">
                                <Megaphone size={20} />
                            </div>
                            <div className="min-w-0 space-y-1">
                                <h4 className="font-heading font-bold text-slate-900 text-sm md:text-base truncate leading-snug">{campaign.name}</h4>
                                <p className="text-xs font-body text-slate-500 truncate leading-relaxed">{campaign.audience}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 md:gap-8 text-xs shrink-0 font-body">
                            <div className="space-y-1">
                                <p className="text-[10px] font-heading uppercase tracking-wider font-extrabold text-slate-400 leading-none">Delivered</p>
                                <p className="font-mono font-bold text-slate-800 text-sm leading-tight">{campaign.delivered}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-heading uppercase tracking-wider font-extrabold text-slate-400 leading-none">Open Rate</p>
                                <p className="font-mono font-bold text-[#6847BA] text-sm leading-tight">{campaign.openRate}</p>
                            </div>
                            <div>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold border ${campaign.statusColor}`}>
                                    {campaign.status === "Completed" && <CheckCircle2 size={13} />}
                                    {campaign.status === "Active" && <Play size={13} className="fill-current" />}
                                    {campaign.status === "Scheduled" && <Clock size={13} />}
                                    {campaign.status}
                                </span>
                            </div>
                            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-white transition-colors cursor-pointer">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
