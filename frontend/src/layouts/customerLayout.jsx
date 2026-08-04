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
                {/* Top Navigation */}
                <Topbar />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="max-w-[1600px] mx-auto w-full" style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '48px', paddingBottom: '96px' }}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}