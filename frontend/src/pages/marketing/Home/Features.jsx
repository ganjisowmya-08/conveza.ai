import React from "react";
import { Link } from "react-router-dom";

// Custom SVG Icons for Feature Cards
const ChatbotIcon = () => (
    <svg className="w-7 h-7 text-[#6847BA]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="9" width="22" height="16" rx="6" fill="#EAE2FF" stroke="currentColor" strokeWidth="2.2" />
        <path d="M16 4V9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="16" cy="3.5" r="1.5" fill="#FF5E7E" />
        <circle cx="11.5" cy="15.5" r="2.5" fill="#FF5E7E" />
        <circle cx="20.5" cy="15.5" r="2.5" fill="#6847BA" />
        <path d="M11 20.5C12.5 22 19.5 22 21 20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const BroadcastIcon = () => (
    <svg className="w-7 h-7 text-[#FF5A5F]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 13C4 11.3431 5.34315 10 7 10H9L21 6V22L9 18H7C5.34315 18 4 16.6569 4 15V13Z" fill="#FFE5E7" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M21 10C23 11 25 12.5 25 14C25 15.5 23 17 21 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M11 18L13 25C13.5 26 15 26 15 25L16 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const InboxIcon = () => (
    <svg className="w-7 h-7 text-[#1A8DFF]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="24" height="17" rx="5" fill="#E5F2FF" stroke="currentColor" strokeWidth="2.2" />
        <path d="M11 10V8C11 6.34315 12.3431 5 14 5H18C19.6569 5 21 6.34315 21 8V10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M4 17H11C11.5523 17 12 17.4477 12 18V19C12 20.1046 12.8954 21 14 21H18C19.1046 21 20 20.1046 20 19V18C20 17.4477 20.4477 17 21 17H28" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="16" cy="14" r="1.5" fill="currentColor" />
    </svg>
);

const AutomateIcon = () => (
    <svg className="w-7 h-7 text-[#F5B600]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 4L7 17H15.5L14.5 28L25 15H16.5L17.5 4Z" fill="#FFF8DE" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const AnalyticsIcon = () => (
    <svg className="w-7 h-7 text-[#10B981]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="15" width="5" height="12" rx="2.5" fill="#E5EAF3" stroke="#8E78E6" strokeWidth="2.2" />
        <rect x="13.5" y="11" width="5" height="16" rx="2.5" fill="#FFD7E2" stroke="#FF5A7E" strokeWidth="2.2" />
        <rect x="21" y="7" width="5" height="20" rx="2.5" fill="#DCFCE7" stroke="currentColor" strokeWidth="2.2" />
    </svg>
);

const ContactsIcon = () => (
    <svg className="w-7 h-7 text-[#6847BA]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="11" r="4" fill="#EAE2FF" stroke="currentColor" strokeWidth="2.2" />
        <path d="M5 24C5 20.134 8.13401 17 12 17C15.866 17 19 20.134 19 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="21" cy="13" r="3.5" fill="#EAE2FF" stroke="#8A6DF0" strokeWidth="2.2" />
        <path d="M25 24C26.5 23 27.5 21 27.5 19C27.5 17 26 15.5 24.5 15.5" stroke="#8A6DF0" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
);

const BotAvatarIcon = () => (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="16" height="12" rx="5" fill="currentColor" />
        <path d="M12 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="2.5" r="1.5" fill="#FF7426" />
        <circle cx="9" cy="12" r="1.5" fill="#6847BA" />
        <circle cx="15" cy="12" r="1.5" fill="#6847BA" />
        <path d="M9 16C10 17 14 17 15 16" stroke="#6847BA" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
);

const Features = () => {
    return (
        <section className="bg-[#FAF9FF]/40 font-sans relative z-10 overflow-hidden w-full" style={{ paddingTop: "50px", paddingBottom: "30px" }}>
            {/* Soft ambient gradient background glow */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-200/40 via-pink-100/30 to-blue-100/30 blur-[90px]" />
                <div className="absolute top-[15%] left-[5%] w-[350px] h-[350px] rounded-full bg-purple-100/50 blur-[80px]" />
            </div>

            <div className="container-custom relative z-10">
                
                {/* Main 2-Column Section: Header + Cards Grid (Left) + Chat Mockup (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* LEFT COLUMN: Header + 6 Feature Cards Grid */}
                    <div className="lg:col-span-7 flex flex-col">
                        
                        {/* Header Area */}
                        <div className="max-w-[780px] mb-10 sm:mb-12 text-left">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F0EEFB] text-[#6847BA] font-extrabold text-[12px] sm:text-[13px] tracking-wide mb-6 shadow-2xs">
                                <svg className="w-4 h-4 mr-1.5 fill-current" viewBox="0 0 20 20">
                                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                                </svg>
                                Powerful Features
                            </div>

                            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-5">
                                All the tools you need <br />
                                in one <span className="text-[#6847BA]">powerful platform</span>
                            </h2>

                            <p className="text-slate-500 font-normal text-base sm:text-[18px] leading-relaxed max-w-[620px]">
                                Everything you need to automate, engage, and grow — <br className="hidden sm:inline" />
                                all in one unified platform.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
                            
                            {/* Card 1: AI Chatbots */}
                            <div className="group bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_6px_30px_-8px_rgba(104,71,186,0.06)] hover:shadow-[0_12px_40px_-6px_rgba(104,71,186,0.14)] hover:border-purple-200/60 transition-all duration-300 flex items-start justify-between cursor-pointer">
                                <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[18px] bg-[#F3EEFF] flex items-center justify-center flex-shrink-0 shadow-2xs border border-purple-100">
                                        <ChatbotIcon />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[17px] font-heading font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#6847BA] transition-colors">
                                            AI Chatbots
                                        </h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed font-normal">
                                            Smart chatbots that understand intent and provide accurate responses 24/7.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[#6847BA] font-bold ml-2 pt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card 2: Broadcast Campaigns */}
                            <div className="group bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_6px_30px_-8px_rgba(104,71,186,0.06)] hover:shadow-[0_12px_40px_-6px_rgba(104,71,186,0.14)] hover:border-purple-200/60 transition-all duration-300 flex items-start justify-between cursor-pointer">
                                <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[18px] bg-[#FFF3E6] flex items-center justify-center flex-shrink-0 shadow-2xs border border-orange-100">
                                        <BroadcastIcon />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[17px] font-heading font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#6847BA] transition-colors">
                                            Broadcast Campaigns
                                        </h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed font-normal">
                                            Send targeted messages to thousands of users with high delivery rates.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[#6847BA] font-bold ml-2 pt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card 3: Multi-Channel Inbox */}
                            <div className="group bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_6px_30px_-8px_rgba(104,71,186,0.06)] hover:shadow-[0_12px_40px_-6px_rgba(104,71,186,0.14)] hover:border-purple-200/60 transition-all duration-300 flex items-start justify-between cursor-pointer">
                                <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[18px] bg-[#EAF4FF] flex items-center justify-center flex-shrink-0 shadow-2xs border border-blue-100">
                                        <InboxIcon />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[17px] font-heading font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#6847BA] transition-colors">
                                            Multi-Channel Inbox
                                        </h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed font-normal">
                                            Manage WhatsApp, Instagram, Messenger and more from one unified inbox.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[#6847BA] font-bold ml-2 pt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card 4: No-Code Automations */}
                            <div className="group bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_6px_30px_-8px_rgba(104,71,186,0.06)] hover:shadow-[0_12px_40px_-6px_rgba(104,71,186,0.14)] hover:border-purple-200/60 transition-all duration-300 flex items-start justify-between cursor-pointer">
                                <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[18px] bg-[#FFF8E7] flex items-center justify-center flex-shrink-0 shadow-2xs border border-amber-100">
                                        <AutomateIcon />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[17px] font-heading font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#6847BA] transition-colors">
                                            No-Code Automations
                                        </h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed font-normal">
                                            Build powerful workflows and automations without writing any code.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[#6847BA] font-bold ml-2 pt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card 5: Advanced Analytics */}
                            <div className="group bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_6px_30px_-8px_rgba(104,71,186,0.06)] hover:shadow-[0_12px_40px_-6px_rgba(104,71,186,0.14)] hover:border-purple-200/60 transition-all duration-300 flex items-start justify-between cursor-pointer">
                                <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[18px] bg-[#F0EEFB] flex items-center justify-center flex-shrink-0 shadow-2xs border border-purple-100">
                                        <AnalyticsIcon />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[17px] font-heading font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#6847BA] transition-colors">
                                            Advanced Analytics
                                        </h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed font-normal">
                                            Track performance and get actionable insights to measure what matters.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[#6847BA] font-bold ml-2 pt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </div>

                            {/* Card 6: Contact Management */}
                            <div className="group bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_6px_30px_-8px_rgba(104,71,186,0.06)] hover:shadow-[0_12px_40px_-6px_rgba(104,71,186,0.14)] hover:border-purple-200/60 transition-all duration-300 flex items-start justify-between cursor-pointer">
                                <div className="flex items-start gap-4 sm:gap-5 min-w-0">
                                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-[18px] bg-[#F0EEFB] flex items-center justify-center flex-shrink-0 shadow-2xs border border-purple-100">
                                        <ContactsIcon />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[17px] font-heading font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-[#6847BA] transition-colors">
                                            Contact Management
                                        </h3>
                                        <p className="text-slate-500 text-[13px] leading-relaxed font-normal">
                                            Organize contacts, segment audiences, and manage leads effectively.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[#6847BA] font-bold ml-2 pt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Action Link */}
                        <div className="mt-2">
                            <Link to="/features" className="inline-flex items-center text-[15px] sm:text-[16px] font-extrabold text-[#6847BA] hover:underline group/more">
                                <span>Explore all features</span>
                                <svg className="w-4 h-4 ml-2 transform group-hover/more:translate-x-1.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Chat Mockup Window */}
                    <div className="lg:col-span-5 relative flex items-start justify-center lg:justify-end w-full mt-8 lg:mt-0">
                        {/* Soft floating background glow for chat */}
                        <div className="w-full max-w-[460px] bg-white rounded-[32px] shadow-[0_25px_80px_-15px_rgba(104,71,186,0.18)] border border-slate-100/90 overflow-hidden flex flex-col relative z-10">
                            
                            {/* Chat Header */}
                            <div className="bg-white p-5 sm:px-6 flex items-center gap-3.5 border-b border-slate-100 shadow-2xs z-10">
                                <div className="w-11 h-11 rounded-[16px] bg-[#6847BA] flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <BotAvatarIcon />
                                </div>
                                <div>
                                    <h3 className="font-heading font-extrabold text-slate-900 text-[17px] tracking-tight leading-tight">
                                        AI Assistant
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-xs text-[#10B981] font-bold mt-0.5">
                                        <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                                        Online
                                    </div>
                                </div>
                            </div>

                            {/* Chat Body Messages */}
                            <div className="flex-1 bg-[#FAF9FF]/70 p-5 sm:p-6 flex flex-col gap-4 overflow-y-auto max-h-[640px] text-[13.5px]">
                                {/* Today date pill */}
                                <div className="text-center my-1">
                                    <span className="text-[11px] text-slate-400 font-bold bg-slate-100/80 px-3.5 py-1 rounded-full uppercase tracking-wider">
                                        Today
                                    </span>
                                </div>

                                {/* Message 1 (Customer - right aligned) */}
                                <div className="self-end flex flex-col items-end max-w-[85%]">
                                    <div className="bg-[#DCF8C6]/90 text-slate-800 p-3.5 px-4 rounded-[20px] rounded-br-[4px] shadow-2xs font-normal leading-snug">
                                        Hi! I need help with my order.
                                    </div>
                                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium mt-1 mr-1">
                                        <span>10:30 AM</span>
                                        <span className="text-[#10B981] font-bold text-xs">✓✓</span>
                                    </div>
                                </div>

                                {/* Message 2 (Bot - left aligned) */}
                                <div className="self-start flex flex-col items-start max-w-[85%]">
                                    <div className="bg-white text-slate-800 p-3.5 px-4 rounded-[20px] rounded-bl-[4px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/90 font-normal leading-snug">
                                        Hi Jenny! I'd be happy to help you. Can you please share your order ID?
                                    </div>
                                    <div className="text-[11px] text-slate-400 font-medium mt-1 ml-1">
                                        10:30 AM
                                    </div>
                                </div>

                                {/* Message 3 (Customer - right aligned) */}
                                <div className="self-end flex flex-col items-end max-w-[85%]">
                                    <div className="bg-[#DCF8C6]/90 text-slate-800 p-3.5 px-4 rounded-[20px] rounded-br-[4px] shadow-2xs font-normal leading-snug">
                                        Sure, it's ORD-9945.
                                    </div>
                                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium mt-1 mr-1">
                                        <span>10:31 AM</span>
                                        <span className="text-[#10B981] font-bold text-xs">✓✓</span>
                                    </div>
                                </div>

                                {/* Message 4 (Bot Order Widget Card - left aligned) */}
                                <div className="self-start flex flex-col items-start w-[88%] sm:max-w-[85%]">
                                    <div className="bg-white text-slate-800 p-4.5 sm:p-5 rounded-[20px] rounded-bl-[4px] shadow-[0_6px_20px_rgba(104,71,186,0.06)] border border-slate-100 w-full">
                                        <h4 className="font-extrabold text-[15px] font-heading text-slate-900 mb-3 tracking-tight">
                                            Order #ORD-9945
                                        </h4>
                                        
                                        <div className="flex justify-between items-center py-1 border-b border-slate-50">
                                            <span className="text-slate-400 font-medium text-xs sm:text-[13px]">Status</span>
                                            <span className="text-[#1A8DFF] font-extrabold text-xs sm:text-[13px] bg-[#EAF4FF]/80 px-2.5 py-0.5 rounded-full">
                                                In Transit
                                            </span>
                                        </div>
                                        
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-slate-400 font-medium text-xs sm:text-[13px]">Expected Delivery</span>
                                            <span className="font-heading font-extrabold text-slate-900 text-xs sm:text-[13px]">
                                                May 24, 2024
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-[11px] text-slate-400 font-medium mt-1 ml-1">
                                        10:31 AM
                                    </div>
                                </div>

                                {/* Message 5 (Bot text - left aligned) */}
                                <div className="self-start flex flex-col items-start max-w-[88%] sm:max-w-[85%]">
                                    <div className="bg-white text-slate-800 p-3.5 px-4 rounded-[20px] rounded-bl-[4px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/90 font-normal leading-snug">
                                        Your order is currently in transit and should arrive by tomorrow.
                                    </div>
                                    <div className="text-[11px] text-slate-400 font-medium mt-1 ml-1">
                                        10:31 AM
                                    </div>
                                </div>

                            </div>

                            {/* Chat Input Bar */}
                            <div className="bg-white p-4 sm:px-6 border-t border-slate-100 flex items-center justify-between">
                                <div className="w-full flex items-center justify-between bg-transparent text-slate-400 text-sm font-medium">
                                    <span className="text-slate-400 select-none">Type a message...</span>
                                    <div className="flex items-center gap-3 sm:gap-3.5 text-slate-400">
                                        <svg className="w-5 h-5 hover:text-slate-600 cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <svg className="w-5 h-5 hover:text-slate-600 cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Features;
