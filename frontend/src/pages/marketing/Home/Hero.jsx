import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-[92vh] bg-gradient-to-b from-[#Fcfcfd] to-[#F5F3FA] flex items-center font-sans">
            {/* Background Textures & Glows */}
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-50"></div>
            <div className="absolute right-[5%] top-[20%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply z-0"></div>

            {/* Golden Accents */}
            <div className="absolute top-[15%] left-[45%] w-4 h-4 rounded-full bg-accent blur-[2px] animate-float opacity-60"></div>
            <div className="absolute bottom-[20%] right-[10%] w-6 h-6 rounded-full bg-accent blur-[3px] animate-float-delayed opacity-40"></div>

            <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-[80px] relative z-10" style={{ paddingTop: "40px", paddingBottom: "80px" }}>

                {/* Left Column */}
                <div className="w-full lg:w-[45%] max-w-[580px] flex-shrink-0 animate-fade-in-up">

                    <h1 className="font-heading font-[800] text-[48px] lg:text-[60px] xl:text-[72px] leading-[1.05] tracking-tight text-gray-900 max-w-[520px] mb-8">
                        Grow Your <br />
                        Business with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6847BA] to-[#8B5CF6]">
                            AI-Powered <br />
                            WhatsApp Marketing
                        </span>
                    </h1>

                    <p className="text-[22px] text-gray-600 leading-[1.7] font-medium max-w-[500px] mb-10">
                        Automate conversations, run targeted campaigns, capture high-quality leads and boost customer engagement – all from one powerful platform.
                    </p>

                    <div className="flex flex-wrap items-center gap-[24px] mb-10">
                        <Link to="/signup" className="h-[56px] px-8 rounded-[16px] bg-accent text-gray-900 font-extrabold hover:bg-accent/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-[17px] shadow-xl shadow-accent/25">
                            Start Free Trial
                        </Link>
                        <button className="h-[56px] px-8 rounded-[16px] bg-white text-gray-800 border-2 border-gray-100 font-bold hover:bg-gray-50 hover:border-gray-200 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-[17px] shadow-sm">
                            Book Live Demo
                        </button>
                    </div>

                </div>

                {/* Right Column: Floating Composition */}
                <div className="w-full lg:w-[55%] flex justify-center items-center relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

                    {/* Main Dashboard Base */}
                    <div className="w-full max-w-[650px] aspect-[4/3] glass-card rounded-[24px] p-6 flex flex-col relative z-10 animate-float">
                        {/* Fake Dashboard UI */}
                        <div className="flex items-center justify-between border-b border-gray-200/50 pb-4 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="ml-4 font-heading font-bold text-gray-700">Conveza Dashboard</div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-200/50"></div>
                        </div>

                        <div className="flex gap-6 flex-1">
                            {/* Sidebar Mock */}
                            <div className="w-1/4 flex flex-col gap-3">
                                <div className="h-8 rounded-lg bg-primary/10"></div>
                                <div className="h-8 rounded-lg bg-gray-100/50"></div>
                                <div className="h-8 rounded-lg bg-gray-100/50"></div>
                                <div className="h-8 rounded-lg bg-gray-100/50"></div>
                            </div>
                            {/* Content Mock */}
                            <div className="w-3/4 flex flex-col gap-4">
                                <div className="flex gap-4">
                                    <div className="flex-1 h-24 rounded-xl bg-gradient-to-br from-white/60 to-white/30 border border-white/40 shadow-sm"></div>
                                    <div className="flex-1 h-24 rounded-xl bg-gradient-to-br from-white/60 to-white/30 border border-white/40 shadow-sm"></div>
                                </div>
                                <div className="flex-1 rounded-xl bg-gradient-to-br from-white/60 to-white/30 border border-white/40 shadow-sm p-4">
                                    {/* Mock Chart line */}
                                    <svg className="w-full h-full opacity-60" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path d="M0,80 C20,80 30,30 50,50 C70,70 80,20 100,10" fill="none" stroke="#6847BA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Card 1: AI Assistant */}
                    <div className="absolute -bottom-8 -right-4 lg:-right-12 glass-card rounded-[20px] p-4 flex items-center gap-4 z-30 animate-float-delayed shadow-xl">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">🤖</div>
                        <div>
                            <div className="text-[14px] font-bold text-gray-900">AI Assistant</div>
                            <div className="text-[12px] text-green-600 font-semibold">Resolving tickets...</div>
                        </div>
                    </div>

                    {/* Floating Card 2: Revenue Growth */}
                    <div className="absolute top-12 -right-6 glass-card rounded-[20px] p-4 z-20 animate-float shadow-xl">
                        <div className="text-[12px] font-bold text-gray-500 mb-1">Revenue Growth</div>
                        <div className="text-[24px] font-mono font-extrabold text-primary">+$45.2k</div>
                        <div className="text-[10px] text-green-500 font-bold font-mono">↑ 124% this month</div>
                    </div>

                    {/* Floating Card 3: Broadcast Delivered */}
                    <div className="absolute -left-8 top-1/3 glass-card rounded-[20px] p-4 flex items-center gap-3 z-30 animate-float-delayed shadow-xl">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                        <div>
                            <div className="text-[13px] font-bold text-gray-900">10k+ Broadcast</div>
                            <div className="text-[11px] text-gray-500 font-semibold">Delivered successfully</div>
                        </div>
                    </div>

                    {/* Floating Card 4: Customer Replies */}
                    <div className="absolute -bottom-10 left-10 glass-card rounded-[20px] p-4 z-20 animate-float shadow-xl">
                        <div className="flex -space-x-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold border-2 border-white">+5</div>
                        </div>
                        <div className="text-[12px] font-bold text-gray-600">New customer replies</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;