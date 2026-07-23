import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
            <Route path="/" element={<CustomerLayout />}>
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