import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Business from "../Agent/business";
import Personality from "../Agent/personality";
import Knowledge from "../Agent/knowledge";
import Integrations from "../Agent/integrations";
import Skills from "../Agent/skills";
import TestAgent from "../Agent/test";
import Publish from "../Agent/publish";
import Widget from "../Agent/widget";
import Inbox from "./inbox";
import { Building2, UserCircle, Database, Settings, Cpu, PlayCircle, Globe, MessageCircle } from "lucide-react";

export default function Automation() {
    const [searchParams, setSearchParams] = useSearchParams();
    const tabParam = searchParams.get("tab");
    const [activeTab, setActiveTab] = useState(tabParam || "business");

    useEffect(() => {
        if (tabParam) {
            setActiveTab(tabParam);
        }
    }, [tabParam]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        // Preserve other search params if any (like chatId)
        const params = {};
        searchParams.forEach((val, key) => {
            params[key] = val;
        });
        params.tab = tabId;
        setSearchParams(params);
    };

    const tabs = [
        { id: "business", label: "Business Profile", icon: Building2 },
        { id: "personality", label: "AI Personality", icon: UserCircle },
        { id: "knowledge", label: "Knowledge Base", icon: Database },
        { id: "skills", label: "AI Skills", icon: Cpu },
        { id: "integrations", label: "Integrations", icon: Settings },
        { id: "widget", label: "Chat Widget", icon: MessageCircle },
        { id: "test", label: "Test Agent", icon: PlayCircle },
        { id: "inbox", label: "Manual Takeover", icon: MessageCircle },
        { id: "publish", label: "Publish", icon: Globe },
    ];

    return (
        <div className="w-full">
            {/* Tabs Header Navigation */}
            <div className="max-w-5xl mx-auto px-6 pt-6">
                <div className="flex flex-wrap gap-2 border-b border-gray-200 bg-white p-2 rounded-xl shadow-sm">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                                    isActive
                                        ? "bg-green-600 text-white shadow-md shadow-green-500/20"
                                        : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                                }`}
                            >
                                <Icon size={18} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Active Tab Content */}
            <div>
                {activeTab === "business" && <Business />}
                {activeTab === "personality" && <Personality />}
                {activeTab === "knowledge" && <Knowledge />}
                {activeTab === "skills" && <Skills />}
                {activeTab === "integrations" && <Integrations />}
                {activeTab === "widget" && <Widget />}
                {activeTab === "test" && <TestAgent />}
                {activeTab === "inbox" && <Inbox />}
                {activeTab === "publish" && <Publish />}
            </div>
        </div>
    );
}
