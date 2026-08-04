import React, { useState } from "react";

const Publish = () => {
    const [settings, setSettings] = useState({
        publish: false,
        websiteWidget: true,
        whatsappBot: false,
        widgetId: "CONVEZA-AI-2026",
    });

    const handleToggle = (name) => {
        setSettings((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const handleSave = () => {
        console.log("Publish Settings:", settings);
        alert("AI Agent Published Successfully!");
    };

    const copyWidgetId = () => {
        navigator.clipboard.writeText(settings.widgetId);
        alert("Widget ID Copied!");
    };

    return (
        <div className="max-w-5xl mx-auto p-6">

            <div className="bg-white rounded-xl shadow-lg p-6">

                <h1 className="text-3xl font-bold mb-2">
                    Publish AI Agent
                </h1>

                <p className="text-gray-500 mb-8">
                    Publish your AI Agent and make it available on your website or WhatsApp.
                </p>

                {/* Publish Status */}

                <div className="flex justify-between items-center border rounded-lg p-4 mb-4">

                    <div>
                        <h2 className="font-semibold text-lg">
                            Publish AI Agent
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Turn your AI Assistant ON or OFF.
                        </p>
                    </div>

                    <input
                        type="checkbox"
                        checked={settings.publish}
                        onChange={() => handleToggle("publish")}
                    />

                </div>

                {/* Website Widget */}

                <div className="flex justify-between items-center border rounded-lg p-4 mb-4">

                    <div>
                        <h2 className="font-semibold text-lg">
                            Website Chat Widget
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Display AI chat on your website.
                        </p>
                    </div>

                    <input
                        type="checkbox"
                        checked={settings.websiteWidget}
                        onChange={() => handleToggle("websiteWidget")}
                    />

                </div>

                {/* WhatsApp */}

                <div className="flex justify-between items-center border rounded-lg p-4 mb-4">

                    <div>
                        <h2 className="font-semibold text-lg">
                            WhatsApp AI
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Enable AI replies on WhatsApp.
                        </p>
                    </div>

                    <input
                        type="checkbox"
                        checked={settings.whatsappBot}
                        onChange={() => handleToggle("whatsappBot")}
                    />

                </div>

                {/* Widget ID */}

                <div className="border rounded-lg p-4 mb-6">

                    <label className="block font-medium mb-2">
                        Widget ID
                    </label>

                    <div className="flex gap-3">

                        <input
                            type="text"
                            value={settings.widgetId}
                            readOnly
                            className="border rounded-lg p-3 flex-1 bg-gray-100"
                        />

                        <button
                            onClick={copyWidgetId}
                            className="bg-gray-700 text-white px-4 rounded-lg"
                        >
                            Copy
                        </button>

                    </div>

                </div>

                {/* Status */}

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">

                    <h3 className="font-semibold text-purple-700">
                        Current Status
                    </h3>

                    <p className="mt-2">
                        {settings.publish
                            ? "🟢 AI Agent is Live."
                            : "🔴 AI Agent is Not Published."}
                    </p>

                </div>

                {/* Buttons */}

                <div className="flex justify-end gap-3">

                    <button
                        onClick={() =>
                            setSettings({
                                publish: false,
                                websiteWidget: true,
                                whatsappBot: false,
                                widgetId: "CONVEZA-AI-2026",
                            })
                        }
                        className="border px-5 py-2 rounded-lg"
                    >
                        Reset
                    </button>

                    <button
                        onClick={handleSave}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
                    >
                        Publish Agent
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Publish;