import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="bg-white pb-14 pt-4 font-sans relative z-10 w-full flex flex-col items-center">
            <div className="container-custom relative z-10 flex flex-col items-center justify-center w-full" style={{ margin: "0 auto" }}>
                
                {/* Main Dark Cosmic CTA Card */}
                <div className="bg-gradient-to-r from-[#170E3B] via-[#1E114D] to-[#2D166F] text-white rounded-[36px] sm:rounded-[42px] p-8 sm:p-12 md:p-16 border border-[#7D52EA]/30 shadow-[0_25px_80px_-15px_rgba(23,14,59,0.7)] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-[1240px] mx-auto text-left">
                    
                    {/* Background Decorative Wavy Grid and Floating Stars */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                        {/* Soft ambient radial glow */}
                        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6847BA]/20 blur-[120px]"></div>

                        {/* Floating Stars */}
                        <div className="absolute top-10 right-[35%] text-[#B596FF] opacity-80 text-xl animate-pulse">✦</div>
                        <div className="absolute bottom-12 left-[48%] text-[#9A73FF] opacity-60 text-sm animate-pulse">✦</div>
                        <div className="absolute top-1/3 left-[10%] text-[#8E65FF] opacity-40 text-xs">✦</div>
                        
                        {/* Wavy Purple Curves */}
                        <svg className="absolute inset-x-0 bottom-0 top-0 w-full h-full object-cover opacity-25 mix-blend-screen pointer-events-none" viewBox="0 0 1240 460" fill="none">
                            <path d="M200 460C400 350 600 500 800 250C1000 0 1100 200 1240 100" stroke="url(#purple_cta_wave_1)" strokeWidth="2" />
                            <path d="M250 460C450 370 650 450 850 220C1050 -10 1150 170 1240 70" stroke="url(#purple_cta_wave_1)" strokeWidth="1.5" strokeDasharray="4 4" />
                            <path d="M150 460C350 330 550 520 750 280C950 40 1050 230 1240 130" stroke="url(#purple_cta_wave_1)" strokeWidth="1.5" />
                            <defs>
                                <linearGradient id="purple_cta_wave_1" x1="0" y1="0" x2="1240" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#6847BA" stopOpacity="0" />
                                    <stop offset="60%" stopColor="#A280FF" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#6847BA" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Left Content Column */}
                    <div className="relative z-10 max-w-xl w-full">
                        {/* Top Pill Badge */}
                        <div className="bg-[#261852]/90 border border-[#7D52EA]/40 text-[#C9B3FF] font-extrabold text-[11px] sm:text-[12px] uppercase tracking-[0.22em] px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-7 shadow-sm">
                            <span className="text-[#FFBA2A]">✦</span>
                            <span>READY TO GROW?</span>
                        </div>
                        
                        {/* Two-Line Headline */}
                        <h2 className="text-[34px] sm:text-[44px] md:text-[50px] font-extrabold font-heading tracking-tight leading-[1.12] mb-6">
                            <span className="text-white block">Ready to transform</span>
                            <span>your </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA98FF] via-[#9B73FF] to-[#8053FF]">
                                customer conversations?
                            </span>
                        </h2>

                        {/* Descriptive Subtitle */}
                        <p className="text-slate-300 font-normal text-[15px] sm:text-[16.5px] leading-[1.7] mb-9 max-w-md">
                            Join 2,000+ businesses growing with Conveza.ai <br className="hidden sm:inline" />
                            AI agents, automation, and insights — all in one platform.
                        </p>
                        
                        {/* Action Buttons Row */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
                            {/* Start Free Trial Button - Vibrant Golden Yellow */}
                            <Link 
                                to="/signup" 
                                className="px-8 py-4 rounded-[18px] bg-gradient-to-r from-[#FFB82E] via-[#FFB728] to-[#FFAA1E] text-[#140C2C] font-black text-[16px] flex items-center justify-center gap-2.5 shadow-[0_10px_25px_-5px_rgba(255,185,42,0.45)] hover:brightness-105 hover:shadow-[0_15px_35px_-4px_rgba(255,185,42,0.6)] hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <span>Start Free Trial</span>
                                <span className="text-xl leading-none font-black">→</span>
                            </Link>
                            
                            {/* Book a Live Demo Button - White text with arrow */}
                            <Link 
                                to="/demo" 
                                className="px-5 py-4 rounded-[18px] text-white hover:text-white/80 font-bold text-[15.5px] flex items-center justify-center gap-2 transition-colors group"
                            >
                                <span>Book a Live Demo</span>
                                <span className="text-[#FFB82E] group-hover:translate-x-1.5 transition-transform text-lg leading-none font-extrabold">→</span>
                            </Link>
                        </div>

                        {/* Bottom Trust Assurance Note */}
                        <div className="flex items-center gap-2.5 text-xs sm:text-[13.5px] font-medium text-[#A291DA]">
                            <span className="w-4 h-4 rounded-full bg-[#6847BA]/70 border border-[#8D65FD] text-white flex items-center justify-center text-[9px] font-extrabold flex-shrink-0">
                                ✓
                            </span>
                            <span>No credit card required • 14-day free trial</span>
                        </div>
                    </div>

                    {/* Right Graphic Column: High-Tech 3D AI Robot Phone Character */}
                    <div className="relative z-10 hidden md:flex items-center justify-center flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] self-center">
                        <div className="w-full relative flex flex-col items-center">
                            
                            {/* Glowing Golden Antenna at Top */}
                            <div className="relative flex flex-col items-center -mb-2 z-20">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FFA000] via-[#FFCA28] to-[#FFE082] shadow-[0_0_25px_rgba(255,202,40,0.8)] border border-white/60"></div>
                                <div className="w-1.5 h-7 bg-slate-300 shadow-sm"></div>
                            </div>

                            {/* Main Robot Smartphone Body */}
                            <div className="w-[260px] sm:w-[280px] h-[340px] sm:h-[370px] bg-gradient-to-b from-[#FFFFFF] via-[#F4F1FF] to-[#E5DEFF] rounded-[48px] border-[5px] border-white shadow-[0_20px_60px_-10px_rgba(15,8,35,0.8)] relative flex flex-col items-center overflow-hidden">
                                
                                {/* Top Dark Visor Screen with Glowing Yellow Eyes */}
                                <div className="w-[170px] h-[64px] bg-[#141026] rounded-[28px] mt-6 flex items-center justify-center gap-7 px-5 shadow-inner border border-purple-900/50">
                                    {/* Left Eye */}
                                    <div className="w-7 h-7 rounded-[10px] bg-gradient-to-br from-[#FFD54F] to-[#FFAB00] shadow-[0_0_15px_rgba(255,193,7,0.7)] animate-pulse"></div>
                                    {/* Right Eye */}
                                    <div className="w-7 h-7 rounded-[10px] bg-gradient-to-br from-[#FFD54F] to-[#FFAB00] shadow-[0_0_15px_rgba(255,193,7,0.7)] animate-pulse"></div>
                                </div>

                                {/* Subtle face shading & smile accent */}
                                <div className="w-16 h-2 rounded-full bg-indigo-100/60 mt-8"></div>

                                {/* Soft internal neon purple light gradient near bottom */}
                                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#6847BA]/20 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Left & Right Violet Stabilizer Ears / Clips */}
                            <div className="absolute top-1/3 -left-3 w-5 h-20 bg-gradient-to-b from-[#8C52FF] to-[#6847BA] rounded-l-2xl shadow-md z-10 border border-white/20"></div>
                            <div className="absolute top-1/3 -right-3 w-5 h-20 bg-gradient-to-b from-[#8C52FF] to-[#6847BA] rounded-r-2xl shadow-md z-10 border border-white/20"></div>

                            {/* Surrounding floating glowing sparkles */}
                            <div className="absolute -top-4 -right-4 text-[#FFBA2A] text-2xl animate-bounce" style={{ animationDuration: '3s' }}>✦</div>
                            <div className="absolute bottom-12 -left-8 text-[#A686FF] text-xl animate-pulse">✦</div>
                            <div className="absolute -bottom-2 right-4 text-[#8C52FF] text-lg">✦</div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA;
