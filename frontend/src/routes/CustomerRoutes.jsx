import { Routes, Route, Navigate } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import Dashboard from "../pages/customer/Dashboard";

export default function CustomerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/customer/dashboard" />} />

            <Route path="/customer" element={<CustomerLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}