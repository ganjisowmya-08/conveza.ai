import React, { useState } from "react";
import {
    Search,
    UserPlus,
    Upload,
    Download,
    Filter,
    MessageSquare,
    MoreVertical,
    Check,
    X,
    Users,
    UserCheck,
    UserX,
    Tag,
    Trash2,
    Mail,
    Phone,
} from "lucide-react";

export default function Contacts() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Initial contacts mock data
    const [contactsList, setContactsList] = useState([
        {
            id: 1,
            name: "Sarah Jenkins",
            email: "sarah.j@acmedesign.com",
            phone: "+1 (555) 234-5678",
            tag: "Hot Lead",
            tagColor: "bg-[#FCD144] text-[#3d2f00] border-[#e5b922]",
            source: "Click-to-WhatsApp Ad",
            lastActive: "10 mins ago",
            status: "Active",
            avatarBg: "bg-[#6847BA]/15 text-[#6847BA]",
        },
        {
            id: 2,
            name: "Michael Chen",
            email: "mchen@techsol.io",
            phone: "+1 (555) 876-5432",
            tag: "VIP Customer",
            tagColor: "bg-[#6847BA]/10 text-[#6847BA] border-[#6847BA]/20",
            source: "Shopify Integration",
            lastActive: "42 mins ago",
            status: "Active",
            avatarBg: "bg-blue-100 text-blue-700",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            email: "emily.r@gmail.com",
            phone: "+1 (555) 345-6789",
            tag: "Subscribed",
            tagColor: "bg-purple-50 text-purple-700 border-purple-200/60",
            source: "Website Widget",
            lastActive: "2 hours ago",
            status: "Active",
            avatarBg: "bg-amber-100 text-amber-700",
        },
        {
            id: 4,
            name: "David Kim",
            email: "dkim@innovate.co",
            phone: "+1 (555) 987-6543",
            tag: "Warm Lead",
            tagColor: "bg-orange-50 text-orange-700 border-orange-200/60",
            source: "Manual Upload",
            lastActive: "5 hours ago",
            status: "Active",
            avatarBg: "bg-emerald-100 text-emerald-700",
        },
        {
            id: 5,
            name: "Jessica Taylor",
            email: "jtaylor@fashionhub.com",
            phone: "+1 (555) 654-3210",
            tag: "Abandoned Cart",
            tagColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
            source: "Instagram Ad",
            lastActive: "1 day ago",
            status: "Active",
            avatarBg: "bg-pink-100 text-pink-700",
        },
        {
            id: 6,
            name: "Robert Martinez",
            email: "robert@martinezconsulting.com",
            phone: "+1 (555) 789-0123",
            tag: "Unsubscribed",
            tagColor: "bg-gray-100 text-gray-700 border-gray-200",
            source: "Lead Magnet",
            lastActive: "3 days ago",
            status: "Opted-Out",
            avatarBg: "bg-gray-100 text-gray-700",
        },
    ]);

    // New contact form state
    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        tag: "Hot Lead",
        source: "Manual Entry",
    });

    // Filtering logic
    const filteredContacts = contactsList.filter((c) => {
        const matchesSearch =
            c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.phone.includes(searchTerm) ||
            c.tag.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeFilter === "All") return matchesSearch;
        if (activeFilter === "Leads") return matchesSearch && (c.tag.includes("Lead") || c.tag.includes("Cart"));
        if (activeFilter === "Customers") return matchesSearch && (c.tag.includes("Customer") || c.tag.includes("VIP"));
        if (activeFilter === "Subscribed") return matchesSearch && c.tag === "Subscribed";
        if (activeFilter === "Opted-Out") return matchesSearch && c.status === "Opted-Out";
        return matchesSearch;
    });

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedContacts(filteredContacts.map((c) => c.id));
        } else {
            setSelectedContacts([]);
        }
    };

    const handleSelectOne = (id) => {
        if (selectedContacts.includes(id)) {
            setSelectedContacts(selectedContacts.filter((item) => item !== id));
        } else {
            setSelectedContacts([...selectedContacts, id]);
        }
    };

    const handleAddContactSubmit = (e) => {
        e.preventDefault();
        if (!newContact.name || !newContact.phone) return;

        const tagColorMap = {
            "Hot Lead": "bg-[#FCD144] text-[#3d2f00] border-[#e5b922]",
            "VIP Customer": "bg-[#6847BA]/10 text-[#6847BA] border-[#6847BA]/20",
            Subscribed: "bg-purple-50 text-purple-700 border-purple-200/60",
            "Warm Lead": "bg-orange-50 text-orange-700 border-orange-200/60",
        };

        const created = {
            id: Date.now(),
            name: newContact.name,
            email: newContact.email || "N/A",
            phone: newContact.phone,
            tag: newContact.tag,
            tagColor: tagColorMap[newContact.tag] || "bg-purple-50 text-purple-700 border-purple-200/60",
            source: newContact.source,
            lastActive: "Just now",
            status: "Active",
            avatarBg: "bg-[#6847BA]/15 text-[#6847BA]",
        };

        setContactsList([created, ...contactsList]);
        setNewContact({ name: "", email: "", phone: "", tag: "Hot Lead", source: "Manual Entry" });
        setIsAddModalOpen(false);
    };

    const handleDeleteSelected = () => {
        setContactsList(contactsList.filter((c) => !selectedContacts.includes(c.id)));
        setSelectedContacts([]);
    };

    return (
        <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-12 font-body select-none">
            {/* Page Header (10. Page Title: text-2xl, Buttons: text-sm) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-2xl font-heading font-black text-slate-900 tracking-tight leading-tight">Contacts & Subscribers</h1>
                    <p className="text-sm font-body text-slate-500 leading-relaxed">
                        Manage your WhatsApp contacts, lead segments, and subscriber preferences
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-4 py-2.5 bg-[#6847BA] hover:bg-[#5737a6] text-white font-body font-bold rounded-xl shadow-md shadow-[#6847BA]/20 transition-all flex items-center gap-2 text-sm cursor-pointer"
                    >
                        <UserPlus size={16} /> Add Contact
                    </button>
                    <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 font-body font-semibold rounded-xl hover:bg-slate-50 shadow-2xs transition-all flex items-center gap-2 text-sm cursor-pointer">
                        <Upload size={16} /> Import CSV
                    </button>
                    <button className="p-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 shadow-2xs transition-all cursor-pointer">
                        <Download size={16} />
                    </button>
                </div>
            </div>

            {/* Metric Overview Cards (Section Titles: text-lg, Values: text-2xl) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-5 rounded-[18px] border border-purple-100/80 shadow-xs flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#6847BA]/10 text-[#6847BA] flex items-center justify-center font-bold shrink-0">
                        <Users size={20} />
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-xs font-heading font-extrabold text-slate-400 uppercase tracking-wider leading-none">Total Audience</p>
                        <h3 className="text-2xl font-mono font-black text-slate-900 tracking-tight">{contactsList.length} Contacts</h3>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[18px] border border-purple-100/80 shadow-xs flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold shrink-0 border border-amber-200/60">
                        <UserCheck size={20} />
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-xs font-heading font-extrabold text-slate-400 uppercase tracking-wider leading-none">Active Leads</p>
                        <h3 className="text-2xl font-mono font-black text-slate-900 tracking-tight">
                            {contactsList.filter((c) => c.tag.includes("Lead")).length} Leads
                        </h3>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[18px] border border-purple-100/80 shadow-xs flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0 border border-blue-100">
                        <Tag size={20} />
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-xs font-heading font-extrabold text-slate-400 uppercase tracking-wider leading-none">Subscribed VIPs</p>
                        <h3 className="text-2xl font-mono font-black text-slate-900 tracking-tight">
                            {contactsList.filter((c) => c.tag.includes("VIP") || c.tag === "Subscribed").length} Users
                        </h3>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-[18px] border border-purple-100/80 shadow-xs flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 text-slate-600 flex items-center justify-center font-bold shrink-0">
                        <UserX size={20} />
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-xs font-heading font-extrabold text-slate-400 uppercase tracking-wider leading-none">Opted-Out</p>
                        <h3 className="text-2xl font-mono font-black text-slate-900 tracking-tight">
                            {contactsList.filter((c) => c.status === "Opted-Out").length} Contacts
                        </h3>
                    </div>
                </div>
            </div>

            {/* Filter Tabs & Search Input (10. Search Input & Buttons: text-sm) */}
            <div className="bg-white p-5 rounded-[20px] border border-purple-100/80 shadow-xs flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                        {["All", "Leads", "Customers", "Subscribed", "Opted-Out"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveFilter(tab)}
                                className={`px-4 py-2 rounded-xl text-xs font-heading font-extrabold transition-all whitespace-nowrap cursor-pointer ${
                                    activeFilter === tab
                                        ? "bg-[#6847BA] text-white shadow-xs"
                                        : "text-slate-600 hover:bg-purple-50/60"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Search Field (10. Search Input: text-sm) */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3.5 top-2.5 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search by name, phone, email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm font-body focus:outline-none focus:border-[#6847BA] focus:ring-4 focus:ring-[#6847BA]/15 transition"
                        />
                    </div>
                </div>

                {/* Bulk Action Toolbar */}
                {selectedContacts.length > 0 && (
                    <div className="flex items-center justify-between bg-purple-50/70 p-3 rounded-xl border border-purple-200/80 text-xs text-[#6847BA] font-bold">
                        <span>{selectedContacts.length} contacts selected</span>
                        <div className="flex items-center gap-3">
                            <button className="px-3 py-1.5 bg-white border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                                Add Tag
                            </button>
                            <button
                                onClick={handleDeleteSelected}
                                className="px-3 py-1.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors flex items-center gap-1 cursor-pointer"
                            >
                                <Trash2 size={13} /> Delete Selected
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Contacts Table (10. Table Header: text-sm, Table Data: text-sm) */}
            <div className="bg-white rounded-[20px] border border-purple-100/80 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="bg-purple-50/30 border-b border-purple-100/60 text-xs font-heading font-black text-slate-400 uppercase tracking-wider">
                                <th className="py-3.5 pl-6 w-10">
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={
                                            filteredContacts.length > 0 &&
                                            selectedContacts.length === filteredContacts.length
                                        }
                                        className="rounded border-slate-300 text-[#6847BA] focus:ring-[#6847BA]"
                                    />
                                </th>
                                <th className="py-3.5">Contact</th>
                                <th className="py-3.5">WhatsApp Phone</th>
                                <th className="py-3.5">Segment Tag</th>
                                <th className="py-3.5">Source</th>
                                <th className="py-3.5">Last Activity</th>
                                <th className="py-3.5 text-right pr-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-100/40">
                            {filteredContacts.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center py-12 text-slate-400 font-body">
                                        No contacts found matching your criteria.
                                    </td>
                                </tr>
                            ) : (
                                filteredContacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-purple-50/20 transition-colors group">
                                        <td className="py-4 pl-6">
                                            <input
                                                type="checkbox"
                                                checked={selectedContacts.includes(contact.id)}
                                                onChange={() => handleSelectOne(contact.id)}
                                                className="rounded border-slate-300 text-[#6847BA] focus:ring-[#6847BA]"
                                            />
                                        </td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-9 h-9 rounded-full ${contact.avatarBg} flex items-center justify-center font-heading font-bold text-xs shrink-0 shadow-2xs`}
                                                >
                                                    {contact.name.charAt(0)}
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="font-heading font-bold text-slate-900 text-sm leading-tight">{contact.name}</p>
                                                    <p className="text-xs font-mono text-slate-400 flex items-center gap-1 leading-normal">
                                                        <Mail size={12} /> {contact.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 font-mono font-medium text-slate-800">
                                            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700">
                                                <Phone size={13} className="text-[#6847BA]" />
                                                {contact.phone}
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold border ${contact.tagColor}`}
                                            >
                                                {contact.tag}
                                            </span>
                                        </td>
                                        <td className="py-4 text-xs font-body font-medium text-slate-500">{contact.source}</td>
                                        <td className="py-4 text-xs font-mono text-slate-400">{contact.lastActive}</td>
                                        <td className="py-4 text-right pr-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="px-3 py-1.5 rounded-xl bg-[#6847BA] text-white hover:bg-[#5737a6] font-heading font-bold text-xs transition-colors flex items-center gap-1 shadow-2xs cursor-pointer">
                                                    <MessageSquare size={13} /> Chat
                                                </button>
                                                <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer">
                                                    <MoreVertical size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Table Footer */}
                <div className="p-4 bg-purple-50/20 border-t border-purple-100/60 flex items-center justify-between text-xs font-body text-slate-500">
                    <span>Showing {filteredContacts.length} of {contactsList.length} contacts</span>
                    <div className="flex items-center gap-2 font-body font-bold">
                        <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg disabled:opacity-50 text-slate-700 hover:bg-slate-50 cursor-pointer">
                            Previous
                        </button>
                        <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg disabled:opacity-50 text-slate-700 hover:bg-slate-50 cursor-pointer">
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Contact Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 border border-purple-100 font-body">
                        <div className="flex items-center justify-between border-b pb-4 border-purple-100/70">
                            <h3 className="text-lg font-heading font-black text-slate-900">Add New Contact</h3>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <form onSubmit={handleAddContactSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-heading font-bold text-slate-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Alex Morgan"
                                    value={newContact.name}
                                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#6847BA] focus:ring-4 focus:ring-[#6847BA]/15"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-heading font-bold text-slate-700 mb-1">WhatsApp Phone Number *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. +1 (555) 123-4567"
                                    value={newContact.phone}
                                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#6847BA] focus:ring-4 focus:ring-[#6847BA]/15 font-mono"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-heading font-bold text-slate-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="alex@company.com"
                                    value={newContact.email}
                                    onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#6847BA] focus:ring-4 focus:ring-[#6847BA]/15 font-mono"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-heading font-bold text-slate-700 mb-1">Segment Tag</label>
                                <select
                                    value={newContact.tag}
                                    onChange={(e) => setNewContact({ ...newContact, tag: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#6847BA] focus:ring-4 focus:ring-[#6847BA]/15 bg-white"
                                >
                                    <option value="Hot Lead">Hot Lead</option>
                                    <option value="VIP Customer">VIP Customer</option>
                                    <option value="Subscribed">Subscribed</option>
                                    <option value="Warm Lead">Warm Lead</option>
                                </select>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-purple-100/70">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="px-4 py-2 text-xs font-heading font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 text-xs font-heading font-bold bg-[#6847BA] hover:bg-[#5737a6] text-white rounded-xl shadow-md transition-colors cursor-pointer"
                                >
                                    Save Contact
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
