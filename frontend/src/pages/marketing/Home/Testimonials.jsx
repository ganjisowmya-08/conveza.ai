import React from "react";

const Testimonials = () => {
    const testimonialsData = [
        {
            quote: (
                <>
                    We switched from AiSensy to Conveza.ai last month. The Gen-AI chatbots are on another level. Our conversion rates from WhatsApp are <span className="text-[#6847BA] font-bold">up 45%</span>.
                </>
            ),
            metricValue: "45%",
            metricLine1: "Increase in",
            metricLine2: "Conversions",
            initial: "S",
            authorName: "Sarah Jenkins",
            role: "VP Marketing",
            company: "@ GlobalRetail"
        },
        {
            quote: (
                <>
                    The 1-Click Ads Manager is a game changer. We launch Meta ads directly from Conveza, and the AI agent instantly closes the leads. <span className="text-[#6847BA] font-bold">Literal magic. 🚀</span>
                </>
            ),
            metricValue: "3X",
            metricLine1: "More Qualified",
            metricLine2: "Leads",
            initial: "D",
            authorName: "David Chen",
            role: "Founder",
            company: "@ TechNova"
        },
        {
            quote: (
                <>
                    I was skeptical about AI support, but Conveza's agent actually understands context. It resolved <span className="text-[#6847BA] font-bold">80%</span> of our tier-1 tickets on day one.
                </>
            ),
            metricValue: "80%",
            metricLine1: "Tickets Resolved",
            metricLine2: "Day One",
            initial: "E",
            authorName: "Elena Rodriguez",
            role: "Head of Support",
            company: "@ Synergy"
        }
    ];

    return (
        <section className="bg-white font-sans relative z-10 overflow-hidden w-full flex flex-col items-center" style={{ paddingTop: "35px", paddingBottom: "35px" }}>
            {/* Ambient Background Gradient Glows */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[35%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-100/30 blur-[100px]" />
                <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-indigo-50/40 blur-[90px]" />
            </div>

            <div className="container-custom relative z-10 flex flex-col items-center justify-center w-full" style={{ margin: "0 auto" }}>
                
                {/* 1. TOP HEADER AREA */}
                <div className="text-center w-full max-w-3xl flex flex-col items-center justify-center" style={{ margin: "0 auto" }}>
                    <p className="text-[#6847BA] font-extrabold tracking-[0.25em] uppercase text-xs sm:text-[13px] mb-3.5 text-center w-full">
                        CUSTOMER LOVE
                    </p>

                    <h2 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold font-heading text-slate-900 tracking-tight leading-[1.15] mb-4 text-center w-full">
                        <span>What Our </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6847BA] via-[#7D52DC] to-[#6847BA]">
                            Customers
                        </span>
                        <span> Say</span>
                    </h2>

                    <p className="text-base sm:text-[17px] text-slate-500 font-medium leading-relaxed mb-7 text-center w-full">
                        Real stories. Real impact. Real growth.
                    </p>

                    {/* Decorative Heart Separator Line */}
                    <div className="flex items-center justify-center gap-3.5 w-full max-w-lg mb-16" style={{ margin: "0 auto 64px auto" }}>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#6847BA]/25 to-[#6847BA]/40"></div>
                        <span className="text-[#7D52DC] text-base leading-none select-none">♥</span>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#6847BA]/25 to-[#6847BA]/40"></div>
                    </div>
                </div>

                {/* 2. THREE TESTIMONIAL CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch w-full max-w-[1240px] relative z-10" style={{ margin: "0 auto" }}>
                    {testimonialsData.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 border border-slate-100/90 shadow-[0_12px_45px_-10px_rgba(104,71,186,0.08)] hover:shadow-[0_20px_55px_-8px_rgba(104,71,186,0.16)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left h-full group"
                        >
                            {/* Top Quote Content Area */}
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    {/* Quotation Mark Icon */}
                                    <div className="text-[#9A73FF] text-5xl sm:text-6xl font-serif font-extrabold leading-none select-none -mt-2">
                                        “
                                    </div>
                                    {/* Speech Bubble Icon with 3 Dots */}
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F0EEFB] flex items-center justify-center text-[#A688FF] shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h2v2H6V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9z"/>
                                        </svg>
                                    </div>
                                </div>
                                
                                <p className="text-slate-700 font-normal text-[15px] sm:text-[15.5px] leading-[1.65] mb-8">
                                    {item.quote}
                                </p>
                            </div>

                            {/* Bottom Metric & Author Section */}
                            <div className="mt-auto">
                                <div className="w-full border-t border-slate-100/90 mb-6"></div>

                                <div className="flex items-center gap-3.5 sm:gap-4">
                                    {/* Left Metric Pill Box */}
                                    <div className="bg-[#F2EEFD] border border-[#E5DFFA] rounded-[22px] py-2.5 px-3 sm:px-3.5 text-center min-w-[105px] sm:min-w-[115px] flex flex-col items-center justify-center flex-shrink-0 shadow-2xs">
                                        <svg className="w-4 h-4 text-[#6847BA] mb-1" fill="none" stroke="currentColor" strokeWidth="2.6" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                            <polyline points="17 6 23 6 23 12" />
                                        </svg>
                                        <div className="text-[22px] sm:text-[24px] font-extrabold font-heading text-[#6847BA] tracking-tight leading-none mb-1">
                                            {item.metricValue}
                                        </div>
                                        <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">
                                            <div>{item.metricLine1}</div>
                                            <div>{item.metricLine2}</div>
                                        </div>
                                    </div>

                                    {/* Right Author Details */}
                                    <div className="flex items-center gap-3 min-w-0 flex-1">
                                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EBE5FB] text-[#6847BA] font-extrabold text-[18px] sm:text-[20px] flex items-center justify-center flex-shrink-0 shadow-2xs">
                                            {item.initial}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="font-extrabold text-[15px] sm:text-[16px] text-slate-900 leading-snug truncate">
                                                {item.authorName}
                                            </h4>
                                            <p className="text-[12px] sm:text-[12.5px] text-slate-500 font-medium leading-snug">
                                                <span>{item.role}</span>
                                                <span className="block">{item.company}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
