import React from "react";
import { MessageSquare, ExternalLink } from "lucide-react";

export default function ContactTable() {
    const contacts = [
        {
            id: 1,
            name: "Sarah Jenkins",
            phone: "+1 (555) 234-5678",
            tag: "Hot Lead",
            tagColor: "bg-red-50 text-red-700 border-red-200",
            lastMsg: "Interested in Pro Enterprise plan",
            time: "10 mins ago",
            avatarBg: "bg-purple-100 text-purple-700",
        },
        {
            id: 2,
            name: "Michael Chen",
            phone: "+1 (555) 876-5432",
            tag: "Customer",
            tagColor: "bg-green-50 text-green-700 border-green-200",
            lastMsg: "Payment confirmed for Order #4920",
            time: "42 mins ago",
            avatarBg: "bg-blue-100 text-blue-700",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            phone: "+1 (555) 345-6789",
            tag: "Subscribed",
            tagColor: "bg-blue-50 text-blue-700 border-blue-200",
            lastMsg: "Clicked on Summer Sale link",
            time: "2 hours ago",
            avatarBg: "bg-amber-100 text-amber-700",
        },
        {
            id: 4,
            name: "David Kim",
            phone: "+1 (555) 987-6543",
            tag: "Warm Lead",
            tagColor: "bg-orange-50 text-orange-700 border-orange-200",
            lastMsg: "Asked for product catalog PDF",
            time: "5 hours ago",
            avatarBg: "bg-emerald-100 text-emerald-700",
        },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Recent Customer Leads</h3>
                    <p className="text-sm text-gray-500">Latest active WhatsApp conversations</p>
                </div>
                <button className="text-sm font-semibold text-green-600 hover:text-green-700 flex items-center gap-1">
                    Manage Contacts <ExternalLink size={14} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            <th className="pb-3 pl-2">Customer</th>
                            <th className="pb-3">Status Tag</th>
                            <th className="pb-3">Last Message</th>
                            <th className="pb-3 text-right pr-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {contacts.map((contact) => (
                            <tr key={contact.id} className="hover:bg-gray-50/80 transition-colors">
                                <td className="py-3.5 pl-2">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-9 h-9 rounded-full ${contact.avatarBg} flex items-center justify-center font-bold text-sm shrink-0`}>
                                            {contact.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{contact.name}</p>
                                            <p className="text-xs text-gray-400">{contact.phone}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3.5">
                                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${contact.tagColor}`}>
                                        {contact.tag}
                                    </span>
                                </td>
                                <td className="py-3.5">
                                    <p className="text-gray-700 text-xs truncate max-w-[200px]">{contact.lastMsg}</p>
                                    <span className="text-[10px] text-gray-400">{contact.time}</span>
                                </td>
                                <td className="py-3.5 text-right pr-2">
                                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 text-xs font-semibold transition-colors">
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
