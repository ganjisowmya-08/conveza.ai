import React from "react";
import { Megaphone, CheckCircle2, Clock, Play, MoreVertical } from "lucide-react";

export default function CampaignCard() {
    const campaigns = [
        {
            id: 1,
            name: "Summer Flash Sale 2026",
            audience: "VIP Customers (3,420)",
            sent: 3420,
            delivered: "99.2%",
            openRate: "94.8%",
            status: "Completed",
            statusColor: "bg-green-100 text-green-700",
            time: "Today, 10:30 AM",
        },
        {
            id: 2,
            name: "Abandoned Cart Nurture",
            audience: "Checkout Drops (840)",
            sent: 840,
            delivered: "98.5%",
            openRate: "91.2%",
            status: "Active",
            statusColor: "bg-emerald-100 text-emerald-700",
            time: "Ongoing Automation",
        },
        {
            id: 3,
            name: "Weekend Special Discount",
            audience: "All Subscribers (12,500)",
            sent: 0,
            delivered: "0%",
            openRate: "0%",
            status: "Scheduled",
            statusColor: "bg-amber-100 text-amber-700",
            time: "Scheduled for Sat, 09:00 AM",
        },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Recent Campaigns</h3>
                    <p className="text-sm text-gray-500">WhatsApp broadcast and automated sequence performance</p>
                </div>
                <button className="text-sm font-semibold text-green-600 hover:text-green-700">
                    View All &rarr;
                </button>
            </div>

            <div className="space-y-4">
                {campaigns.map((campaign) => (
                    <div
                        key={campaign.id}
                        className="p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50/50"
                    >
                        <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center font-semibold shrink-0">
                                <Megaphone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-base">{campaign.name}</h4>
                                <p className="text-xs text-gray-500 mt-0.5">{campaign.audience}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 text-xs">
                            <div>
                                <p className="text-gray-400 font-medium">Delivered</p>
                                <p className="font-bold text-gray-800 text-sm mt-0.5">{campaign.delivered}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 font-medium">Open Rate</p>
                                <p className="font-bold text-green-600 text-sm mt-0.5">{campaign.openRate}</p>
                            </div>
                            <div>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${campaign.statusColor}`}>
                                    {campaign.status === "Completed" && <CheckCircle2 size={12} />}
                                    {campaign.status === "Active" && <Play size={12} className="fill-current" />}
                                    {campaign.status === "Scheduled" && <Clock size={12} />}
                                    {campaign.status}
                                </span>
                            </div>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                                <MoreVertical size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
