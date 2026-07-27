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
        <div className="bg-white p-6 rounded-[20px] border border-purple-100/80 shadow-xs font-body">
            <div className="flex items-center justify-between mb-5">
                <div className="space-y-0.5">
                    <h3 className="text-xl font-heading font-black text-slate-900 leading-snug">Recent Campaigns</h3>
                    <p className="text-sm font-body text-slate-500 leading-relaxed">WhatsApp broadcast performance</p>
                </div>
                <button className="text-xs font-heading font-black text-[#6847BA] hover:text-[#5737a6] transition-colors cursor-pointer">
                    View All &rarr;
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {campaigns.map((campaign) => (
                    <div
                        key={campaign.id}
                        className="p-4.5 rounded-2xl border border-purple-100/60 hover:border-[#6847BA]/40 hover:shadow-2xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-purple-50/20"
                    >
                        <div className="flex items-center gap-3.5 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-[#6847BA]/10 text-[#6847BA] flex items-center justify-center font-semibold shrink-0 shadow-2xs">
                                <Megaphone size={18} />
                            </div>
                            <div className="min-w-0 space-y-0.5">
                                <h4 className="font-heading font-bold text-slate-900 text-sm md:text-base truncate leading-snug">{campaign.name}</h4>
                                <p className="text-xs font-body text-slate-500 truncate leading-relaxed">{campaign.audience}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 md:gap-6 text-xs shrink-0 font-body">
                            <div className="space-y-0.5">
                                <p className="text-[10px] font-heading uppercase tracking-wider font-extrabold text-slate-400 leading-none">Delivered</p>
                                <p className="font-mono font-bold text-slate-800 text-xs md:text-sm leading-tight">{campaign.delivered}</p>
                            </div>
                            <div className="space-y-0.5">
                                <p className="text-[10px] font-heading uppercase tracking-wider font-extrabold text-slate-400 leading-none">Open Rate</p>
                                <p className="font-mono font-bold text-[#6847BA] text-xs md:text-sm leading-tight">{campaign.openRate}</p>
                            </div>
                            <div>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${campaign.statusColor}`}>
                                    {campaign.status === "Completed" && <CheckCircle2 size={12} />}
                                    {campaign.status === "Active" && <Play size={12} className="fill-current" />}
                                    {campaign.status === "Scheduled" && <Clock size={12} />}
                                    {campaign.status}
                                </span>
                            </div>
                            <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-white transition-colors cursor-pointer">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
