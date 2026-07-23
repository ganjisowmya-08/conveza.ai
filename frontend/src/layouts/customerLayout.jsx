import { Outlet } from "react-router-dom";
import Sidebar from "../components/customer/Sidebar";
import Topbar from "../components/customer/Topbar";

export default function CustomerLayout() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Topbar />

                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}