import React from "react";
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
    { name: "AI Agent", path: "/customer/agent", icon: Bot, badge: "NEW" },
    { name: "Analytics", path: "/customer/analytics", icon: BarChart3 },
    { name: "Settings", path: "/customer/settings", icon: Settings },
    { name: "Profile", path: "/customer/profile", icon: User },
];

export default function Sidebar() {
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

            {/* Logout Footer */}
            <div
                className="shrink-0 p-4 border-t border-slate-100"
                style={{ padding: "16px" }}
            >
                <button
                    className="flex items-center justify-start py-2.5 px-3 rounded-lg transition-all w-full text-slate-600 hover:bg-slate-50 group"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 12px",
                    }}
                >
                    <div className="flex items-center justify-center shrink-0">
                        <LogOut
                            size={20}
                            strokeWidth={2}
                            className="text-slate-400 group-hover:text-brand-primary"
                        />
                    </div>

                    <span className="font-body text-[15px] font-medium leading-snug tracking-tight truncate group-hover:text-brand-primary">
                        Logout
                    </span>
                </button>
            </div>
        </aside>
    );
}