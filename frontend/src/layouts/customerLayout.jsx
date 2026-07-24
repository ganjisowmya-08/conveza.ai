import { Outlet } from "react-router-dom";
import Sidebar from "../components/customer/sidebar";
import Topbar from "../components/customer/topbar";

export default function CustomerLayout() {
    return (
        <div className="flex h-screen bg-slate-50/80 text-slate-900 font-sans antialiased overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
                <Topbar />

                <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}