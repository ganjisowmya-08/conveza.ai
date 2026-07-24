import React from "react";
import { MessageSquare, ExternalLink } from "lucide-react";

export default function ContactTable() {
    const contacts = [
        {
            id: 1,
            name: "Sarah Jenkins",
            phone: "+1 (555) 234-5678",
            tag: "Hot Lead",
            tagColor: "bg-[#FCD144] text-[#3d2f00] border-[#e5b922]",
            lastMsg: "Interested in Pro Enterprise plan",
            time: "10 mins ago",
            avatarBg: "bg-[#6847BA]/15 text-[#6847BA]",
        },
        {
            id: 2,
            name: "Michael Chen",
            phone: "+1 (555) 876-5432",
            tag: "Customer",
            tagColor: "bg-[#6847BA]/10 text-[#6847BA] border-[#6847BA]/20",
            lastMsg: "Payment confirmed for Order #4920",
            time: "42 mins ago",
            avatarBg: "bg-blue-100 text-blue-700",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            phone: "+1 (555) 345-6789",
            tag: "Subscribed",
            tagColor: "bg-purple-50 text-purple-700 border-purple-200/60",
            lastMsg: "Clicked on Summer Sale link",
            time: "2 hours ago",
            avatarBg: "bg-amber-100 text-amber-700",
        },
        {
            id: 4,
            name: "David Kim",
            phone: "+1 (555) 987-6543",
            tag: "Warm Lead",
            tagColor: "bg-orange-50 text-orange-700 border-orange-200/60",
            lastMsg: "Asked for product catalog PDF",
            time: "5 hours ago",
            avatarBg: "bg-teal-100 text-teal-700",
        },
    ];

    return (
        <div className="bg-white p-7 md:p-8 rounded-3xl border border-purple-100/80 shadow-2xs font-body">
            <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                    <h3 className="text-lg font-heading font-extrabold text-slate-900 leading-snug">Recent Customer Leads</h3>
                    <p className="text-xs md:text-sm font-body text-slate-500 leading-relaxed">Latest active WhatsApp conversations</p>
                </div>
                <button className="text-xs md:text-sm font-heading font-extrabold text-[#6847BA] hover:text-[#5737a6] flex items-center gap-1.5 transition-colors cursor-pointer">
                    Manage Contacts <ExternalLink size={14} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[640px]">
                    <thead>
                        <tr className="border-b border-purple-100/60 text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest">
                            <th className="pb-4 pl-3">Customer</th>
                            <th className="pb-4 px-4">Status Tag</th>
                            <th className="pb-4 px-4">Last Message</th>
                            <th className="pb-4 text-right pr-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-100/40">
                        {contacts.map((contact) => (
                            <tr key={contact.id} className="hover:bg-purple-50/30 transition-colors">
                                <td className="py-4 pl-3">
                                    <div className="flex items-center gap-3.5">
                                        <div className={`w-9 h-9 rounded-full ${contact.avatarBg} flex items-center justify-center font-heading font-bold text-xs shrink-0 shadow-2xs`}>
                                            {contact.name.charAt(0)}
                                        </div>
                                        <div className="whitespace-nowrap space-y-0.5">
                                            <p className="font-heading font-bold text-slate-900 text-sm leading-snug">{contact.name}</p>
                                            <p className="text-xs font-mono text-slate-400 leading-normal">{contact.phone}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-4 whitespace-nowrap">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold border ${contact.tagColor}`}>
                                        {contact.tag}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <p className="text-slate-800 text-xs font-body font-semibold truncate max-w-[220px] leading-relaxed mb-0.5">{contact.lastMsg}</p>
                                    <span className="text-[11px] font-mono text-slate-400 leading-none">{contact.time}</span>
                                </td>
                                <td className="py-4 text-right pr-3 whitespace-nowrap">
                                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#6847BA] hover:bg-[#5737a6] text-white text-xs font-heading font-bold shadow-xs transition-colors cursor-pointer">
                                        <MessageSquare size={14} /> Chat
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
