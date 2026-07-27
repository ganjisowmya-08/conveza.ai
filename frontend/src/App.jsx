import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/marketing/Home/Hero";
import Features from "./pages/marketing/Home/Features";
import Solutions from "./pages/marketing/Home/Solutions";
import Pricing from "./pages/marketing/Home/Pricing";
import Customers from "./pages/marketing/Home/Customers";
import Resources from "./pages/marketing/Home/Resources";
import Login from "./pages/auth/Login";
import SignIn from "./pages/auth/SignIn";
import CustomerLayout from "./layouts/customerLayout";
import Dashboard from "./pages/customer/dashboard";
import Contacts from "./pages/customer/contacts";
import AgentModule from "./pages/customer/agent";

// Superadmin layouts and components from admin branch
import AdminLayout from "./modules/superadmin/layouts/AdminLayout";
import SuperAdminDashboard from "./modules/superadmin/pages/Dashboard/Dashboard";
import organizationService from "./modules/superadmin/services/organizationService";
import billingService from "./modules/superadmin/services/billingService";
import analyticsService from "./modules/superadmin/services/analyticsService";
import whatsappService from "./modules/superadmin/services/whatsappService";
import integrationService from "./modules/superadmin/services/integrationService";
import supportService from "./modules/superadmin/services/supportService";
import settingsService from "./modules/superadmin/services/settingsService";
import dashboardService from "./modules/superadmin/services/dashboardService";
import "./modules/superadmin/styles/globals.css";

import Home from "./pages/marketing/Home";
import Footer from "./pages/marketing/Home/Footer";

function MarketingLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

function SuperAdminPanel() {
    const [currentTab, setCurrentTab] = useState("dashboard");
    const [tabLoading, setTabLoading] = useState(false);
    const [organizations, setOrganizations] = useState([]);
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [plans, setPlans] = useState([]);
    const [gateways, setGateways] = useState([]);
    const [waQueue, setWaQueue] = useState({ connectionStatus: "offline", queueLoad: "0%" });
    const [campaignStats, setCampaignStats] = useState({ successRate: "0%", readRate: "0%", totalSent: "0" });
    const [recommendations, setRecommendations] = useState([]);
    const [integrations, setIntegrations] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [auditLogs, setAuditLogs] = useState([]);
    const [settings, setSettings] = useState({ rootDomain: "", adminEmail: "" });

    useEffect(() => {
        const loadTabContent = async () => {
            setTabLoading(true);
            try {
                switch (currentTab) {
                    case "organizations":
                        const orgs = await organizationService.getOrganizations();
                        setOrganizations(orgs);
                        if (orgs.length > 0) setSelectedOrg(orgs[0]);
                        break;
                    case "billing":
                        const planList = await billingService.getPlans();
                        setPlans(planList);
                        break;
                    case "whatsapp":
                        const gws = await whatsappService.getGateways();
                        const queue = await whatsappService.getQueueStatus();
                        setGateways(gws);
                        setWaQueue(queue);
                        break;
                    case "crm":
                        const stats = await analyticsService.getCampaignStats();
                        setCampaignStats(stats);
                        break;
                    case "ai":
                        const recs = await analyticsService.getAIRecommendations();
                        setRecommendations(recs);
                        break;
                    case "integrations":
                        const apps = await integrationService.getInstalledApps();
                        setIntegrations(apps);
                        break;
                    case "support":
                        const tix = await supportService.getTickets();
                        setTickets(tix);
                        break;
                    case "security":
                        const logs = await dashboardService.getAuditLogs();
                        setAuditLogs(logs);
                        break;
                    case "settings":
                        const confs = await settingsService.getSettings();
                        setSettings(confs);
                        break;
                    default:
                        break;
                }
            } catch (e) {
                console.error("Error loading tab dataset:", e);
            }
            setTabLoading(false);
        };

        loadTabContent();
    }, [currentTab]);

    const renderSuperAdminContent = () => {
        if (tabLoading) {
            return (
                <div className="glass-card" style={{ display: "flex", alignItems: "center", justifyCenter: "center", minHeight: "300px" }}>
                    <p style={{ color: "var(--text-muted)" }}>Fetching dashboard parameters...</p>
                </div>
            );
        }

        switch (currentTab) {
            case "dashboard":
                return <SuperAdminDashboard />;
            default:
                return <SuperAdminDashboard />;
        }
    };

    return (
        <AdminLayout currentTab={currentTab} setCurrentTab={setCurrentTab}>
            {renderSuperAdminContent()}
        </AdminLayout>
    );
}

function App() {
    return (
        <Routes>
            {/* Marketing pages with Navbar */}
            <Route element={<MarketingLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/resources" element={<Resources />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/signin" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignIn />} />

            {/* Customer Workspace */}
            <Route path="/customer" element={<CustomerLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="agent" element={<AgentModule />} />
                <Route path="*" element={<Dashboard />} />
            </Route>

            {/* Superadmin Panel */}
            <Route path="/superadmin/*" element={<SuperAdminPanel />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;