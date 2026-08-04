import React, { useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState(() => {
        const saved = localStorage.getItem("conveza_skills");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Error parsing conveza_skills", e);
            }
        }
        return {
            leadCapture: true,
            leadFields: { name: true, email: true, phone: true, company: false },
            appointmentBooking: false,
            bookingLink: "https://calendly.com/conveza-support",
            orderTracking: false,
            orderApi: "https://api.convezathreads.com/v1/orders",
            faqSupport: true,
            humanHandoff: true,
            handoffEmail: "support@convezathreads.com",
            multilingual: false,
            sentimentAnalysis: false,
            smartRecommendations: true,
        };
    });

    const handleToggle = (name) => {
        setSkills((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const handleSave = () => {
        localStorage.setItem("conveza_skills", JSON.stringify(skills));
        console.log("AI Skills:", skills);
        alert("AI Skills Saved Successfully!");
    };

    const SkillCard = ({ title, description, value, name, children }) => (
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
                    checked={value}
                    onChange={() => handleToggle(name)}
                    className="w-5 h-5 accent-purple-600 cursor-pointer"
                />
            </div>
            
            {value && children && (
                <div className="mt-4 pt-4 border-t border-gray-100 bg-gray-50 p-4 rounded-lg">
                    {children}
                </div>
            )}
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto p-6">

            <div className="bg-white rounded-xl shadow-lg p-6">

                <h1 className="text-3xl font-bold mb-2">
                    AI Skills
                </h1>

                <p className="text-gray-500 mb-8">
                    Enable the skills your Conveza AI Agent can perform.
                </p>

                <SkillCard
                    title="Lead Capture"
                    description="Collect customer information and create new leads."
                    value={skills.leadCapture}
                    name="leadCapture"
                >
                    <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Fields to Capture:
                        </label>
                        <div className="flex flex-wrap gap-4">
                            {['name', 'email', 'phone', 'company'].map((field) => (
                                <label key={field} className="flex items-center gap-2 text-sm font-medium text-gray-700 capitalize cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={skills.leadFields?.[field] ?? false}
                                        onChange={() => setSkills(prev => ({
                                            ...prev,
                                            leadFields: {
                                                ...prev.leadFields,
                                                [field]: !prev.leadFields?.[field]
                                            }
                                        }))}
                                        className="w-4 h-4 accent-purple-600 rounded"
                                    />
                                    {field}
                                </label>
                            ))}
                        </div>
                    </div>
                </SkillCard>

                <SkillCard
                    title="Appointment Booking"
                    description="Book appointments automatically."
                    value={skills.appointmentBooking}
                    name="appointmentBooking"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Booking Link URL (Calendly, Cal.com, etc.)
                        </label>
                        <input
                            type="url"
                            value={skills.bookingLink || ""}
                            onChange={(e) => setSkills(prev => ({ ...prev, bookingLink: e.target.value }))}
                            placeholder="https://calendly.com/your-team"
                            className="w-full border rounded-lg p-2.5 bg-white outline-none focus:border-purple-600 text-sm"
                        />
                    </div>
                </SkillCard>

                <SkillCard
                    title="Order Tracking"
                    description="Provide live order updates."
                    value={skills.orderTracking}
                    name="orderTracking"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tracking API Lookup URL
                        </label>
                        <input
                            type="url"
                            value={skills.orderApi || ""}
                            onChange={(e) => setSkills(prev => ({ ...prev, orderApi: e.target.value }))}
                            placeholder="https://api.yourstore.com/v1/orders"
                            className="w-full border rounded-lg p-2.5 bg-white outline-none focus:border-purple-600 text-sm"
                        />
                    </div>
                </SkillCard>

                <SkillCard
                    title="FAQ Support"
                    description="Answer frequently asked questions."
                    value={skills.faqSupport}
                    name="faqSupport"
                />

                <SkillCard
                    title="Human Handoff"
                    description="Transfer the conversation to a human agent."
                    value={skills.humanHandoff}
                    name="humanHandoff"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Handoff Support Email or Webhook Endpoint
                        </label>
                        <input
                            type="text"
                            value={skills.handoffEmail || ""}
                            onChange={(e) => setSkills(prev => ({ ...prev, handoffEmail: e.target.value }))}
                            placeholder="support@yourcompany.com"
                            className="w-full border rounded-lg p-2.5 bg-white outline-none focus:border-purple-600 text-sm"
                        />
                    </div>
                </SkillCard>

                <SkillCard
                    title="Multilingual Support"
                    description="Respond in multiple languages."
                    value={skills.multilingual}
                    name="multilingual"
                />

                <SkillCard
                    title="Sentiment Analysis"
                    description="Detect customer emotions and respond accordingly."
                    value={skills.sentimentAnalysis}
                    name="sentimentAnalysis"
                />

                <SkillCard
                    title="Smart Recommendations"
                    description="Suggest products or services using AI."
                    value={skills.smartRecommendations}
                    name="smartRecommendations"
                />

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={() =>
                            setSkills({
                                leadCapture: false,
                                leadFields: { name: true, email: true, phone: false, company: false },
                                appointmentBooking: false,
                                bookingLink: "",
                                orderTracking: false,
                                orderApi: "",
                                faqSupport: false,
                                humanHandoff: false,
                                handoffEmail: "",
                                multilingual: false,
                                sentimentAnalysis: false,
                                smartRecommendations: false,
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
                        Save Skills
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Skills;