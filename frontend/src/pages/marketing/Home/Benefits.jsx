import React from "react";

// Helper component for the checkmark icon in badges
const CheckIcon = () => (
    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#6847BA]/15 text-[#6847BA] mr-1.5 flex-shrink-0">
        <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 6L5 8.5L9.5 3.5" />
        </svg>
    </span>
);

// Decorative pastel waves for bottom-right corner of each card
const CardWave = ({ theme = "purple" }) => {
    const colors = {
        purple: { path1: "#F3EFFD", path2: "#E9DFFA", path3: "#E0D3F7" },
        orange: { path1: "#FFF8F2", path2: "#FFEDE0", path3: "#FFE1D0" },
        blue: { path1: "#F0F7FF", path2: "#E0EFFE", path3: "#CFE4FD" }
    }[theme] || { path1: "#F3EFFD", path2: "#E9DFFA", path3: "#E0D3F7" };

    return (
        <div className="absolute bottom-0 right-0 w-44 sm:w-52 h-28 sm:h-32 pointer-events-none overflow-hidden rounded-br-[28px] z-0 opacity-60">
            <svg viewBox="0 0 240 150" className="w-full h-full absolute bottom-0 right-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 150 C 60 105, 100 65, 160 50 C 190 40, 220 20, 240 0 V 150 H 60 Z" fill={colors.path1} opacity="0.9" />
                <path d="M100 150 C 100 120, 130 85, 180 65 C 205 55, 225 35, 240 15 V 150 H 100 Z" fill={colors.path2} opacity="0.85" />
                <path d="M140 150 C 140 130, 165 105, 205 88 C 220 80, 232 60, 240 40 V 150 H 140 Z" fill={colors.path3} opacity="0.75" />
            </svg>
        </div>
    );
};

// Custom icons replicating the exact illustrations from the reference image
const EngagementIcon = () => (
    <svg className="w-10 h-10 md:w-11 md:h-11 text-[#6847BA]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 25 V 19" stroke="#6847BA" strokeWidth="2.5" />
        <path d="M11 25 V 16" stroke="#6847BA" strokeWidth="2.5" />
        <path d="M16 25 V 12" stroke="#6847BA" strokeWidth="2.5" />
        <path d="M3 25 H 27" stroke="#6847BA" strokeWidth="2.2" opacity="0.35" />
        <path d="M5 15 L 12 9 L 16 13 L 26 5" stroke="#6847BA" strokeWidth="2.5" />
        <path d="M21 5 H 26 V 10" stroke="#6847BA" strokeWidth="2.5" />
    </svg>
);

const WorkflowIcon = () => (
    <svg className="w-10 h-10 md:w-11 md:h-11 text-[#FF7C2A]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3 L 5 18 H 16 L 15 29 L 27 14 H 16 L 17 3 Z" fill="rgba(255, 124, 42, 0.15)" />
    </svg>
);

const SalesIcon = () => (
    <svg className="w-10 h-10 md:w-11 md:h-11 text-[#6847BA]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="20" height="15" rx="4.5" fill="rgba(104, 71, 186, 0.1)" />
        <path d="M16 10 V 5" strokeWidth="2.5" />
        <circle cx="16" cy="4" r="1.5" fill="#6847BA" />
        <path d="M3 15.5 V 19.5" strokeWidth="2.5" />
        <path d="M29 15.5 V 19.5" strokeWidth="2.5" />
        <circle cx="12" cy="16.5" r="1.8" fill="#6847BA" stroke="none" />
        <circle cx="20" cy="16.5" r="1.8" fill="#6847BA" stroke="none" />
        <path d="M12 21.5 Q 16 24 20 21.5" strokeWidth="2.2" />
    </svg>
);

const GrowthIcon = () => (
    <svg className="w-10 h-10 md:w-11 md:h-11 text-[#1A8DFF]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="18" width="5" height="8" rx="1.5" fill="rgba(26, 141, 255, 0.15)" strokeWidth="2.3" />
        <rect x="13" y="13" width="5" height="13" rx="1.5" fill="rgba(26, 141, 255, 0.15)" strokeWidth="2.3" />
        <rect x="21" y="7" width="5" height="19" rx="1.5" fill="rgba(26, 141, 255, 0.15)" strokeWidth="2.3" />
        <path d="M3 26 H 29" strokeWidth="2" opacity="0.35" />
        <path d="M6 14 L 14 8 L 24 4" strokeWidth="2" strokeDasharray="2.5 2.5" opacity="0.75" />
    </svg>
);

