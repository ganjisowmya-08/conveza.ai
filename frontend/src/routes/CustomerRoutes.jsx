import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/marketing/Home";
import Features from "../pages/marketing/Home/Features";
import Solutions from "../pages/marketing/Home/Solutions";
import Pricing from "../pages/marketing/Home/Pricing";
import Customers from "../pages/marketing/Home/Customers";
import Resources from "../pages/marketing/Home/Resources";
import MarketingLayout from "../layouts/MarketingLayout";
import Login from "../pages/auth/Login";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import CustomerLayout from "../layouts/customerLayout";
import Dashboard from "../pages/customer/dashboard";
import Analytics from "../pages/customer/analytics";
import ApiPage from "../pages/customer/api";
import Automation from "../pages/customer/automation";
import Billing from "../pages/customer/billing";
import Broadcast from "../pages/customer/broadcast";
import Campaigns from "../pages/customer/campaigns";
import Contacts from "../pages/customer/contacts";
import AgentModule from "../pages/customer/agent";
import Inbox from "../pages/customer/inbox";
import Profile from "../pages/customer/profile";
import Settings from "../pages/customer/settings";
import Team from "../pages/customer/team";
import Templates from "../pages/customer/templates";

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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/register" element={<SignUp />} />

            {/* Customer Workspace */}
            <Route path="/customer" element={<CustomerLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="api" element={<ApiPage />} />
                <Route path="automation" element={<Automation />} />
                <Route path="billing" element={<Billing />} />
                <Route path="broadcast" element={<Broadcast />} />
                <Route path="campaigns" element={<Campaigns />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="agent" element={<AgentModule />} />
                <Route path="inbox" element={<Inbox />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="team" element={<Team />} />
                <Route path="templates" element={<Templates />} />
            </Route>
        </Routes>
    );
}