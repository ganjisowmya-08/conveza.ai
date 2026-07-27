import React, { useState } from "react";

// Professional SVG Icons for Pricing Cards
const LeafGrowthIcon = ({ className = "" }) => (
    <svg className={`w-7 h-7 sm:w-8 sm:h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 9.7a8.1 8.1 0 0 1-10 8.3Z" />
        <path d="M19 2l-7.3 8.7" />
        <path d="M4 11.5a5.5 5.5 0 0 0 4.5 8" />
    </svg>
);

const ProSparkleIcon = ({ className = "" }) => (
    <svg className={`w-7 h-7 sm:w-8 sm:h-8 ${className}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        <path d="M19 2L20 5L23 6L20 7L19 10L18 7L15 6L18 5L19 2Z" opacity="0.85" />
        <path d="M5 16L5.7 18.3L8 19L5.7 19.7L5 22L4.3 19.7L2 19L4.3 18.3L5 16Z" opacity="0.75" />
    </svg>
);

const CrownEnterpriseIcon = ({ className = "" }) => (
    <svg className={`w-7 h-7 sm:w-8 sm:h-8 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
);

// Trust Badge Icons
const TrustShieldIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5436D2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
    </svg>
);

const TrustRefreshIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5436D2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" />
        <polyline points="23 20 23 14 17 14" />
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
    </svg>
);

const TrustLockIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5436D2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const TrustSupportIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#5436D2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
);

// Checkmark icons
const LightCheckIcon = () => (
    <span className="w-5 h-5 rounded-full border-1.5 border-[#5436D2]/50 text-[#5436D2] flex items-center justify-center flex-shrink-0 mr-3 text-[12px] font-extrabold">
        ✓
    </span>
);

const DarkCheckIcon = () => (
    <span className="w-5 h-5 rounded-full bg-[#8349FF] text-white flex items-center justify-center flex-shrink-0 mr-3 text-[11px] font-extrabold shadow-xs">
        ✓
    </span>
);

const CheckIcon = ({ isDark }) => (isDark ? <DarkCheckIcon /> : <LightCheckIcon />);

// Waveform bottom decoration
const BottomWaveDecor = ({ isDark }) => (
    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden opacity-40">
        <svg className="w-full h-full preserve-3d" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,90 600,-40 900,60 L1200,30 L1200,120 L0,120 Z" fill={isDark ? "#8349FF" : "#EFEAFB"} />
            <path d="M0,30 C400,100 800,0 1200,70 L1200,120 L0,120 Z" fill={isDark ? "#672FD6" : "#E6DEFA"} opacity="0.6" />
        </svg>
    </div>
);

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [hoveredPlan, setHoveredPlan] = useState("pro");

    const isGrowthActive = hoveredPlan === "growth";
    const isProActive = hoveredPlan === "pro";
    const isEnterpriseActive = hoveredPlan === "enterprise";

    return (
        <section className="bg-gradient-to-b from-white via-[#FAF8FF] to-white font-sans relative z-10 overflow-hidden w-full flex flex-col items-center" style={{ paddingTop: "50px", paddingBottom: "45px" }}>
            {/* Ambient background glows */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-[100px]" />
                <div className="absolute bottom-[15%] left-[5%] w-[450px] h-[450px] rounded-full bg-indigo-100/30 blur-[90px]" />
            </div>

            <div className="container-custom relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6" style={{ margin: "0 auto" }}>
                
                {/* 1. TOP HEADER AREA */}
                <div className="text-center w-full max-w-3xl flex flex-col items-center justify-center mb-10" style={{ margin: "0 auto" }}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EDE8FA] text-[#5436D2] font-extrabold text-[12px] sm:text-[13px] tracking-wide mb-4 shadow-2xs">
                        <span className="text-[13px]">✦</span> PRICING
                    </div>
                    
                    {/* Headline */}
                    <h2 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold font-heading tracking-tight leading-[1.15] mb-4 text-center w-full text-slate-900">
                        Choose the Plan That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5436D2] via-[#7B42F6] to-[#4522B8]">Powers Your Growth</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed text-center mb-7 max-w-2xl">
                        One platform. Unlimited possibilities. Pay for what you need, scale as you grow.
                    </p>

                    {/* Monthly / Yearly Toggle */}
                    <div className="flex items-center justify-center gap-4 text-[15px] font-bold text-slate-700 mb-4 select-none">
                        <span className={!isYearly ? "text-[#5436D2] font-extrabold" : "text-slate-500 cursor-pointer"} onClick={() => setIsYearly(false)}>
                            Monthly
                        </span>
                        
                        <button 
                            onClick={() => setIsYearly(!isYearly)} 
                            className="w-14 h-8 rounded-full bg-[#5436D2] p-1 flex items-center relative transition-all duration-300 shadow-inner focus:outline-none cursor-pointer"
                            aria-label="Toggle Monthly/Yearly billing"
                        >
                            <div className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`} />
                        </button>

                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsYearly(true)}>
                            <span className={isYearly ? "text-[#5436D2] font-extrabold" : "text-slate-500"}>
                                Yearly
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#EDE8FA] text-[#5436D2] text-xs font-extrabold tracking-wide">
                                Save 20%
                            </span>
                        </div>
                    </div>
                </div>

                {/* 2. THREE PRICING CARDS GRID */}
                <div 
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch w-full max-w-[1240px] relative z-10" 
                    style={{ margin: "0 auto" }}
                    onMouseLeave={() => setHoveredPlan("pro")}
                >
                    
                    {/* CARD 1: GROWTH */}
                    <div 
                        onMouseEnter={() => setHoveredPlan("growth")}
                        onClick={() => setHoveredPlan("growth")}
                        className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 pb-12 cursor-pointer h-full ${
                            isGrowthActive 
                                ? "bg-gradient-to-b from-[#22125C] via-[#2F187D] to-[#5F28C7] text-white border border-purple-400/30 shadow-[0_20px_70px_-12px_rgba(100,45,210,0.45)] scale-[1.02] sm:scale-[1.03] z-20" 
                                : "bg-white text-slate-900 border border-slate-200/80 shadow-[0_15px_50px_-12px_rgba(104,71,186,0.08)] hover:shadow-xl hover:border-slate-300 z-10"
                        }`}
                    >
                        <BottomWaveDecor isDark={isGrowthActive} />
                        <div className="relative z-10">
                            {/* Icon & Title */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 mt-1 sm:mt-0 ${isGrowthActive ? "bg-[#6738EB] border border-white/20 shadow-md" : "bg-[#EDE8FA] shadow-2xs"}`}>
                                <LeafGrowthIcon className={isGrowthActive ? "text-white" : "text-[#5436D2]"} />
                            </div>
                            <h3 className={`text-[15px] font-black tracking-wider uppercase mb-1.5 transition-colors duration-300 ${isGrowthActive ? "text-white" : "text-[#5436D2]"}`}>
                                GROWTH
                            </h3>
                            <p className={`text-sm leading-relaxed mb-6 min-h-[40px] transition-colors duration-300 ${isGrowthActive ? "text-purple-200/90" : "text-slate-500"}`}>
                                For startups and growing businesses
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className={`text-4xl sm:text-5xl md:text-[52px] font-black font-heading tracking-tight leading-none transition-colors duration-300 ${isGrowthActive ? "text-white" : "text-slate-900"}`}>
                                    ₹{isYearly ? "27,999" : "2,999"}
                                </span>
                                <span className={`text-sm font-semibold transition-colors duration-300 ${isGrowthActive ? "text-purple-200" : "text-slate-500"}`}>
                                    {isYearly ? "/year" : "/month"}
                                </span>
                            </div>

                            {/* Divider Line */}
                            <div className={`w-full border-t my-6 transition-colors duration-300 ${isGrowthActive ? "border-white/15" : "border-slate-100"}`}></div>

                            {/* Feature List */}
                            <ul className={`space-y-4 mb-8 text-[14px] font-medium transition-colors duration-300 ${isGrowthActive ? "text-white/95" : "text-slate-700"}`}>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isGrowthActive} />
                                    <span>5,000 AI Messages / mo</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isGrowthActive} />
                                    <span>Broadcast Campaigns</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isGrowthActive} />
                                    <span>Shared Inbox</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isGrowthActive} />
                                    <span>Basic Analytics</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isGrowthActive} />
                                    <span>Email Support</span>
                                </li>
                            </ul>
                        </div>

                        {/* Button */}
                        <button className={`w-full py-3.5 px-6 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 transition-all duration-200 relative z-10 ${
                            isGrowthActive 
                                ? "bg-white text-[#5228D4] hover:bg-slate-50 hover:scale-[1.01] shadow-xl shadow-black/20" 
                                : "border-2 border-[#DCE2FE] sm:border-[#C3BEF7] text-[#5436D2] hover:bg-purple-50 bg-white font-extrabold shadow-xs"
                        }`}>
                            Get Started <span className="text-lg leading-none">→</span>
                        </button>
                    </div>

                    {/* CARD 2: PRO AI (MOST POPULAR) */}
                    <div 
                        onMouseEnter={() => setHoveredPlan("pro")}
                        onClick={() => setHoveredPlan("pro")}
                        className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 pb-12 cursor-pointer h-full ${
                            isProActive 
                                ? "bg-gradient-to-b from-[#22125C] via-[#2F187D] to-[#5F28C7] text-white border border-purple-400/30 shadow-[0_20px_70px_-12px_rgba(100,45,210,0.45)] scale-[1.02] sm:scale-[1.03] z-20" 
                                : "bg-white text-slate-900 border border-slate-200/80 shadow-[0_15px_50px_-12px_rgba(104,71,186,0.08)] hover:shadow-xl hover:border-slate-300 z-10"
                        }`}
                    >
                        <BottomWaveDecor isDark={isProActive} />
                        
                        {/* Top-right MOST POPULAR Ribbon */}
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-[#7B42F6] to-[#9B51E0] text-white text-[11px] sm:text-[12px] font-extrabold px-4 py-1.5 rounded-bl-[18px] rounded-tr-[32px] tracking-wider uppercase shadow-md z-30">
                            MOST POPULAR
                        </div>

                        <div className="relative z-10">
                            {/* Icon & Title */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 mt-1 sm:mt-0 ${isProActive ? "bg-[#6738EB] border border-white/20 shadow-md" : "bg-[#EDE8FA] shadow-2xs"}`}>
                                <ProSparkleIcon className={isProActive ? "text-white" : "text-[#5436D2]"} />
                            </div>
                            <h3 className={`text-[15px] font-black tracking-wider uppercase mb-1.5 transition-colors duration-300 ${isProActive ? "text-white" : "text-[#5436D2]"}`}>
                                PRO AI
                            </h3>
                            <p className={`text-sm leading-relaxed mb-6 min-h-[40px] transition-colors duration-300 ${isProActive ? "text-purple-200/90" : "text-slate-500"}`}>
                                For teams that want to scale with AI
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className={`text-4xl sm:text-5xl md:text-[52px] font-black font-heading tracking-tight leading-none transition-colors duration-300 ${isProActive ? "text-white" : "text-slate-900"}`}>
                                    ₹{isYearly ? "69,999" : "7,499"}
                                </span>
                                <span className={`text-sm font-semibold transition-colors duration-300 ${isProActive ? "text-purple-200" : "text-slate-500"}`}>
                                    {isYearly ? "/year" : "/month"}
                                </span>
                            </div>

                            {/* Divider Line */}
                            <div className={`w-full border-t my-6 transition-colors duration-300 ${isProActive ? "border-white/15" : "border-slate-100"}`}></div>

                            {/* Feature List */}
                            <ul className={`space-y-4 mb-8 text-[14px] font-medium transition-colors duration-300 ${isProActive ? "text-white/95" : "text-slate-700"}`}>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isProActive} />
                                    <span>20,000 AI Messages / mo</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isProActive} />
                                    <span>AI Agent & Automations</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isProActive} />
                                    <span>Smart WhatsApp API Manager</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isProActive} />
                                    <span>CRM Integrations</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isProActive} />
                                    <span>AI Insights & Analytics</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isProActive} />
                                    <span>Priority Support</span>
                                </li>
                            </ul>
                        </div>

                        {/* Button */}
                        <button className={`w-full py-3.5 px-6 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 transition-all duration-200 relative z-10 ${
                            isProActive 
                                ? "bg-white text-[#5228D4] hover:bg-slate-50 hover:scale-[1.01] shadow-xl shadow-black/20" 
                                : "border-2 border-[#DCE2FE] sm:border-[#C3BEF7] text-[#5436D2] hover:bg-purple-50 bg-white font-extrabold shadow-xs"
                        }`}>
                            Start Free Trial <span className="text-lg leading-none">→</span>
                        </button>
                    </div>

                    {/* CARD 3: ENTERPRISE */}
                    <div 
                        onMouseEnter={() => setHoveredPlan("enterprise")}
                        onClick={() => setHoveredPlan("enterprise")}
                        className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 pb-12 cursor-pointer h-full ${
                            isEnterpriseActive 
                                ? "bg-gradient-to-b from-[#22125C] via-[#2F187D] to-[#5F28C7] text-white border border-purple-400/30 shadow-[0_20px_70px_-12px_rgba(100,45,210,0.45)] scale-[1.02] sm:scale-[1.03] z-20" 
                                : "bg-white text-slate-900 border border-slate-200/80 shadow-[0_15px_50px_-12px_rgba(104,71,186,0.08)] hover:shadow-xl hover:border-slate-300 z-10"
                        }`}
                    >
                        <BottomWaveDecor isDark={isEnterpriseActive} />
                        <div className="relative z-10">
                            {/* Icon & Title */}
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 mt-1 sm:mt-0 ${isEnterpriseActive ? "bg-[#6738EB] border border-white/20 shadow-md" : "bg-[#EDE8FA] shadow-2xs"}`}>
                                <CrownEnterpriseIcon className={isEnterpriseActive ? "text-white" : "text-[#5436D2]"} />
                            </div>
                            <h3 className={`text-[15px] font-black tracking-wider uppercase mb-1.5 transition-colors duration-300 ${isEnterpriseActive ? "text-white" : "text-[#5436D2]"}`}>
                                ENTERPRISE
                            </h3>
                            <p className={`text-sm leading-relaxed mb-6 min-h-[40px] transition-colors duration-300 ${isEnterpriseActive ? "text-purple-200/90" : "text-slate-500"}`}>
                                For large businesses and enterprises
                            </p>

                            {/* Price Block */}
                            <div className="mb-6 min-h-[54px] flex flex-col justify-center">
                                <span className={`text-4xl sm:text-[46px] font-black font-heading tracking-tight leading-none transition-colors duration-300 ${isEnterpriseActive ? "text-white" : "text-slate-900"}`}>
                                    Custom
                                </span>
                                <span className={`text-sm font-medium mt-1 transition-colors duration-300 ${isEnterpriseActive ? "text-purple-200" : "text-slate-500"}`}>
                                    Tailored to your needs
                                </span>
                            </div>

                            {/* Divider Line */}
                            <div className={`w-full border-t my-6 transition-colors duration-300 ${isEnterpriseActive ? "border-white/15" : "border-slate-100"}`}></div>

                            {/* Feature List */}
                            <ul className={`space-y-4 mb-8 text-[14px] font-medium transition-colors duration-300 ${isEnterpriseActive ? "text-white/95" : "text-slate-700"}`}>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isEnterpriseActive} />
                                    <span>Custom AI Solutions</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isEnterpriseActive} />
                                    <span>Dedicated Account Manager</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isEnterpriseActive} />
                                    <span>Custom Integrations</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isEnterpriseActive} />
                                    <span>99.99% SLA & Uptime</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isEnterpriseActive} />
                                    <span>Advanced Security</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckIcon isDark={isEnterpriseActive} />
                                    <span>Onboarding & Training</span>
                                </li>
                            </ul>
                        </div>

                        {/* Button */}
                        <button className={`w-full py-3.5 px-6 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 transition-all duration-200 relative z-10 ${
                            isEnterpriseActive 
                                ? "bg-white text-[#5228D4] hover:bg-slate-50 hover:scale-[1.01] shadow-xl shadow-black/20" 
                                : "border-2 border-[#DCE2FE] sm:border-[#C3BEF7] text-[#5436D2] hover:bg-purple-50 bg-white font-extrabold shadow-xs"
                        }`}>
                            Contact Sales <span className="text-lg leading-none">→</span>
                        </button>
                    </div>

                </div>

                {/* 3. BOTTOM ASSURANCE / TRUST BANNER */}
                <div className="w-full max-w-[1240px] mx-auto mt-12 bg-[#FAF8FF] border border-[#EBE6FC] rounded-[28px] p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center shadow-xs">
                    
                    {/* Badge 1: Trial */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-[18px] bg-[#EBE4FE] flex items-center justify-center text-[#5436D2] flex-shrink-0 shadow-2xs">
                            <TrustShieldIcon />
                        </div>
                        <div className="text-left">
                            <h4 className="text-[#5436D2] font-extrabold text-[15px] leading-snug">14-Day Free Trial</h4>
                            <p className="text-slate-500 text-[13px]">No credit card required</p>
                        </div>
                    </div>

                    {/* Badge 2: Cancel */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-[18px] bg-[#EBE4FE] flex items-center justify-center text-[#5436D2] flex-shrink-0 shadow-2xs">
                            <TrustRefreshIcon />
                        </div>
                        <div className="text-left">
                            <h4 className="text-[#5436D2] font-extrabold text-[15px] leading-snug">Cancel Anytime</h4>
                            <p className="text-slate-500 text-[13px]">No hidden charges</p>
                        </div>
                    </div>

                    {/* Badge 3: Security */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-[18px] bg-[#EBE4FE] flex items-center justify-center text-[#5436D2] flex-shrink-0 shadow-2xs">
                            <TrustLockIcon />
                        </div>
                        <div className="text-left">
                            <h4 className="text-[#5436D2] font-extrabold text-[15px] leading-snug">Enterprise Security</h4>
                            <p className="text-slate-500 text-[13px]">Your data is always safe</p>
                        </div>
                    </div>

                    {/* Badge 4: Support */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-[18px] bg-[#EBE4FE] flex items-center justify-center text-[#5436D2] flex-shrink-0 shadow-2xs">
                            <TrustSupportIcon />
                        </div>
                        <div className="text-left">
                            <h4 className="text-[#5436D2] font-extrabold text-[15px] leading-snug">24/7 Support</h4>
                            <p className="text-slate-500 text-[13px]">We're here to help</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Pricing;

