import { Bell, Search } from "lucide-react";

export default function Topbar() {
    return (
        <header className="h-16 bg-white border-b flex items-center px-6">
            {/* Search */}
            <div className="relative w-96">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Search contacts, campaigns..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
            </div>

            <div className="ml-auto flex items-center gap-4">
                {/* Plan */}
                <span className="px-3 py-1 bg-primary/10 text-primary/90 rounded-full text-sm font-medium">
                    Pro Plan
                </span>

                {/* Notifications */}
                <button className="p-2 rounded-lg hover:bg-gray-100">
                    <Bell size={20} />
                </button>

                {/* User */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                        H
                    </div>
                    <div>
                        <p className="font-medium">Hema</p>
                        <p className="text-sm text-gray-500">Demo Business</p>
                    </div>
                </div>
            </div>
        </header>
    );
}