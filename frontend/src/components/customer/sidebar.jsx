import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    MessageCircle,
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
    { name: "Inbox", path: "/customer/inbox", icon: MessageCircle },
    { name: "Broadcast", path: "/customer/broadcast", icon: Megaphone },
    { name: "Templates", path: "/customer/templates", icon: FileText },
    { name: "AI Agent", path: "/customer/automation", icon: Bot },
    { name: "Analytics", path: "/customer/analytics", icon: BarChart3 },
    { name: "Settings", path: "/customer/settings", icon: Settings },
    { name: "Profile", path: "/customer/profile", icon: User },
];

export default function Sidebar() {
    return (
        <div className="w-64 bg-white border-r flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b">
                <h1 className="text-2xl font-bold text-green-600">conveza.ai</h1>
            </div>

            {/* Menu */}
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${isActive
                                    ? "bg-green-100 text-green-700 font-semibold"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            <Icon size={20} />
                            {item.name}
                        </NavLink>
                    );
                })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t">
                <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </div>
    );
}