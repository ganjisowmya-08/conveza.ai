import React from "react";

const Features = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-20">
                    <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Why Conveza.AI</h2>
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">The Ultimate AI Arsenal</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Go beyond basic broadcasting. Our Gen-AI native tools are built to automate sales and support completely.
                    </p>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    
                    {/* Large Feature 1 */}
                    <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl group-hover:bg-green-100 transition-colors" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-6">🧠</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Autonomous Gen-AI Chatbots</h3>
                            <p className="text-gray-600 max-w-md">Train your AI agent on your website and documents in 1 click. It understands context, handles complex support queries, and closes sales natively in WhatsApp.</p>
                        </div>
                    </div>

                    {/* Small Feature 1 */}
                    <div className="bg-gray-900 text-white rounded-3xl p-8 border border-gray-800 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-2xl mb-6">🎯</div>
                            <h3 className="text-xl font-bold mb-3">1-Click Ads Manager</h3>
                            <p className="text-gray-400 text-sm">Launch Click-to-WhatsApp ads on Meta directly from our dashboard.</p>
                        </div>
                    </div>

                    {/* Small Feature 2 */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">👥</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Shared Inbox 2.0</h3>
                        <p className="text-gray-600 text-sm">AI drafts responses for your human agents to approve instantly.</p>
                    </div>

                    {/* Large Feature 2 */}
                    <div className="md:col-span-2 bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 text-white shadow-lg hover:shadow-green-500/30 transition-all relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-2xl mb-6">🚀</div>
                            <h3 className="text-2xl font-bold mb-3">Smart Retargeting & Analytics</h3>
                            <p className="text-green-50 max-w-md">Track exactly who read your message, who clicked your link, and automatically send highly-personalized follow-ups to maximize conversions.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
