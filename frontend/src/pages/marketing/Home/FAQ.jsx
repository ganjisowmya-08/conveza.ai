import React from "react";

// Professional SVG Icons for the right side of each FAQ card
const ChatFaqIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7A52E2] fill-current" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 10H7v-2h10v2zm0-3H7V7h10v2z"/>
        <circle cx="9" cy="11" r="1" fill="#fff" />
        <circle cx="12" cy="11" r="1" fill="#fff" />
        <circle cx="15" cy="11" r="1" fill="#fff" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7A52E2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const SwapArrowsIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7A52E2]" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 11 12 6 7 11" />
        <line x1="12" y1="6" x2="12" y2="18" />
        <polyline points="7 13 12 18 17 13" opacity="0.6" />
    </svg>
);

const ShieldIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7A52E2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
    </svg>
);

const ChannelsShareIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7A52E2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
);

const CrmPuzzleIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7A52E2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.5 12h-2V9a2 2 0 0 0-2-2h-3v-2a2.5 2.5 0 0 0-5 0v2H6a2 2 0 0 0-2 2v3h2a2.5 2.5 0 0 1 0 5h-2v3a2 2 0 0 0 2 2h3v-2a2.5 2.5 0 0 1 5 0v2h3a2 2 0 0 0 2-2v-3h2a2.5 2.5 0 0 0 0-5z" />
    </svg>
);

const SupportHeadsetIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7A52E2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
);

const WalletIcon = () => (
    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#7A52E2]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V8H6a2 2 0 0 1-2-2 2 2 0 0 1 2-2h12v4" />
        <path d="M4 6v12a2 2 0 0 0 2 2h14v-8H8a2 2 0 0 0-2 2 2 2 0 0 0 2 2h8" />
    </svg>
);

