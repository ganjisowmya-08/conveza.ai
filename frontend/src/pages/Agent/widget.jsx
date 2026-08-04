import React, { useState } from "react";
import { Palette, Layout, MessageSquare, Check, RotateCcw } from "lucide-react";

const Widget = () => {
    const [widgetSettings, setWidgetSettings] = useState(() => {
        const saved = localStorage.getItem("conveza_widget_settings");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Error parsing conveza_widget_settings", e);
            }
        }
        return {
            primaryColor: "#9333ea", // purple-600
            bubbleColor: "#9333ea", 
            textColor: "#ffffff",
            launcherText: "Chat with us",
            launcherStyle: "pill", // "icon" or "pill"
            position: "right", // "right" or "left"
            welcomeText: "👋 Hello! Welcome to Conveza Threads. How can I help you find the perfect outfit?",
            avatarStyle: "🤖",
            agentName: "Convy"
        };
    });

    const [previewOpen, setPreviewOpen] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWidgetSettings((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        localStorage.setItem("conveza_widget_settings", JSON.stringify(widgetSettings));
        alert("Widget Branding Settings Saved Successfully!");
    };

    const handleReset = () => {
        setWidgetSettings({
            primaryColor: "#9333ea",
            bubbleColor: "#9333ea",
            textColor: "#ffffff",
            launcherText: "Chat with us",
            launcherStyle: "pill",
            position: "right",
            welcomeText: "👋 Hello! Welcome to Conveza Threads. How can I help you find the perfect outfit?",
            avatarStyle: "🤖",
            agentName: "Convy"
        });
    };

    const colorPresets = [
        "#9333ea", // Purple
        "#2563eb", // Blue
        "#16a34a", // Green
        "#dc2626", // Red
        "#ea580c", // Orange
        "#0d9488", // Teal
        "#111827", // Charcoal Dark
    ];

    const avatarPresets = ["🤖", "👩‍💻", "👨‍💼", "🌿", "✨", "💬"];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid lg:grid-cols-5 gap-8">
                {/* Left Panel: Controls (Col Span 3) */}
                <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <h1 className="text-3xl font-bold mb-2">
                        Chat Widget Customization
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Personalize the branding and visual style of the chat widget on your website.
                    </p>

                    <div className="space-y-6">
                        {/* Section 1: Colors */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-2 mb-3">
                                <Palette size={16} /> Theme & Colors
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Primary Theme Color
                                    </label>
                                    <div className="flex gap-2 items-center">
                                        <input
                                            type="color"
                                            name="primaryColor"
                                            value={widgetSettings.primaryColor}
                                            onChange={handleChange}
                                            className="w-10 h-10 border rounded-lg cursor-pointer p-1"
                                        />
                                        <input
                                            type="text"
                                            name="primaryColor"
                                            value={widgetSettings.primaryColor}
                                            onChange={handleChange}
                                            className="border rounded-lg p-2 text-sm flex-1 outline-none font-mono"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Color Presets
                                    </label>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {colorPresets.map((color) => (
                                            <button
                                                key={color}
                                                onClick={() => setWidgetSettings(prev => ({ ...prev, primaryColor: color, bubbleColor: color }))}
                                                className="w-8 h-8 rounded-full border border-gray-200 cursor-pointer flex items-center justify-center text-white"
                                                style={{ backgroundColor: color }}
                                            >
                                                {widgetSettings.primaryColor === color && <Check size={14} />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Section 2: Agent Identity */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-2 mb-3">
                                <MessageSquare size={16} /> Agent & Greeting Info
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Agent Display Name
                                    </label>
                                    <input
                                        type="text"
                                        name="agentName"
                                        value={widgetSettings.agentName}
                                        onChange={handleChange}
                                        placeholder="Convy"
                                        className="w-full border rounded-lg p-2.5 outline-none text-sm focus:border-purple-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Avatar Character
                                    </label>
                                    <div className="flex gap-2">
                                        <select
                                            name="avatarStyle"
                                            value={widgetSettings.avatarStyle}
                                            onChange={handleChange}
                                            className="border rounded-lg p-2.5 text-sm flex-1 outline-none focus:border-purple-600 bg-white"
                                        >
                                            {avatarPresets.map(av => (
                                                <option key={av} value={av}>{av} Preset avatar</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Widget Greeting Message
                                </label>
                                <textarea
                                    name="welcomeText"
                                    rows="3"
                                    value={widgetSettings.welcomeText}
                                    onChange={handleChange}
                                    placeholder="Type welcome text..."
                                    className="w-full border rounded-lg p-2.5 outline-none text-sm focus:border-purple-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Launcher Button Text
                                </label>
                                <input
                                    type="text"
                                    name="launcherText"
                                    value={widgetSettings.launcherText}
                                    onChange={handleChange}
                                    placeholder="Chat with us"
                                    className="w-full border rounded-lg p-2.5 outline-none text-sm focus:border-purple-600"
                                />
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Section 3: Layout & Position */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-2 mb-3">
                                <Layout size={16} /> Placement & Layout
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Widget Screen Position
                                    </label>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setWidgetSettings(prev => ({ ...prev, position: "right" }))}
                                            className={`flex-1 border p-2.5 rounded-lg text-sm font-semibold transition cursor-pointer ${
                                                widgetSettings.position === "right"
                                                    ? "bg-purple-600 text-white border-purple-600"
                                                    : "bg-white text-gray-700 hover:bg-gray-50"
                                            }`}
                                        >
                                            Bottom-Right
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setWidgetSettings(prev => ({ ...prev, position: "left" }))}
                                            className={`flex-1 border p-2.5 rounded-lg text-sm font-semibold transition cursor-pointer ${
                                                widgetSettings.position === "left"
                                                    ? "bg-purple-600 text-white border-purple-600"
                                                    : "bg-white text-gray-700 hover:bg-gray-50"
                                            }`}
                                        >
                                            Bottom-Left
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Launcher Style
                                    </label>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setWidgetSettings(prev => ({ ...prev, launcherStyle: "pill" }))}
                                            className={`flex-1 border p-2.5 rounded-lg text-sm font-semibold transition cursor-pointer ${
                                                widgetSettings.launcherStyle === "pill"
                                                    ? "bg-purple-600 text-white border-purple-600"
                                                    : "bg-white text-gray-700 hover:bg-gray-50"
                                            }`}
                                        >
                                            Pill (Icon + Text)
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setWidgetSettings(prev => ({ ...prev, launcherStyle: "icon" }))}
                                            className={`flex-1 border p-2.5 rounded-lg text-sm font-semibold transition cursor-pointer ${
                                                widgetSettings.launcherStyle === "icon"
                                                    ? "bg-purple-600 text-white border-purple-600"
                                                    : "bg-white text-gray-700 hover:bg-gray-50"
                                            }`}
                                        >
                                            Bubble (Icon Only)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-100">
                            <button
                                onClick={handleReset}
                                className="border px-5 py-2.5 rounded-lg hover:bg-gray-50 font-semibold transition text-sm flex items-center gap-1.5 cursor-pointer"
                            >
                                <RotateCcw size={15} /> Reset
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold transition text-sm cursor-pointer shadow-md shadow-purple-600/10"
                            >
                                Save Customizations
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Live interactive Mockup (Col Span 2) */}
                <div className="lg:col-span-2 bg-gray-50 rounded-xl border border-gray-200/60 p-6 flex flex-col justify-between min-h-[550px] relative overflow-hidden">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                Live Widget Preview
                            </span>
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                            Interact with the preview mockup. This reflects exactly how the launcher and chat window appear on your site.
                        </p>
                    </div>

                    {/* Mock Webpage Content Area */}
                    <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-inner p-4 relative flex flex-col justify-between overflow-hidden max-h-[420px]">
                        <div className="opacity-30 space-y-2 pointer-events-none">
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                            <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                        </div>

                        {/* Open Chat Preview mockup container */}
                        {previewOpen && (
                            <div className={`absolute bottom-16 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-20 ${
                                widgetSettings.position === "left" ? "left-4" : "right-4"
                            }`}>
                                {/* Head */}
                                <div
                                    className="p-3 text-white flex justify-between items-center"
                                    style={{ backgroundColor: widgetSettings.primaryColor }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg">
                                            {widgetSettings.avatarStyle}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xs">
                                                {widgetSettings.agentName}
                                            </h4>
                                            <p className="text-[10px] opacity-80">
                                                Online Support
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setPreviewOpen(false)}
                                        className="text-white/80 hover:text-white text-sm font-bold"
                                    >
                                        ✖
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="h-44 bg-gray-50 p-3 overflow-y-auto space-y-2 flex flex-col justify-end">
                                    <div className="bg-gray-200/70 p-2.5 rounded-xl text-[11px] text-gray-800 max-w-[85%] rounded-tl-none self-start">
                                        {widgetSettings.welcomeText}
                                    </div>
                                    <div className="p-2 rounded-xl text-[11px] text-white max-w-[80%] rounded-tr-none self-end"
                                         style={{ backgroundColor: widgetSettings.bubbleColor }}>
                                        How long does shipping take?
                                    </div>
                                </div>

                                {/* Foot */}
                                <div className="p-2 border-t flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Type message..."
                                        className="flex-1 text-[11px] outline-none border rounded px-2 py-1 bg-gray-50"
                                        disabled
                                    />
                                    <button
                                        className="text-white px-3 py-1 rounded text-[10px] font-bold"
                                        style={{ backgroundColor: widgetSettings.primaryColor }}
                                        disabled
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Floating launcher trigger mockup */}
                        <button
                            onClick={() => setPreviewOpen(!previewOpen)}
                            style={{ backgroundColor: widgetSettings.primaryColor }}
                            className={`absolute bottom-3 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer z-10 ${
                                widgetSettings.launcherStyle === "pill" ? "px-4 py-2 rounded-full text-xs gap-1.5 h-9" : "w-10 h-10 rounded-full text-lg"
                            } ${
                                widgetSettings.position === "left" ? "left-3" : "right-3"
                            }`}
                        >
                            <span>💬</span>
                            {widgetSettings.launcherStyle === "pill" && (
                                <span className="font-semibold text-[11px] whitespace-nowrap">
                                    {widgetSettings.launcherText}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widget;