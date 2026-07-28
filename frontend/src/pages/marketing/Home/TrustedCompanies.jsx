import React from "react";

const TrustedCompanies = () => {
    return (
        <section className="bg-white font-sans relative z-10 overflow-hidden" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
            <div className="container-custom">
                {/* Decorative title header */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-9 sm:mb-10" style={{ marginBottom: "36px" }}>
                    <div className="w-6 sm:w-10 h-[2px] bg-gradient-to-r from-transparent to-purple-300 rounded-full opacity-70"></div>
                    <div className="w-5 sm:w-8 h-[3px] bg-gradient-to-r from-purple-400 to-[#6847BA] rounded-full"></div>
                    <p className="text-center text-xs md:text-sm font-extrabold uppercase tracking-[0.24em] text-slate-400/90 px-1 sm:px-2">
                        TRUSTED BY 2,500+ BUSINESSES WORLDWIDE
                    </p>
                    <div className="w-5 sm:w-8 h-[3px] bg-gradient-to-r from-[#6847BA] to-purple-400 rounded-full"></div>
                    <div className="w-6 sm:w-10 h-[2px] bg-gradient-to-l from-transparent to-purple-300 rounded-full opacity-70"></div>
                </div>

                {/* Logos container without outer border/card styling */}
                <div className="max-w-[1280px] mx-auto py-6 md:py-8 px-4 sm:px-6 md:px-8 flex flex-wrap items-center justify-center lg:justify-between gap-9 md:gap-14">

                    {/* unacademy */}
                    <div className="flex items-center gap-2.5 font-bold text-xl md:text-[24px] text-[#0084FF] tracking-tight hover:scale-105 transition-transform cursor-pointer select-none">
                        <svg className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7 C 3 13, 21 13, 21 7 Z" fill="#0084FF" />
                            <path d="M7 15.5 C 7 19.5, 17 19.5, 17 15.5 Z" fill="#00C07F" />
                        </svg>
                        <span>unacademy</span>
                    </div>

                    {/* HDFC BANK */}
                    <div className="flex items-center bg-white border border-slate-200/90 rounded p-1 sm:p-1.5 shadow-2xs hover:scale-105 transition-transform cursor-pointer select-none">
                        <div className="grid grid-cols-2 gap-[2px] w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mr-2 p-0.5 bg-slate-50">
                            <div className="bg-[#ED232A] rounded-tl-[1px]"></div>
                            <div className="bg-[#004C8F] rounded-tr-[1px]"></div>
                            <div className="bg-[#004C8F] rounded-bl-[1px]"></div>
                            <div className="bg-[#ED232A] rounded-br-[1px]"></div>
                        </div>
                        <div className="bg-[#004C8F] text-white font-extrabold text-[12px] sm:text-[14px] tracking-wider px-2 py-0.5 rounded-[2px] flex items-center">
                            HDFC BANK
                        </div>
                    </div>

                    {/* SWIGGY */}
                    <div className="flex items-center gap-2 font-black text-xl md:text-[25px] text-[#FC8019] tracking-tight hover:scale-105 transition-transform cursor-pointer select-none">
                        <svg className="w-6 h-7 md:w-7 md:h-8 flex-shrink-0" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0 C 5.4 0, 0 5.4, 0 12 C 0 20, 12 28, 12 28 C 12 28, 24 20, 24 12 C 24 5.4, 18.6 0, 12 0 Z" fill="#FC8019" />
                            <path d="M15 8 C 12 7, 9 9, 8 11.5 C 7.5 13, 9 14, 11 14.5 C 13 15, 14 16, 13 17.5 C 12 19, 9 18.5, 7.5 17" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
                        </svg>
                        <span>SWIGGY</span>
                    </div>

                    {/* DECATHLON */}
                    <div className="font-extrabold text-2xl md:text-[27px] text-[#0055A5] tracking-tight font-heading hover:scale-105 transition-transform cursor-pointer select-none">
                        DECATHLON
                    </div>

                    {/* NYKAA */}
                    <div className="font-black text-2xl md:text-[29px] text-[#E50046] italic tracking-tighter hover:scale-105 transition-transform cursor-pointer select-none">
                        NYKAA
                    </div>

                    {/* digit */}
                    <div className="font-black text-2xl md:text-[30px] text-slate-950 tracking-tighter lowercase flex items-center hover:scale-105 transition-transform cursor-pointer select-none">
                        d<span className="relative inline-flex flex-col items-center">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF6B00] rounded-full absolute -top-1"></span>
                            <span>i</span>
                        </span>git
                    </div>

                    {/* traveloka */}
                    <div className="flex items-center gap-1 font-bold text-xl md:text-[25px] text-[#1BA0E2] tracking-tight hover:scale-105 transition-transform cursor-pointer select-none">
                        <span>traveloka</span>
                        <svg className="w-5 h-5 md:w-6 md:h-6 -mt-3 -ml-0.5 text-[#1BA0E2] fill-current" viewBox="0 0 24 24">
                            <path d="M21 4 C 18 6, 15 9, 12 11 C 9 13, 6 16, 3 20 C 7 18, 11 16, 16 13 C 18 12, 20 8, 21 4 Z" />
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustedCompanies;