const FAQ = () => {
    const faqData = [
        {
            num: "01",
            question: "What is Conveza.ai?",
            answer: "Conveza.ai is an AI-powered platform that helps businesses automate conversations, run marketing campaigns and close more deals on WhatsApp.",
            icon: <ChatFaqIcon />
        },
        {
            num: "05",
            question: "Which channels are supported?",
            answer: "Conveza.ai is built for WhatsApp and integrates with popular platforms like Instagram, Messenger and more.",
            icon: <ChannelsShareIcon />
        },
        {
            num: "02",
            question: "How does the free trial work?",
            answer: "You get full access to Conveza.ai for 14 days. No credit card required. Cancel anytime.",
            icon: <CalendarIcon />
        },
        {
            num: "06",
            question: "Can I integrate Conveza.ai with my CRM?",
            answer: "Yes! Conveza.ai integrates seamlessly with CRM tools like HubSpot, Salesforce, Pipedrive and more.",
            icon: <CrmPuzzleIcon />
        },
        {
            num: "03",
            question: "Can I upgrade or downgrade my plan?",
            answer: "Yes, you can upgrade, downgrade, or cancel your plan anytime. Changes reflect in your next billing cycle.",
            icon: <SwapArrowsIcon />
        },
        {
            num: "07",
            question: "Do you offer onboarding support?",
            answer: "Yes, our team helps you get started with onboarding, training and strategy sessions.",
            icon: <SupportHeadsetIcon />
        },
        {
            num: "04",
            question: "Is my data secure with Conveza.ai?",
            answer: "Absolutely. We follow enterprise-grade security standards and never share your data with third parties.",
            icon: <ShieldIcon />
        },
        {
            num: "08",
            question: "Is there a setup fee?",
            answer: "No setup fees. You only pay for what you choose. Simple, transparent and hassle-free.",
            icon: <WalletIcon />
        }
    ];

    return (
        <section className="bg-white font-sans relative z-10 overflow-hidden w-full flex flex-col items-center" style={{ paddingTop: "25px", paddingBottom: "130px" }}>
            {/* Ambient Background Gradient Glows */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[25%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-100/30 blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] rounded-full bg-indigo-50/40 blur-[90px]" />
            </div>

            <div className="container-custom relative z-10 flex flex-col items-center justify-center w-full" style={{ margin: "0 auto" }}>
                
                {/* 1. TOP HEADER AREA */}
                <div className="text-center w-full max-w-3xl flex flex-col items-center justify-center" style={{ margin: "0 auto" }}>
                    
                    {/* Decorative Star & FAQ Label */}
                    <div className="inline-flex items-center justify-center gap-3 text-[#6847BA] font-extrabold tracking-[0.25em] uppercase text-xs sm:text-[13px] mb-4 text-center w-full">
                        <span className="text-sm select-none">✦</span>
                        <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-[#6847BA]/40"></div>
                        <span>F A Q</span>
                        <div className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-[#6847BA]/40"></div>
                        <span className="text-sm select-none">✦</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold font-heading text-slate-900 tracking-tight leading-[1.15] mb-4 text-center w-full">
                        <span>Questions? </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6847BA] via-[#7D52DC] to-[#5D38B2]">
                            We’ve Got Answers
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-base sm:text-[18px] text-slate-500 font-medium leading-relaxed mb-7 text-center w-full">
                        Everything you need to know about Conveza.ai.
                    </p>

                    {/* Decorative Accent Separator Line with Dot */}
                    <div className="flex items-center justify-center gap-2 mb-16 w-full" style={{ margin: "0 auto 64px auto" }}>
                        <div className="w-8 sm:w-12 h-[2.5px] bg-[#8B67FC] rounded-full"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#6847BA]"></div>
                        <div className="w-8 sm:w-12 h-[2.5px] bg-[#8B67FC] rounded-full"></div>
                    </div>
                </div>

                {/* 2. EIGHT FAQ CARDS IN A 2-COLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full max-w-[1240px] relative z-10" style={{ margin: "0 auto" }}>
                    {faqData.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 border border-slate-100 border-l-4 sm:border-l-[6px] border-l-[#B393FF] shadow-[0_4px_25px_-5px_rgba(104,71,186,0.06)] hover:shadow-[0_15px_40px_-5px_rgba(104,71,186,0.15)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4 sm:gap-5 group cursor-pointer text-left h-full"
                        >
                            {/* Left Side: Number Badge + Dotted Separator + Texts */}
                            <div className="flex items-center gap-3.5 sm:gap-5 flex-1 min-w-0">
                                
                                {/* Number Pill Badge */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[20px] bg-[#EFEAFB] text-[#6847BA] text-lg sm:text-[20px] font-extrabold font-heading flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:bg-[#6847BA] group-hover:text-white transition-colors duration-300">
                                    {item.num}
                                </div>

                                {/* Vertical Dotted Separator Line */}
                                <div className="w-[2px] self-stretch my-1 border-l-2 border-dotted border-[#D7CCFA] flex-shrink-0 hidden sm:block"></div>

                                {/* Question and Answer Text */}
                                <div className="flex-1 min-w-0 pl-1 sm:pl-0.5">
                                    <h3 className="text-[17px] sm:text-[18.5px] font-extrabold text-slate-900 mb-1.5 group-hover:text-[#6847BA] transition-colors leading-snug">
                                        {item.question}
                                    </h3>
                                    <p className="text-xs sm:text-[13.5px] text-slate-500 font-normal leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Circular Lavender Icon Badge */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F0EEFC] flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-110 group-hover:shadow-sm transition-all duration-300 ml-2">
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom Decorative Wave Graphic */}
            <div className="w-full h-40 mt-12 overflow-hidden pointer-events-none absolute bottom-0 left-0 right-0 z-0 opacity-35">
                <svg viewBox="0 0 1440 200" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,140 C320,60 640,220 960,100 C1280,-20 1360,100 1440,140 L1440,200 L0,200 Z" fill="url(#faq-wave-gradient)" />
                    <defs>
                        <linearGradient id="faq-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6847BA" stopOpacity="0.15" />
                            <stop offset="50%" stopColor="#7D52DC" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#6847BA" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default FAQ;
