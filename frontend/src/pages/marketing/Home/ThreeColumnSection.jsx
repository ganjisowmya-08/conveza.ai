import React from "react";
import { Link } from "react-router-dom";

const ThreeColumnSection = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container-custom">
                <div className="grid lg:grid-cols-3 gap-12">
                    
                    {/* Column 1: Integrations */}
                    <div className="flex flex-col">
                        <div className="text-[12px] font-bold text-primary tracking-wider uppercase mb-3">Integrations</div>
                        <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
                            Connect with tools you already use
                        </h2>
                        <p className="text-gray-600 mb-8 text-[15px] leading-relaxed">
                            Seamlessly integrate with your favorite platforms and CRMs.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-3 shadow-sm hover:border-gray-200 transition-all cursor-pointer">
                                <div className="text-orange-500 font-bold text-lg">Z</div>
                                <span className="text-sm font-semibold text-gray-700">Zapier</span>
                            </div>
                            <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-3 shadow-sm hover:border-gray-200 transition-all cursor-pointer">
                                <div className="text-orange-600 font-bold text-lg">H</div>
                                <span className="text-sm font-semibold text-gray-700">Hubspot</span>
                            </div>
                            <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-3 shadow-sm hover:border-gray-200 transition-all cursor-pointer">
                                <div className="text-blue-500 font-bold text-lg">☁</div>
                                <span className="text-sm font-semibold text-gray-700">Salesforce</span>
                            </div>
                            <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-3 shadow-sm hover:border-gray-200 transition-all cursor-pointer">
                                <div className="text-green-500 font-bold text-lg">G</div>
                                <span className="text-sm font-semibold text-gray-700">Google Sheets</span>
                            </div>
                            <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-3 shadow-sm hover:border-gray-200 transition-all cursor-pointer">
                                <div className="text-blue-600 font-bold text-lg">W</div>
                                <span className="text-sm font-semibold text-gray-700">WordPress</span>
                            </div>
                            <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-3 shadow-sm hover:border-gray-200 transition-all cursor-pointer">
                                <div className="text-green-600 font-bold text-lg">S</div>
                                <span className="text-sm font-semibold text-gray-700">Shopify</span>
                            </div>
                        </div>

                        <Link to="/integrations" className="text-primary font-bold hover:text-primary/80 transition-colors flex items-center gap-2 text-sm mt-auto">
                            View all integrations &rarr;
                        </Link>
                    </div>

                    {/* Column 2: Pricing */}
                    <div className="flex flex-col">
                        <div className="text-[12px] font-bold text-primary tracking-wider uppercase mb-3">Pricing</div>
                        <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
                            Choose the perfect plan for your business
                        </h2>
                        
                        <div className="flex justify-center mb-8">
                            <div className="bg-gray-100 p-1 rounded-full flex text-sm font-semibold">
                                <div className="bg-white rounded-full px-4 py-1.5 shadow-sm text-gray-900">Monthly</div>
                                <div className="px-4 py-1.5 text-gray-500">Yearly (Save 20%)</div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {/* Starter */}
                            <div className="flex-1 border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col bg-white">
                                <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Starter</div>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-2xl font-bold font-mono text-gray-900">₹1,999</span>
                                    <span className="text-[10px] text-gray-500">/month</span>
                                </div>
                                <div className="text-[10px] text-gray-600 mb-4">Perfect for small businesses.</div>
                                <div className="space-y-2 mb-6 flex-1">
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> 1,000 Conversations</div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> 1 User</div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> Basic Automations</div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> Email Support</div>
                                </div>
                                <button className="w-full border border-gray-200 py-1.5 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">Start Free Trial</button>
                            </div>

                            {/* Growth */}
                            <div className="flex-1 border-2 border-primary rounded-2xl p-4 shadow-md flex flex-col bg-white relative">
                                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-accent text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                                    Most Popular
                                </div>
                                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">Growth</div>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-2xl font-bold font-mono text-gray-900">₹2,999</span>
                                    <span className="text-[10px] text-gray-500">/month</span>
                                </div>
                                <div className="text-[10px] text-gray-600 mb-4">Scale your operations.</div>
                                <div className="space-y-2 mb-6 flex-1">
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> 5,000 Conversations</div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> 5 Users</div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> Advanced Automations</div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> Priority Support</div>
                                </div>
                                <button className="w-full bg-primary py-1.5 rounded-lg text-xs font-bold text-white hover:bg-primary/90 transition-colors">Start Free Trial</button>
                            </div>

                            {/* Pro */}
                            <div className="flex-1 border border-gray-200 rounded-2xl p-4 shadow-sm flex flex-col bg-white">
                                <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Pro</div>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-2xl font-bold font-mono text-gray-900">₹7,499</span>
                                    <span className="text-[10px] text-gray-500">/month</span>
                                </div>
                                <div className="text-[10px] text-gray-600 mb-4">For larger businesses.</div>
                                <div className="space-y-2 mb-6 flex-1">
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> Unlimited Conversations</div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> Unlimited Users</div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> Dedicated Account Manager</div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600"><span className="text-green-500">✓</span> 24/7 Phone Support</div>
                                </div>
                                <button className="w-full border border-gray-200 py-1.5 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">Start Free Trial</button>
                            </div>
                        </div>
                        <div className="text-center mt-4 text-[11px] text-gray-400">All plans include 14-day free trial. No credit card required.</div>
                    </div>

                    {/* Column 3: Testimonials */}
                    <div className="flex flex-col">
                        <div className="text-[12px] font-bold text-primary tracking-wider uppercase mb-3">Testimonials</div>
                        <h2 className="text-3xl font-heading font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
                            Loved by businesses around the world
                        </h2>
                        
                        <div className="bg-[#fcfcfd] border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex-1 flex flex-col">
                            <div className="flex gap-1 text-accent mb-6 text-xl">★★★★★</div>
                            <p className="text-gray-700 text-[16px] leading-relaxed font-medium mb-8 flex-1 italic">
                                "Conveza.ai has completely transformed the way we handle customer conversations. Our sales have increased by 40% since we started using it."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <img src="https://i.pravatar.cc/100?img=5" alt="Rohan Mehta" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Rohan Mehta</div>
                                    <div className="text-sm text-gray-500">Co-founder, TrendStyle</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mt-6">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ThreeColumnSection;
