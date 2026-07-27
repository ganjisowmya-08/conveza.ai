import { Outlet } from "react-router-dom";
import Sidebar from "../components/customer/sidebar";
import Topbar from "../components/customer/topbar";

export default function CustomerLayout() {
    return (
        <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-[#F8FAFC]">
                <Topbar />

                <main className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="p-8 pb-24 max-w-[1600px] mx-auto w-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}