import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    MessageSquare,
    Megaphone,
    FileText,
    Bot,
    BarChart3,
    Settings,
    User,
    LogOut,
} from "lucide-react";

const menuItems = [
    { name: "Dashboard", path: "/customer/dashboard", icon: LayoutDashboard },
    { name: "Contacts", path: "/customer/contacts", icon: Users },
    { name: "Inbox", path: "/customer/inbox", icon: MessageSquare },
    { name: "Broadcast", path: "/customer/broadcast", icon: Megaphone },
    { name: "Templates", path: "/customer/templates", icon: FileText },
    { name: "Automation", path: "/customer/automation", icon: Bot },
    { name: "Analytics", path: "/customer/analytics", icon: BarChart3 },
    { name: "Settings", path: "/customer/settings", icon: Settings },
];

export default function Sidebar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <aside
            style={{ width: "260px" }}
            className="bg-white border-r border-slate-200 flex flex-col shrink-0 h-full select-none z-20 relative group/sidebar transition-[width] duration-75 ease-linear"
        >
            {/* Website Branding Header */}
            <div
                className="flex items-center shrink-0 pb-12 px-6"
                style={{
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    paddingTop: "36px",
                }}
            >
                <span className="font-heading text-2xl font-bold tracking-tight text-brand-primary">
                    conveza.ai
                </span>
            </div>

            {/* Sidebar Navigation */}
            <nav
                className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar"
                style={{
                    paddingTop: "36px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                }}
            >
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center justify-start py-2.5 px-3 rounded-lg transition-all group relative ${isActive
                                    ? "bg-brand-primary text-white"
                                    : "text-slate-600 hover:bg-slate-50"
                                }`
                            }
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "10px 12px",
                            }}
                        >
                            {({ isActive }) => (
                                <>
                                    <div className="flex items-center justify-center shrink-0">
                                        <Icon
                                            size={20}
                                            strokeWidth={2}
                                            className={`transition-colors ${isActive
                                                ? "text-white"
                                                : "text-slate-400 group-hover:text-brand-primary"
                                                }`}
                                        />
                                    </div>

                                    <span
                                        className={`font-body text-[15px] font-medium leading-snug tracking-tight truncate ${isActive
                                            ? "text-white"
                                            : "text-slate-600 group-hover:text-brand-primary"
                                            }`}
                                    >
                                        {item.name}
                                    </span>

                                    {item.badge && (
                                        <span
                                            className="ml-auto bg-brand-accent text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full"
                                            style={{ marginLeft: "auto" }}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </nav>

            {/* Profile Footer */}
            <div
                className="shrink-0 p-4 border-t border-slate-100 relative"
                style={{ padding: "16px" }}
            >
                {isProfileOpen && (
                    <div 
                        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                        onClick={() => setIsProfileOpen(false)}
                    >
                        <div 
                            className="bg-white border border-slate-200 rounded-2xl shadow-2xl relative animate-in fade-in zoom-in duration-200"
                            style={{ width: '480px', padding: '32px' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setIsProfileOpen(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                                    <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center text-2xl font-bold font-body shrink-0">
                                        H
                                    </div>
                                    <div className="overflow-hidden flex-1">
                                        <h4 className="font-body text-xl font-bold text-slate-900 truncate">Hema</h4>
                                        <p className="font-body text-sm text-slate-500 truncate mt-0.5">hema@demobusiness.com</p>
                                    </div>
                                    <div 
                                        className="font-body rounded-full bg-brand-accent text-slate-900 text-xs font-bold whitespace-nowrap shrink-0 mr-4 flex items-center justify-center"
                                        style={{ padding: '4px 12px' }}
                                    >
                                        Pro Plan
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 pb-5 border-b border-slate-100 mt-2">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-slate-500 font-medium uppercase tracking-wider">Company</label>
                                        <span className="text-sm font-semibold text-slate-800">Demo Business</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-slate-500 font-medium uppercase tracking-wider">Website</label>
                                        <span className="text-sm font-medium text-brand-primary hover:underline cursor-pointer">www.demobusiness.com</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs text-slate-500 font-medium uppercase tracking-wider">Role</label>
                                        <span className="text-sm font-semibold text-slate-800">Customer</span>
                                    </div>
                                </div>
                                
                                <button 
                                    className="flex items-center justify-center gap-2 text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors w-full p-3 mt-1 rounded-xl border border-slate-200 font-semibold"
                                    style={{ width: '100%' }}
                                >
                                    <LogOut size={18} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div 
                    className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-all w-full text-left"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                    <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-semibold font-body shrink-0">
                        H
                    </div>

                    <div className="overflow-hidden">
                        <h4 className="font-body text-sm font-semibold text-slate-900 truncate">
                            Hema
                        </h4>

                        <p className="font-body text-xs text-slate-500 truncate">
                            Demo Business
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}