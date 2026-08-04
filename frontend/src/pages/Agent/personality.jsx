import React, { useState } from "react";

const Personality = () => {
    const [personality, setPersonality] = useState(() => {
        const saved = localStorage.getItem("conveza_personality");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Error parsing conveza_personality", e);
            }
        }
        return {
            agentName: "Convy",
            tone: "Friendly",
            language: "English",
            greeting: "Hi! Welcome to Conveza Threads 🌿. I'm Convy, your AI shopping assistant. How can I help you find the perfect eco-friendly outfit today?",
            behavior: "• Be warm, helpful, and enthusiastic about sustainability.\n• Recommend our organic cotton t-shirts and summer dresses.\n• Remind customers about the free shipping on orders over $50.\n• If a customer is unhappy or has a shipping issue, guide them to ask for a \"human agent\".",
            fallbackMessage: "I'm sorry, I couldn't find an answer to that in my knowledge base. Would you like me to connect you to a human support agent?",
            negativeKeywords: "competitorX, competitorY, discount code hack, credit card details",
        };
    });

    const handleChange = (e) => {
        setPersonality((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSave = () => {
        localStorage.setItem("conveza_personality", JSON.stringify(personality));
        console.log("AI Personality:", personality);
        alert("AI Personality Saved Successfully!");
    };

    return (
        <div className="max-w-5xl mx-auto p-6">

            <div className="bg-white rounded-xl shadow-lg p-6">

                <h1 className="text-3xl font-bold mb-2">
                    AI Personality
                </h1>

                <p className="text-gray-500 mb-6">
                    Configure how your Conveza AI communicates with customers.
                </p>

                <div className="grid md:grid-cols-2 gap-5">

                    {/* Agent Name */}

                    <div>
                        <label className="block mb-2 font-medium">
                            AI Agent Name
                        </label>

                        <input
                            type="text"
                            name="agentName"
                            value={personality.agentName}
                            onChange={handleChange}
                            placeholder="Conveza Assistant"
                            className="w-full border rounded-lg p-3 outline-none"
                        />
                    </div>

                    {/* Language */}

                    <div>
                        <label className="block mb-2 font-medium">
                            Language
                        </label>

                        <select
                            name="language"
                            value={personality.language}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >
                            <option>English</option>
                            <option>Telugu</option>
                            <option>Hindi</option>
                            <option>Tamil</option>
                            <option>Kannada</option>
                        </select>
                    </div>

                    {/* Tone */}

                    <div>
                        <label className="block mb-2 font-medium">
                            Conversation Tone
                        </label>

                        <select
                            name="tone"
                            value={personality.tone}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >
                            <option>Professional</option>
                            <option>Friendly</option>
                            <option>Formal</option>
                            <option>Casual</option>
                            <option>Supportive</option>
                        </select>
                    </div>

                    {/* Greeting */}

                    <div>
                        <label className="block mb-2 font-medium">
                            Welcome Message
                        </label>

                        <input
                            type="text"
                            name="greeting"
                            value={personality.greeting}
                            onChange={handleChange}
                            placeholder="Hello! Welcome to Conveza."
                            className="w-full border rounded-lg p-3 outline-none"
                        />
                    </div>

                </div>

                {/* Behavior */}

                <div className="mt-6">

                    <label className="block mb-2 font-medium">
                        AI Behaviour Instructions
                    </label>

                    <textarea
                        rows="6"
                        name="behavior"
                        value={personality.behavior}
                        onChange={handleChange}
                        placeholder="Example:
• Be polite and professional.
• Answer using company knowledge only.
• If unsure, suggest contacting support.
• Keep replies short and clear."
                        className="w-full border rounded-lg p-3 outline-none"
                    />

                </div>

                {/* Safety & Guardrails */}
                <div className="mt-8 border-t pt-6">
                    <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                        🛡️ Safety & Guardrails
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 font-medium">
                                Custom Fallback Response
                            </label>
                            <input
                                type="text"
                                name="fallbackMessage"
                                value={personality.fallbackMessage || ""}
                                onChange={handleChange}
                                placeholder="Message to display when no match is found"
                                className="w-full border rounded-lg p-3 outline-none"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Customize the message shown when the AI Agent doesn't know the answer.
                            </p>
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Banned / Negative Keywords
                            </label>
                            <input
                                type="text"
                                name="negativeKeywords"
                                value={personality.negativeKeywords || ""}
                                onChange={handleChange}
                                placeholder="competitorX, discount hack, free stuff"
                                className="w-full border rounded-lg p-3 outline-none"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Comma-separated list of keywords. The AI will refuse to reply if these are present in user queries.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={() =>
                            setPersonality({
                                agentName: "",
                                tone: "Professional",
                                language: "English",
                                greeting: "",
                                behavior: "",
                                fallbackMessage: "",
                                negativeKeywords: "",
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
                        Save Personality
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Personality;