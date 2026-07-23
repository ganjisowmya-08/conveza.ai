import React from "react";

const Integrations = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Seamless Connectivity</h2>
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Integrates With Your Stack</h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { name: "Shopify", icon: "🛍️", color: "text-green-500", bg: "bg-green-50" },
                        { name: "Salesforce", icon: "☁️", color: "text-blue-500", bg: "bg-blue-50" },
                        { name: "HubSpot", icon: "⚙️", color: "text-orange-500", bg: "bg-orange-50" },
                        { name: "Meta Ads", icon: "🌐", color: "text-blue-600", bg: "bg-blue-50" },
                        { name: "Stripe", icon: "💳", color: "text-indigo-500", bg: "bg-indigo-50" },
                        { name: "Zendesk", icon: "🎧", color: "text-teal-500", bg: "bg-teal-50" },
                        { name: "Zapier", icon: "⚡", color: "text-orange-400", bg: "bg-orange-50" },
                        { name: "Custom API", icon: "🔌", color: "text-gray-600", bg: "bg-gray-100" }
                    ].map((int, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all cursor-pointer group">
                            <div className={`w-16 h-16 ${int.bg} ${int.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                                {int.icon}
                            </div>
                            <span className="font-bold text-gray-800">{int.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;
