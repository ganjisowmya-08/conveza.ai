import React, { useState } from "react";

const Integrations = () => {
    const [integration, setIntegration] = useState(() => {
        const saved = localStorage.getItem("conveza_integrations");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Error parsing conveza_integrations", e);
            }
        }
        return {
            whatsapp: false,
            website: false,
            crm: false,
            crmProvider: "hubspot",
            crmToken: "",
            email: false,
            openai: false,
            gemini: false,
            customApi: false,
            customApiUrl: "https://api.convezathreads.com/v1/webhook",
            customApiMethod: "POST",
            customApiAuth: "Bearer my-secret-token-123",
            customApiTrigger: "leadCapture",
        };
    });

    const handleToggle = (name) => {
        setIntegration((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const handleSave = () => {
        localStorage.setItem("conveza_integrations", JSON.stringify(integration));
        console.log("Integration Settings:", integration);
        alert("Integrations Saved Successfully!");
    };

    const IntegrationCard = ({ title, description, checked, name, children }) => (
        <div className="border rounded-xl p-5 mb-4 bg-white shadow-sm transition-all duration-300">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                        {description}
                    </p>
                </div>

                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleToggle(name)}
                    className="w-5 h-5 accent-purple-600 cursor-pointer"
                />
            </div>
            
            {checked && children && (
                <div className="mt-4 pt-4 border-t border-gray-100 bg-gray-50 p-4 rounded-lg">
                    {children}
                </div>
            )}
        </div>
    );

    return (
        <div className="max-w-5xl mx-auto p-6">

            <div className="bg-white rounded-xl shadow-lg p-6">

                <h1 className="text-3xl font-bold mb-2">
                    Integrations
                </h1>

                <p className="text-gray-500 mb-6">
                    Connect your Conveza AI Agent with your business tools.
                </p>

                <div className="space-y-4">

                    <IntegrationCard
                        title="WhatsApp Business"
                        description="Connect your WhatsApp Business account."
                        checked={integration.whatsapp}
                        name="whatsapp"
                    />

                    <IntegrationCard
                        title="Website Chat Widget"
                        description="Enable AI chat on your website."
                        checked={integration.website}
                        name="website"
                    />

                    <IntegrationCard
                        title="CRM Integration"
                        description="Sync customer information with your CRM."
                        checked={integration.crm}
                        name="crm"
                    >
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        CRM Provider
                                    </label>
                                    <select
                                        value={integration.crmProvider || "hubspot"}
                                        onChange={(e) => setIntegration(prev => ({ ...prev, crmProvider: e.target.value }))}
                                        className="w-full border rounded-lg p-2.5 bg-white outline-none focus:border-purple-600 text-sm"
                                    >
                                        <option value="hubspot">HubSpot</option>
                                        <option value="salesforce">Salesforce</option>
                                        <option value="zoho">Zoho CRM</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        API Key / Access Token
                                    </label>
                                    <input
                                        type="password"
                                        value={integration.crmToken || ""}
                                        onChange={(e) => setIntegration(prev => ({ ...prev, crmToken: e.target.value }))}
                                        placeholder="pat-na1-123abc-xyz..."
                                        className="w-full border rounded-lg p-2.5 bg-white outline-none focus:border-purple-600 text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </IntegrationCard>

                    <IntegrationCard
                        title="Custom API / Webhook Integration"
                        description="Call external REST APIs or webhooks from your AI Agent."
                        checked={integration.customApi}
                        name="customApi"
                    >
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        API Endpoint URL
                                    </label>
                                    <input
                                        type="url"
                                        value={integration.customApiUrl || ""}
                                        onChange={(e) => setIntegration(prev => ({ ...prev, customApiUrl: e.target.value }))}
                                        placeholder="https://api.yourdomain.com/webhook"
                                        className="w-full border rounded-lg p-2.5 bg-white outline-none focus:border-purple-600 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        HTTP Method
                                    </label>
                                    <select
                                        value={integration.customApiMethod || "POST"}
                                        onChange={(e) => setIntegration(prev => ({ ...prev, customApiMethod: e.target.value }))}
                                        className="w-full border rounded-lg p-2.5 bg-white outline-none focus:border-purple-600 text-sm"
                                    >
                                        <option value="POST">POST</option>
                                        <option value="GET">GET</option>
                                        <option value="PUT">PUT</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Authorization Header Value
                                    </label>
                                    <input
                                        type="text"
                                        value={integration.customApiAuth || ""}
                                        onChange={(e) => setIntegration(prev => ({ ...prev, customApiAuth: e.target.value }))}
                                        placeholder="Bearer token_12345"
                                        className="w-full border rounded-lg p-2.5 bg-white outline-none focus:border-purple-600 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Trigger Event
                                    </label>
                                    <select
                                        value={integration.customApiTrigger || "leadCapture"}
                                        onChange={(e) => setIntegration(prev => ({ ...prev, customApiTrigger: e.target.value }))}
                                        className="w-full border rounded-lg p-2.5 bg-white outline-none focus:border-purple-600 text-sm"
                                    >
                                        <option value="leadCapture">On Lead Capture</option>
                                        <option value="conversationEnd">On Conversation End</option>
                                        <option value="all">On Every Message</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </IntegrationCard>

                    <IntegrationCard
                        title="Email Notifications"
                        description="Receive AI notifications by email."
                        checked={integration.email}
                        name="email"
                    />

                    <IntegrationCard
                        title="OpenAI"
                        description="Use OpenAI as your AI provider."
                        checked={integration.openai}
                        name="openai"
                    />

                    <IntegrationCard
                        title="Google Gemini"
                        description="Use Gemini AI as your AI provider."
                        checked={integration.gemini}
                        name="gemini"
                    />

                </div>

                <div className="flex justify-end mt-8 gap-3">

                    <button
                        className="border px-5 py-2 rounded-lg"
                        onClick={() =>
                            setIntegration({
                                whatsapp: false,
                                website: false,
                                crm: false,
                                crmProvider: "hubspot",
                                crmToken: "",
                                email: false,
                                openai: false,
                                gemini: false,
                                customApi: false,
                                customApiUrl: "",
                                customApiMethod: "POST",
                                customApiAuth: "",
                                customApiTrigger: "leadCapture",
                            })
                        }
                    >
                        Reset
                    </button>

                    <button
                        onClick={handleSave}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
                    >
                        Save Integrations
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Integrations;