const Benefits = () => {
    return (
        <section className="bg-[#FAF9FF]/80 font-sans relative z-10 overflow-hidden" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            {/* Background dotted patterns & soft circles */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Left grid dots */}
                <div 
                    className="absolute top-8 left-0 w-72 h-[85%] opacity-40 hidden md:block" 
                    style={{
                        backgroundImage: "radial-gradient(circle, #6847BA 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                        maskImage: "radial-gradient(ellipse at left center, black 30%, transparent 80%)",
                        WebkitMaskImage: "radial-gradient(ellipse at left center, black 30%, transparent 80%)"
                    }} 
                />
                {/* Right grid dots */}
                <div 
                    className="absolute top-16 right-0 w-72 h-[85%] opacity-40 hidden md:block" 
                    style={{
                        backgroundImage: "radial-gradient(circle, #6847BA 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                        maskImage: "radial-gradient(ellipse at right center, black 30%, transparent 80%)",
                        WebkitMaskImage: "radial-gradient(ellipse at right center, black 30%, transparent 80%)"
                    }} 
                />
                
                {/* Subtle soft colored floating discs */}
                <div className="absolute top-12 left-[14%] w-10 h-10 rounded-full bg-purple-200/60 blur-[1px]"></div>
                <div className="absolute top-[320px] right-[10%] w-8 h-8 rounded-full bg-amber-200/70 blur-[0.5px]"></div>
            </div>

            <div className="container-custom relative z-10" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                {/* Section Header (100% strictly centered horizontally with flex and margin auto) */}
                <div className="text-center mb-9" style={{ width: "100%", maxWidth: "860px", margin: "0 auto 36px auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ margin: "0 auto 20px auto", display: "flex", justifyContent: "center" }}>
                        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#F0EDFE] text-[#6847BA] font-extrabold text-[11px] sm:text-xs tracking-wider uppercase shadow-2xs">
                            WHY CONVEZA.AI
                        </span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-heading font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-5" style={{ textAlign: "center", width: "100%" }}>
                        Everything your business needs <br className="hidden sm:inline" />
                        to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6847BA] via-[#7D52DC] to-[#5D38B2]">automate, engage and grow</span>
                    </h2>

                    <p className="text-slate-500 font-normal text-base sm:text-lg leading-relaxed" style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto" }}>
                        Manage conversations, automate campaigns, capture leads <br className="hidden md:inline" />
                        and analyze performance from one intelligent platform.
                    </p>
                </div>

                {/* 2x2 Feature Cards Grid (Centered explicitly) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" style={{ width: "100%", maxWidth: "1180px", margin: "0 auto" }}>
                    
                    {/* Card 1: Increase Engagement */}
                    <div className="group relative bg-white rounded-[28px] border border-slate-100/90 shadow-[0_4px_30px_-6px_rgba(104,71,186,0.06)] hover:shadow-[0_16px_45px_-6px_rgba(104,71,186,0.13)] transition-all duration-300 p-7 sm:p-9 overflow-hidden flex flex-col justify-start">
                        <CardWave theme="purple" />
                        
                        <div className="relative z-10 flex items-start gap-5 sm:gap-6">
                            {/* Icon Container */}
                            <div className="w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] rounded-[24px] bg-[#F3EEFF] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9)] border border-[#6847BA]/5">
                                <EngagementIcon />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-3 mb-2.5">
                                    <h3 className="text-xl sm:text-[23px] font-bold font-heading text-slate-900 tracking-tight leading-snug">
                                        Increase Engagement
                                    </h3>
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] bg-[#F0EEFB] text-[#6847BA] flex items-center justify-center transition-all duration-300 group-hover:bg-[#6847BA] group-hover:text-white flex-shrink-0 shadow-2xs">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-5">
                                    Reach customers across WhatsApp and other channels where they spend most of their time.
                                </p>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> Multi-Channel
                                    </span>
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> Personalized
                                    </span>
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> Real-time
                                    </span>
                                </div>

                                {/* Bottom Action Link (Aligned with content column, moved right) */}
                                <div className="mt-6 pt-1 flex items-center">
                                    <a href="#" className="inline-flex items-center text-sm sm:text-[15px] font-extrabold text-[#6847BA] hover:underline group/link">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Automate Workflows */}
                    <div className="group relative bg-white rounded-[28px] border border-slate-100/90 shadow-[0_4px_30px_-6px_rgba(104,71,186,0.06)] hover:shadow-[0_16px_45px_-6px_rgba(104,71,186,0.13)] transition-all duration-300 p-7 sm:p-9 overflow-hidden flex flex-col justify-start">
                        <CardWave theme="orange" />
                        
                        <div className="relative z-10 flex items-start gap-5 sm:gap-6">
                            {/* Icon Container */}
                            <div className="w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] rounded-[24px] bg-[#FFF5EA] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9)] border border-[#FF6B00]/5">
                                <WorkflowIcon />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-3 mb-2.5">
                                    <h3 className="text-xl sm:text-[23px] font-bold font-heading text-slate-900 tracking-tight leading-snug">
                                        Automate Workflows
                                    </h3>
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] bg-[#F0EEFB] text-[#6847BA] flex items-center justify-center transition-all duration-300 group-hover:bg-[#6847BA] group-hover:text-white flex-shrink-0 shadow-2xs">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-5">
                                    Save time with intelligent automation and AI that handles conversations for you across every step.
                                </p>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> Smart Automation
                                    </span>
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> No-Code
                                    </span>
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> AI Triggers
                                    </span>
                                </div>

                                {/* Bottom Action Link (Aligned with content column, moved right) */}
                                <div className="mt-6 pt-1 flex items-center">
                                    <a href="#" className="inline-flex items-center text-sm sm:text-[15px] font-extrabold text-[#6847BA] hover:underline group/link">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Drive More Sales */}
                    <div className="group relative bg-white rounded-[28px] border border-slate-100/90 shadow-[0_4px_30px_-6px_rgba(104,71,186,0.06)] hover:shadow-[0_16px_45px_-6px_rgba(104,71,186,0.13)] transition-all duration-300 p-7 sm:p-9 overflow-hidden flex flex-col justify-start">
                        <CardWave theme="purple" />
                        
                        <div className="relative z-10 flex items-start gap-5 sm:gap-6">
                            {/* Icon Container */}
                            <div className="w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] rounded-[24px] bg-[#F3EEFF] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9)] border border-[#6847BA]/5">
                                <SalesIcon />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-3 mb-2.5">
                                    <h3 className="text-xl sm:text-[23px] font-bold font-heading text-slate-900 tracking-tight leading-snug">
                                        Drive More Sales
                                    </h3>
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] bg-[#F0EEFB] text-[#6847BA] flex items-center justify-center transition-all duration-300 group-hover:bg-[#6847BA] group-hover:text-white flex-shrink-0 shadow-2xs">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-5">
                                    Capture high-quality leads, nurture prospects with automated conversations and turn them into loyal customers.
                                </p>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> Lead Capture
                                    </span>
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> Nurture
                                    </span>
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> Conversions
                                    </span>
                                </div>

                                {/* Bottom Action Link (Aligned with content column, moved right) */}
                                <div className="mt-6 pt-1 flex items-center">
                                    <a href="#" className="inline-flex items-center text-sm sm:text-[15px] font-extrabold text-[#6847BA] hover:underline group/link">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Data-Driven Growth */}
                    <div className="group relative bg-white rounded-[28px] border border-slate-100/90 shadow-[0_4px_30px_-6px_rgba(104,71,186,0.06)] hover:shadow-[0_16px_45px_-6px_rgba(104,71,186,0.13)] transition-all duration-300 p-7 sm:p-9 overflow-hidden flex flex-col justify-start">
                        <CardWave theme="blue" />
                        
                        <div className="relative z-10 flex items-start gap-5 sm:gap-6">
                            {/* Icon Container */}
                            <div className="w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] rounded-[24px] bg-[#EAF4FF] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9)] border border-[#1A8DFF]/5">
                                <GrowthIcon />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-3 mb-2.5">
                                    <h3 className="text-xl sm:text-[23px] font-bold font-heading text-slate-900 tracking-tight leading-snug">
                                        Data-Driven Growth
                                    </h3>
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] bg-[#F0EEFB] text-[#6847BA] flex items-center justify-center transition-all duration-300 group-hover:bg-[#6847BA] group-hover:text-white flex-shrink-0 shadow-2xs">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-5">
                                    Get deep insights and analytics to measure performance, optimize campaigns and grow faster.
                                </p>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> Advanced Analytics
                                    </span>
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> Reports
                                    </span>
                                    <span className="inline-flex items-center text-xs sm:text-[13px] font-semibold text-slate-500">
                                        <CheckIcon /> ROI Tracking
                                    </span>
                                </div>

                                {/* Bottom Action Link (Aligned with content column, moved right) */}
                                <div className="mt-6 pt-1 flex items-center">
                                    <a href="#" className="inline-flex items-center text-sm sm:text-[15px] font-extrabold text-[#6847BA] hover:underline group/link">
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default Benefits;


