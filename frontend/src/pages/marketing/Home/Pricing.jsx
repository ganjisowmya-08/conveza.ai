import React, { useState } from "react";

const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Simple Pricing</h2>
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Scale Without Limits</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        Stop paying per-agent fees. One flat platform fee, unlimited team members, and true AI power.
                    </p>

                    {/* Toggle */}
                    <div className="inline-flex items-center gap-4 bg-gray-50 p-2 rounded-full border border-gray-200">
                        <button 
                            onClick={() => setAnnual(false)}
                            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${!annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Monthly
                        </button>
                        <button 
                            onClick={() => setAnnual(true)}
                            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Annually <span className="bg-primary/10 text-primary/90 text-xs px-2 py-0.5 rounded-full">Save 20%</span>
                        </button>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {/* Starter */}
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col hover:border-primary/20 transition-colors">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                        <p className="text-gray-500 mb-6 text-sm">Perfect for small businesses scaling their WhatsApp presence.</p>
                        <div className="text-5xl font-extrabold text-gray-900 mb-2">
                            ${annual ? '39' : '49'}
                            <span className="text-lg text-gray-400 font-medium">/mo</span>
                        </div>
                        <p className="text-xs text-gray-400 mb-8 pb-8 border-b border-gray-100">Billed {annual ? 'annually' : 'monthly'}</p>
                        
                        <ul className="space-y-4 mb-8 flex-1 text-sm font-medium text-gray-700">
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> 5,000 AI Messages/mo
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> Unlimited Human Agents
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> Shared Team Inbox
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> Basic Broadcasting
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-gray-300 text-gray-900 font-bold hover:bg-gray-50 transition-colors shadow-sm">Get Started</button>
                    </div>

                    {/* Pro */}
                    <div className="relative p-8 rounded-[2rem] flex flex-col transform md:-translate-y-4 bg-gray-900 text-white shadow-2xl shadow-accent/20 ring-2 ring-accent">
                        <div className="absolute -top-4 inset-x-0 flex justify-center">
                            <span className="bg-gradient-to-r from-accent to-accent text-white text-xs font-extrabold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-accent/30">
                                Most Popular
                            </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2">Pro AI</h3>
                        <p className="text-gray-400 mb-6 text-sm">Everything you need to automate sales and support completely.</p>
                        <div className="text-5xl font-extrabold mb-2">
                            ${annual ? '99' : '119'}
                            <span className="text-lg text-gray-500 font-medium">/mo</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-8 pb-8 border-b border-gray-800">Billed {annual ? 'annually' : 'monthly'}</p>
                        
                        <ul className="space-y-4 mb-8 flex-1 text-sm font-medium text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> 25,000 AI Messages/mo
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> Advanced Autonomous Agents
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> Click-to-WhatsApp Ads Manager
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> Smart Retargeting
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> HubSpot & Salesforce CRM
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary/100 text-white font-bold shadow-lg hover:shadow-accent/40 transition-all transform hover:-translate-y-0.5">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col hover:border-gray-300 transition-colors">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                        <p className="text-gray-500 mb-6 text-sm">Custom AI models and dedicated infrastructure for scale.</p>
                        <div className="text-5xl font-extrabold text-gray-900 mb-2">
                            Custom
                        </div>
                        <p className="text-xs text-gray-400 mb-8 pb-8 border-b border-gray-100">Tailored to your needs</p>
                        
                        <ul className="space-y-4 mb-8 flex-1 text-sm font-medium text-gray-700">
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> Custom Fine-Tuned AI Models
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> Dedicated Account Manager
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> Custom API Integrations
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent">✓</span> 99.99% SLA Uptime
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors">Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
