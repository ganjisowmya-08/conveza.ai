import React from "react";

const HowItWorks = () => {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-20">
                    <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">How It Works</h2>
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Three Steps to Automation</h1>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-green-200 via-emerald-300 to-green-200" />

                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center text-center z-10">
                        <div className="w-24 h-24 rounded-full bg-white border-4 border-green-500 flex items-center justify-center text-3xl font-extrabold text-green-600 shadow-xl mb-6">
                            1
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect WhatsApp</h3>
                        <p className="text-gray-600">Link your WhatsApp Business API number in just a few clicks. We handle all the official meta verifications automatically.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center text-center z-10">
                        <div className="w-24 h-24 rounded-full bg-white border-4 border-emerald-500 flex items-center justify-center text-3xl font-extrabold text-emerald-600 shadow-xl mb-6">
                            2
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Train the AI</h3>
                        <p className="text-gray-600">Upload your product catalog, website link, or FAQ documents. The AI instantly learns everything about your business.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col items-center text-center z-10">
                        <div className="w-24 h-24 rounded-full bg-green-600 border-4 border-green-200 flex items-center justify-center text-3xl font-extrabold text-white shadow-xl shadow-green-500/40 mb-6">
                            3
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Watch Sales Grow</h3>
                        <p className="text-gray-600">Turn on the autopilot. The AI will immediately start answering queries, qualifying leads, and closing sales natively.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
