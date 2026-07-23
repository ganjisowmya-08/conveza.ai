import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/marketing/Home/Hero";
import Features from "./pages/marketing/Home/Features";
import Solutions from "./pages/marketing/Home/Solutions";
import Pricing from "./pages/marketing/Home/Pricing";
import Customers from "./pages/marketing/Home/Customers";
import Resources from "./pages/marketing/Home/Resources";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import CustomerLayout from "./layouts/customerLayout";
import Dashboard from "./pages/customer/dashboard";
import Contacts from "./pages/customer/contacts";
import AgentModule from "./pages/customer/agent";

function MarketingLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

function App() {
    return (
        <Routes>
            {/* Marketing pages with Navbar */}
            <Route element={<MarketingLayout />}>
                <Route path="/" element={<Hero />} />
                <Route path="/features" element={<Features />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/resources" element={<Resources />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/signin" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Customer Workspace */}
            <Route path="/customer" element={<CustomerLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="agent" element={<AgentModule />} />
                <Route path="*" element={<Dashboard />} />
            </Route>

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;