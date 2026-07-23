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
            tagColor: "bg-red-50 text-red-700 border-red-200",
            source: "Click-to-WhatsApp Ad",
            lastActive: "10 mins ago",
            status: "Active",
            avatarBg: "bg-purple-100 text-purple-700",
        },
        {
            id: 2,
            name: "Michael Chen",
            email: "mchen@techsol.io",
            phone: "+1 (555) 876-5432",
            tag: "VIP Customer",
            tagColor: "bg-purple-50 text-purple-700 border-purple-200",
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
            tagColor: "bg-green-50 text-green-700 border-green-200",
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
            tagColor: "bg-orange-50 text-orange-700 border-orange-200",
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
        if (activeFilter === "Customers") return matchesSearch && c.tag.includes("Customer");
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
            "Hot Lead": "bg-red-50 text-red-700 border-red-200",
            "VIP Customer": "bg-purple-50 text-purple-700 border-purple-200",
            Subscribed: "bg-green-50 text-green-700 border-green-200",
            "Warm Lead": "bg-orange-50 text-orange-700 border-orange-200",
        };

        const created = {
            id: Date.now(),
            name: newContact.name,
            email: newContact.email || "N/A",
            phone: newContact.phone,
            tag: newContact.tag,
            tagColor: tagColorMap[newContact.tag] || "bg-green-50 text-green-700 border-green-200",
            source: newContact.source,
            lastActive: "Just now",
            status: "Active",
            avatarBg: "bg-green-100 text-green-700",
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
        <div className="space-y-6 max-w-7xl mx-auto pb-12">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Contacts & Subscribers</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Manage your WhatsApp contacts, lead segments, and subscriber preferences
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-600/20 transition-all flex items-center gap-2 text-sm"
                    >
                        <UserPlus size={18} /> Add Contact
                    </button>
                    <button className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 shadow-sm transition-all flex items-center gap-2 text-sm">
                        <Upload size={18} /> Import CSV
                    </button>
                    <button className="p-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 shadow-sm transition-all">
                        <Download size={18} />
                    </button>
                </div>
            </div>

            {/* Metric Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center font-bold">
                        <Users size={22} />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-500">Total Audience</p>
                        <h3 className="text-2xl font-extrabold text-gray-900">{contactsList.length} Contacts</h3>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                        <UserCheck size={22} />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-500">Active Leads</p>
                        <h3 className="text-2xl font-extrabold text-gray-900">
                            {contactsList.filter((c) => c.tag.includes("Lead")).length} Leads
                        </h3>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        <Tag size={22} />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-500">Subscribed VIPs</p>
                        <h3 className="text-2xl font-extrabold text-gray-900">
                            {contactsList.filter((c) => c.tag.includes("VIP") || c.tag === "Subscribed").length} Users
                        </h3>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center font-bold">
                        <UserX size={22} />
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-500">Opted-Out</p>
                        <h3 className="text-2xl font-extrabold text-gray-900">
                            {contactsList.filter((c) => c.status === "Opted-Out").length} Contacts
                        </h3>
                    </div>
                </div>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Category Tabs */}
                    <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
                        {["All", "Leads", "Customers", "Subscribed", "Opted-Out"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveFilter(tab)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                                    activeFilter === tab
                                        ? "bg-green-600 text-white shadow-md shadow-green-600/20"
                                        : "text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Search Field */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3.5 top-2.5 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, phone, email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        />
                    </div>
                </div>

                {/* Bulk Action Toolbar */}
                {selectedContacts.length > 0 && (
                    <div className="flex items-center justify-between bg-green-50 p-3 rounded-xl border border-green-200 text-xs text-green-800 font-semibold animate-fadeIn">
                        <span>{selectedContacts.length} contacts selected</span>
                        <div className="flex items-center gap-3">
                            <button className="px-3 py-1.5 bg-white border border-green-300 rounded-lg hover:bg-green-100 transition-colors">
                                Add Tag
                            </button>
                            <button
                                onClick={handleDeleteSelected}
                                className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-1"
                            >
                                <Trash2 size={14} /> Delete Selected
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Contacts Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="bg-gray-50/70 border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                <th className="py-4 pl-6 w-10">
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={
                                            filteredContacts.length > 0 &&
                                            selectedContacts.length === filteredContacts.length
                                        }
                                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    />
                                </th>
                                <th className="py-4">Contact</th>
                                <th className="py-4">WhatsApp Phone</th>
                                <th className="py-4">Segment Tag</th>
                                <th className="py-4">Source</th>
                                <th className="py-4">Last Activity</th>
                                <th className="py-4 text-right pr-6">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredContacts.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center py-12 text-gray-400">
                                        No contacts found matching your criteria.
                                    </td>
                                </tr>
                            ) : (
                                filteredContacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-gray-50/80 transition-colors group">
                                        <td className="py-4 pl-6">
                                            <input
                                                type="checkbox"
                                                checked={selectedContacts.includes(contact.id)}
                                                onChange={() => handleSelectOne(contact.id)}
                                                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                            />
                                        </td>
                                        <td className="py-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-10 h-10 rounded-full ${contact.avatarBg} flex items-center justify-center font-bold text-sm shrink-0`}
                                                >
                                                    {contact.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900">{contact.name}</p>
                                                    <p className="text-xs text-gray-400 flex items-center gap-1">
                                                        <Mail size={12} /> {contact.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 font-medium text-gray-800">
                                            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                                                <Phone size={14} className="text-green-600" />
                                                {contact.phone}
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${contact.tagColor}`}
                                            >
                                                {contact.tag}
                                            </span>
                                        </td>
                                        <td className="py-4 text-xs font-medium text-gray-500">{contact.source}</td>
                                        <td className="py-4 text-xs text-gray-400">{contact.lastActive}</td>
                                        <td className="py-4 text-right pr-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="px-3 py-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 font-semibold text-xs transition-colors flex items-center gap-1">
                                                    <MessageSquare size={14} /> Chat
                                                </button>
                                                <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
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
                <div className="p-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span>Showing {filteredContacts.length} of {contactsList.length} contacts</span>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg disabled:opacity-50 font-medium">
                            Previous
                        </button>
                        <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg disabled:opacity-50 font-medium">
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Contact Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 border border-gray-100 animate-fadeIn">
                        <div className="flex items-center justify-between border-b pb-4 border-gray-100">
                            <h3 className="text-lg font-extrabold text-gray-900">Add New Contact</h3>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleAddContactSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Alex Morgan"
                                    value={newContact.name}
                                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">WhatsApp Phone Number *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. +1 (555) 123-4567"
                                    value={newContact.phone}
                                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="alex@company.com"
                                    value={newContact.email}
                                    onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Segment Tag</label>
                                <select
                                    value={newContact.tag}
                                    onChange={(e) => setNewContact({ ...newContact, tag: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                                >
                                    <option value="Hot Lead">Hot Lead</option>
                                    <option value="VIP Customer">VIP Customer</option>
                                    <option value="Subscribed">Subscribed</option>
                                    <option value="Warm Lead">Warm Lead</option>
                                </select>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 text-xs font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md transition-colors"
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
