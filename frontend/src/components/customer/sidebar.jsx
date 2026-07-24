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
    Zap,
} from "lucide-react";

const navigationGroups = [
    {
        title: "Main Menu",
        items: [
            { name: "Dashboard", path: "/customer/dashboard", icon: LayoutDashboard },
            { name: "Contacts", path: "/customer/contacts", icon: Users },
            { name: "AI Agent", path: "/customer/agent", icon: Bot, badge: "LIVE", badgeBg: "bg-[#FCD144] text-[#3d2f00]" },
            { name: "Inbox", path: "/customer/inbox", icon: MessageSquare, badge: "14", badgeBg: "bg-[#6847BA]/15 text-[#6847BA]" },
        ],
    },
    {
        title: "Campaigns & Automation",
        items: [
            { name: "Broadcast", path: "/customer/broadcast", icon: Megaphone },
            { name: "Templates", path: "/customer/templates", icon: FileText },
            { name: "Automation", path: "/customer/automation", icon: Zap },
            { name: "Analytics", path: "/customer/analytics", icon: BarChart3 },
        ],
    },
    {
        title: "Account",
        items: [
            { name: "Settings", path: "/customer/settings", icon: Settings },
            { name: "Profile", path: "/customer/profile", icon: User },
        ],
    },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r border-purple-100 flex flex-col shrink-0 h-full select-none shadow-xs font-body">
            {/* Workspace Header Logo */}
            <div className="p-5 border-b border-purple-50 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#6847BA] text-[#FCD144] flex items-center justify-center font-extrabold text-lg shadow-md shadow-[#6847BA]/30">
                        ⚡
                    </div>
                    <div>
                        <div className="flex items-center gap-1 font-heading">
                            <span className="text-base font-extrabold tracking-tight text-slate-900 leading-tight">conveza</span>
                            <span className="text-base font-extrabold text-[#6847BA] leading-tight">.ai</span>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-400 mt-0.5 font-body">WhatsApp Sales Suite</p>
                    </div>
                </div>
            </div>

            {/* Workspace Selector Pill */}
            <div className="px-4 py-3 mx-4 my-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-center justify-between cursor-pointer hover:bg-purple-50 transition-colors shadow-2xs">
                <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FCD144] ring-2 ring-[#6847BA]/20 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 truncate font-body">Hema's Business</span>
                </div>
                <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-[#6847BA] text-[#FCD144] shrink-0">PRO</span>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-4 py-3 overflow-y-auto space-y-7">
                {navigationGroups.map((group, idx) => (
                    <div key={idx} className="space-y-2.5">
                        <p className="text-[10px] font-heading font-extrabold text-slate-400 uppercase tracking-widest px-3">
                            {group.title}
                        </p>
                        <div className="space-y-1.5">
                            {group.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold font-body transition-all ${
                                                isActive
                                                    ? "bg-[#6847BA]/10 text-[#6847BA] font-extrabold border border-[#6847BA]/30 shadow-2xs"
                                                    : "text-slate-600 hover:text-slate-900 hover:bg-purple-50/40"
                                            }`
                                        }
                                    >
                                        <div className="flex items-center gap-3.5">
                                            <Icon size={18} className="shrink-0" />
                                            <span className="leading-normal font-body">{item.name}</span>
                                        </div>
                                        {item.badge && (
                                            <span className={`text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-full ${item.badgeBg}`}>
                                                {item.badge}
                                            </span>
                                        )}
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Sidebar Footer User & Logout */}
            <div className="p-4 border-t border-purple-50 shrink-0">
                <button className="flex items-center gap-3.5 w-full px-3.5 py-3 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer font-body">
                    <LogOut size={18} className="shrink-0" />
                    <span>Logout Account</span>
                </button>
            </div>
        </aside>
    );
}