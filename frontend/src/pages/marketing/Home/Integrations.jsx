import React from "react";

// Helper components for precise professional SVG icons in the stats bar
const UsersIcon = () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#6847BA]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <path d="M18 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-.6 0-1.34.1-2.12.33 1.55 1.13 2.62 2.5 2.87 4.17H22v-1.7C22 12.63 19.85 12 18 12z"/>
        <path d="M6 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-2.88 4.33C2.34 14.1 1.6 14 1 14c-1.85 0-4 .63-4 2.7V18h3.25c.25-1.67 1.32-3.04 2.87-4.17z" opacity="0.8"/>
    </svg>
);

const ChatIcon = () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#6847BA]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 10H7v-2h10v2zm0-3H7V7h10v2z"/>
    </svg>
);

const ChartIcon = () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#6847BA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
        <path d="M2 20h20" strokeWidth="2" />
        <polyline points="5,13 11,6 16,11 21,5" stroke="#7D52DC" strokeWidth="2.2" />
    </svg>
);

const StarIcon = () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#6847BA]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const SupportIcon = () => (
    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#6847BA]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const Integrations = () => {
    const integrationsList = [
        {
            name: "Shopify",
            desc: "Sync customers, orders and conversations.",
            bg: "bg-[#DCF9E2]",
            icon: (
                <svg className="w-8 h-8 text-[#008060] fill-current" viewBox="0 0 24 24">
                    <path d="M15.3 4.2c-.3 0-.6.1-.9.3-.3-.9-1.2-1.5-2.2-1.5-.2 0-.4 0-.5.1-.3-.6-.9-1-1.6-1-.8 0-1.5.5-1.8 1.3-.2 0-.4-.1-.6-.1-1.1 0-2.1.8-2.3 2-.3 1.9-.8 5.7-1.3 9.4-.5 3.7-.8 6.4-.8 6.6 0 .5.4.8.9.8h11.2c.5 0 .9-.4.9-.9 0-.2-.3-3-.8-6.7-.6-3.7-1-7.5-1.4-9.4-.2-.5-.5-.9-1-1v.1h.3zM12 6.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2 2.2 1 2.2 2.2-1 2.2-2.2 2.2z"/>
                    <path d="M15.4 6.8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0-2.3c-.4 0-.8.3-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8z" fill="#fff" />
                    <text x="7.5" y="15" fontSize="10" fontWeight="900" fill="white" fontFamily="sans-serif">S</text>
                </svg>
            )
        },
        {
            name: "Salesforce",
            desc: "Connect CRM and automate customer engagement.",
            bg: "bg-[#E3F1FF]",
            icon: (
                <svg className="w-9 h-9 text-[#00A1E0] fill-current" viewBox="0 0 24 24">
                    <path d="M11.9 6.2c.9 0 1.7.5 2.1 1.2 1.3-.4 2.8.2 3.4 1.5.6 1.3.1 2.8-1.2 3.5.5.9.3 2.1-.6 2.8-.8.6-2 .7-2.9.2-.7 1.2-2.3 1.7-3.6 1-1-.5-1.6-1.5-1.6-2.6-.9-.1-1.6-.9-1.6-1.8 0-.9.7-1.7 1.6-1.8-.1-1.1.6-2.1 1.6-2.4 0-.1.2-.2.3-.3.8-.8 1.9-1.3 3-.9.1 0 .2-.1.3-.2-.5-.4-.7-.2-.8-.2zM12.4 8c-1.3 0-2.4 1-2.5 2.3-.9.1-1.6.9-1.6 1.8 0 .9.7 1.7 1.6 1.8.1 1.1 1.1 1.9 2.2 1.9 1 0 1.9-.7 2.1-1.7.8.2 1.6-.2 1.9-1 .3-.8 0-1.7-.8-2 .4-.9 0-2-.9-2.3-.9-.4-1.9.1-2.2 1-.3-.6-.9-1.1-1.6-1.1-.3 0-.7.1-1 .3.4-.6 1.1-1 1.8-1z"/>
                    <path d="M19.6 11.2c0-2.1-1.7-3.8-3.8-3.8-.7 0-1.4.2-2 .6-.6-1.3-1.9-2.2-3.4-2.2-1.5 0-2.8.9-3.4 2.2-.6-.4-1.3-.6-2-.6-2.1 0-3.8 1.7-3.8 3.8 0 .7.2 1.4.6 2-.4.6-.6 1.3-.6 2 0 2.1 1.7 3.8 3.8 3.8.7 0 1.4-.2 2-.6.6 1.3 1.9 2.2 3.4 2.2 1.5 0 2.8-.9 3.4-2.2.6.4 1.3.6 2 .6 2.1 0 3.8-1.7 3.8-3.8 0-.7-.2-1.4-.6-2 .4-.6.6-1.3.6-2z"/>
                </svg>
            )
        },
        {
            name: "HubSpot",
            desc: "Unify marketing, sales and support on one platform.",
            bg: "bg-[#FFF1E6]",
            icon: (
                <svg className="w-8 h-8 text-[#FF7A59] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" stroke="#FF7A59" fill="#FF7A59" />
                    <line x1="12" y1="9" x2="12" y2="4" strokeWidth="2.5" stroke="#FF7A59" />
                    <circle cx="12" cy="3" r="1.5" fill="#FF7A59" />
                    <line x1="14.5" y1="13.5" x2="19" y2="16.5" strokeWidth="2.5" stroke="#FF7A59" />
                    <circle cx="20" cy="17" r="1.8" fill="#FF7A59" />
                    <line x1="9.5" y1="13.5" x2="6.5" y2="16" strokeWidth="2.5" stroke="#FF7A59" />
                    <circle cx="5.5" cy="17" r="1.5" fill="#FF7A59" />
                </svg>
            )
        },
        {
            name: "Meta Ads",
            desc: "Generate leads and run high-performing campaigns.",
            bg: "bg-[#EBF3FF]",
            icon: (
                <svg className="w-8 h-8 text-[#0081FB] fill-current" viewBox="0 0 24 24">
                    <path d="M18.9 6c-.9 0-1.8.4-2.5 1.1-1.3 1.4-2.8 4.2-3.8 6.4-1.4 2.9-2.6 4.5-3.8 4.5-.8 0-1.5-.6-1.9-1.3-.8-1.5-.4-4.5 1.2-7.8 1.4-2.8 3.1-4.7 4.9-4.7 1.3 0 2.4.9 2.8 2.2.8-1.4 2.2-2.2 3.8-2.2 2.6 0 4.6 2.1 4.6 4.7 0 3.2-2.5 7.1-6.9 7.1-2.4 0-4.2-.9-5.4-2.4C10.7 15.2 8.8 18 6.1 18 2.8 18 .5 14.8.5 10.7c0-4 3.1-6.5 6.3-6.5 1.8 0 3.5.9 4.8 2.6 1-2.1 2.9-3.3 5.3-3.3 1.3 0 2.1.2 2 .5z" />
                    <path d="M18.6 7.5c-1.8 0-3.8 3-5.2 6.3-.6 1.4-1.3 2.7-2 3.6 1.1.6 2.4.6 3.6 0 2.2-1.3 4.3-4.5 4.3-7.6 0-1.3-.3-2.3-.7-2.3z" fill="#0064E0"/>
                </svg>
            )
        },
        {
            name: "Stripe",
            desc: "Track payments and trigger smart automations.",
            bg: "bg-[#EFEAFB]",
            icon: (
                <div className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center font-extrabold text-[24px] text-[#635BFF]">
                    S
                </div>
            )
        },
        {
            name: "Zendesk",
            desc: "Resolve queries faster with context-rich conversations.",
            bg: "bg-[#E4F6EE]",
            icon: (
                <svg className="w-8 h-8 text-[#03363D] fill-current" viewBox="0 0 24 24">
                    <path d="M2.5 12h8.5l-8.5 8.5V12V3.5l8.5 8.5H2.5z" opacity="0.75" />
                    <path d="M13 12h8.5l-8.5 8.5V12V3.5l8.5 8.5H13z" />
                </svg>
            )
        },
        {
            name: "Zapier",
            desc: "Connect with 5,000+ apps and automate workflows.",
            bg: "bg-[#FFF1EC]",
            icon: (
                <svg className="w-8 h-8 text-[#FF4A00] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" />
                </svg>
            )
        },
        {
            name: "Custom API",
            desc: "Build custom integrations that fit your business.",
            bg: "bg-[#EFEAFB]",
            icon: (
                <svg className="w-8 h-8 text-[#6847BA]" fill="none" stroke="currentColor" strokeWidth="2.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="14" y1="4" x2="10" y2="20" opacity="0.6" strokeWidth="2.2" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-white font-sans relative z-10 overflow-hidden w-full flex flex-col items-center" style={{ paddingTop: "20px", paddingBottom: "110px" }}>
            {/* Ambient Background Gradient Glows */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full bg-purple-100/30 blur-[100px]" />
                <div className="absolute bottom-0 right-[10%] w-[600px] h-[300px] rounded-full bg-gradient-to-t from-purple-200/40 to-transparent blur-[80px]" />
            </div>

            <div className="container-custom relative z-10 flex flex-col items-center justify-center w-full" style={{ margin: "0 auto" }}>
                
                {/* 1. TOP HERO AREA: CONNECTED ECOSYSTEM */}
                <div className="text-center w-full max-w-3xl flex flex-col items-center justify-center" style={{ margin: "0 auto 56px auto" }}>
                    <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F0EEFB] text-[#6847BA] font-extrabold text-[12px] sm:text-[13px] tracking-wide mb-5 shadow-2xs">
                        <svg className="w-4 h-4 text-[#6847BA] fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-3H8v-3h3v-3h2v3h3v3h-3v3h-2z" />
                        </svg>
                        CONNECTED ECOSYSTEM
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold font-heading text-slate-900 tracking-tight leading-[1.1] mb-2 text-center w-full">
                        Everything you need.
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#6847BA] via-[#7D52DC] to-[#5D38B2] tracking-tight leading-[1.1] mb-6 text-center w-full">
                        Seamlessly connected.
                    </h2>

                    <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl text-center" style={{ margin: "0 auto" }}>
                        Conveza.ai works effortlessly with the tools you already use. <br className="hidden sm:inline" />
                        One platform. Endless possibilities.
                    </p>
                </div>

                {/* 2. STATS BAR (Without outer border/card styling) */}
                <div className="w-full max-w-[1240px] flex items-center justify-center relative z-10 py-2" style={{ margin: "0 auto 72px auto" }}>
                    <div className="w-full flex flex-wrap items-center justify-center lg:justify-around gap-7 sm:gap-6">
                        
                        {/* Stat 1 */}
                        <div className="flex items-center gap-3.5 px-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-[#EDE8FA] flex items-center justify-center flex-shrink-0 shadow-xs">
                                <UsersIcon />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl sm:text-[26px] font-extrabold text-slate-900 font-heading leading-tight">2,500+</div>
                                <div className="text-xs sm:text-[13px] font-medium text-slate-500">Happy Customers</div>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-center gap-3.5 px-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-[#EDE8FA] flex items-center justify-center flex-shrink-0 shadow-xs">
                                <ChatIcon />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl sm:text-[26px] font-extrabold text-slate-900 font-heading leading-tight">20M+</div>
                                <div className="text-xs sm:text-[13px] font-medium text-slate-500">Messages Delivered</div>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex items-center gap-3.5 px-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-[#EDE8FA] flex items-center justify-center flex-shrink-0 shadow-xs">
                                <ChartIcon />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl sm:text-[26px] font-extrabold text-slate-900 font-heading leading-tight">98.5%</div>
                                <div className="text-xs sm:text-[13px] font-medium text-slate-500">Delivery Rate</div>
                            </div>
                        </div>

                        {/* Stat 4 */}
                        <div className="flex items-center gap-3.5 px-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-[#EDE8FA] flex items-center justify-center flex-shrink-0 shadow-xs">
                                <StarIcon />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl sm:text-[26px] font-extrabold text-slate-900 font-heading leading-tight">4.9/5</div>
                                <div className="text-xs sm:text-[13px] font-medium text-slate-500">Customer Rating</div>
                            </div>
                        </div>

                        {/* Stat 5 */}
                        <div className="flex items-center gap-3.5 px-2">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] bg-[#EDE8FA] flex items-center justify-center flex-shrink-0 shadow-xs">
                                <SupportIcon />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl sm:text-[26px] font-extrabold text-slate-900 font-heading leading-tight">24/7</div>
                                <div className="text-xs sm:text-[13px] font-medium text-slate-500">Customer Support</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. SEAMLESS CONNECTIVITY: INTEGRATIONS GRID HEADER */}
                <div className="text-center w-full max-w-3xl flex flex-col items-center justify-center" style={{ margin: "0 auto 40px auto" }}>
                    <p className="text-[#6847BA] font-extrabold tracking-[0.2em] uppercase text-xs sm:text-[13px] mb-2.5 text-center w-full">
                        SEAMLESS CONNECTIVITY
                    </p>
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-slate-900 tracking-tight mb-4 text-center w-full">
                        Integrates With Your Stack
                    </h3>
                    <div className="flex items-center justify-center w-full mb-2">
                        <div className="w-14 h-[3.5px] bg-[#6847BA] rounded-full" style={{ margin: "0 auto" }}></div>
                    </div>
                </div>

                {/* 8 Integrations Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full max-w-[1240px] relative z-10" style={{ margin: "0 auto" }}>
                    {integrationsList.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-[22px] p-5 sm:p-6 border border-slate-100/90 shadow-[0_4px_20px_-6px_rgba(104,71,186,0.06)] hover:shadow-[0_14px_35px_-6px_rgba(104,71,186,0.14)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 text-left group cursor-pointer"
                        >
                            {/* Circle Logo Badge */}
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                                {item.icon}
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 min-w-0 pt-1 text-left">
                                <h4 className="font-extrabold text-[17px] sm:text-[18px] text-slate-900 group-hover:text-[#6847BA] transition-colors mb-1">
                                    {item.name}
                                </h4>
                                <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom Decorative Wave Graphic */}
            <div className="w-full h-36 mt-12 overflow-hidden pointer-events-none absolute bottom-0 left-0 right-0 z-0 opacity-40">
                <svg viewBox="0 0 1440 200" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,160 C320,80 640,240 960,120 C1280,0 1360,120 1440,160 L1440,200 L0,200 Z" fill="url(#wave-gradient)" />
                    <defs>
                        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6847BA" stopOpacity="0.15" />
                            <stop offset="50%" stopColor="#7D52DC" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#6847BA" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Integrations;
