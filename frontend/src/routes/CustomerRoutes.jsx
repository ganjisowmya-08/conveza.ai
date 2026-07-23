import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/marketing/Home";
import Features from "../pages/marketing/Home/Features";
import Solutions from "../pages/marketing/Home/Solutions";
import Pricing from "../pages/marketing/Home/Pricing";
import Customers from "../pages/marketing/Home/Customers";
import Resources from "../pages/marketing/Home/Resources";
import MarketingLayout from "../layouts/MarketingLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import CustomerLayout from "../layouts/customerLayout";
import Dashboard from "../pages/customer/dashboard";

export default function CustomerRoutes() {
    return (
        <Routes>
            {/* Marketing Pages with Navbar */}
            <Route element={<MarketingLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/resources" element={<Resources />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/register" element={<SignUp />} />

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