import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/marketing/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import CustomerLayout from "../layouts/customerLayout";
import Dashboard from "../pages/customer/dashboard";

export default function CustomerRoutes() {
    return (
        <Routes>
            {/* Marketing Landing Page */}
            <Route path="/" element={<Home />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Customer Workspace */}
            <Route path="/customer" element={<CustomerLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>

            {/* Fallback redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}