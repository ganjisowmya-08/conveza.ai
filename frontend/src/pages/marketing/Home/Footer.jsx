import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-[#05030A] text-white pt-16 sm:pt-20 pb-12 font-sans w-full flex flex-col items-center border-t border-slate-900/80">
            <div className="container-custom max-w-[1240px] relative z-10 w-full" style={{ margin: "0 auto" }}>
                
                {/* 1. MAIN NAVIGATION GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 text-left">
                    
                    {/* LEFT BRAND COLUMN (4 spans) */}
                    <div className="lg:col-span-4 lg:pr-10">
                        {/* Logo & Name */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#6847BA] via-[#854EEA] to-[#A861FF] flex items-center justify-center font-black text-white text-lg shadow-[0_4px_15px_-2px_rgba(133,78,234,0.55)]">
                                C
                            </div>
                            <span className="text-2xl font-extrabold font-heading text-white tracking-tight">Conveza.ai</span>
                        </div>

                        {/* Brand Description */}
                        <p className="text-slate-400 text-xs sm:text-[14px] font-normal leading-[1.7] max-w-sm mb-8">
                            The AI-powered customer engagement platform for WhatsApp. Automate, engage and grow your business with intelligence.
                        </p>

                        {/* Social Media Circular Buttons */}
                        <div className="flex items-center gap-3.5">
                            {/* Facebook */}
                            <a 
                                href="#facebook" 
                                aria-label="Facebook" 
                                className="w-10 h-10 rounded-full bg-[#1A1624] hover:bg-[#6847BA] text-white flex items-center justify-center transition-all duration-200 cursor-pointer text-sm font-bold shadow-2xs hover:scale-105"
                            >
                                f
                            </a>
                            
                            {/* LinkedIn */}
                            <a 
                                href="#linkedin" 
                                aria-label="LinkedIn" 
                                className="w-10 h-10 rounded-full bg-[#1A1624] hover:bg-[#6847BA] text-white flex items-center justify-center transition-all duration-200 cursor-pointer text-sm font-bold shadow-2xs hover:scale-105"
                            >
                                in
                            </a>
                            
                            {/* Instagram */}
                            <a 
                                href="#instagram" 
                                aria-label="Instagram" 
                                className="w-10 h-10 rounded-full bg-[#1A1624] hover:bg-[#6847BA] text-white flex items-center justify-center transition-all duration-200 cursor-pointer text-sm shadow-2xs hover:scale-105"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            
                            {/* YouTube */}
                            <a 
                                href="#youtube" 
                                aria-label="YouTube" 
                                className="w-10 h-10 rounded-full bg-[#1A1624] hover:bg-[#6847BA] text-white flex items-center justify-center transition-all duration-200 cursor-pointer text-sm shadow-2xs hover:scale-105"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* COLUMN 1: PRODUCT (2 spans) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-extrabold font-heading text-[12px] sm:text-[13px] text-[#9A7AFF] tracking-[0.22em] uppercase mb-6">
                            PRODUCT
                        </h4>
                        <ul className="space-y-3 sm:space-y-3.5">
                            <li><Link to="/features" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Features</Link></li>
                            <li><Link to="/integrations" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Integrations</Link></li>
                            <li><Link to="/pricing" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Pricing</Link></li>
                            <li><Link to="/changelog" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Changelog</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 2: SOLUTION (2 spans) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-extrabold font-heading text-[12px] sm:text-[13px] text-[#9A7AFF] tracking-[0.22em] uppercase mb-6">
                            SOLUTION
                        </h4>
                        <ul className="space-y-3 sm:space-y-3.5">
                            <li><Link to="/solutions/marketing" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Marketing</Link></li>
                            <li><Link to="/solutions/sales" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Sales</Link></li>
                            <li><Link to="/solutions/support" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Support</Link></li>
                            <li><Link to="/solutions/ecommerce" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">E-commerce</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 3: RESOURCES (2 spans) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-extrabold font-heading text-[12px] sm:text-[13px] text-[#9A7AFF] tracking-[0.22em] uppercase mb-6">
                            RESOURCES
                        </h4>
                        <ul className="space-y-3 sm:space-y-3.5">
                            <li><Link to="/blog" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Blog</Link></li>
                            <li><Link to="/guides" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Guides</Link></li>
                            <li><Link to="/use-cases" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Use Cases</Link></li>
                            <li><Link to="/webinars" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Webinars</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 4: COMPANY (2 spans) */}
                    <div className="lg:col-span-2">
                        <h4 className="font-extrabold font-heading text-[12px] sm:text-[13px] text-[#9A7AFF] tracking-[0.22em] uppercase mb-6">
                            COMPANY
                        </h4>
                        <ul className="space-y-3 sm:space-y-3.5">
                            <li><Link to="/about" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">About Us</Link></li>
                            <li><Link to="/careers" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Careers</Link></li>
                            <li><Link to="/contact" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-slate-300 hover:text-white text-[14px] sm:text-[15px] font-normal transition-colors block">Privacy Policy</Link></li>
                        </ul>
                    </div>

                </div>

                {/* 2. BOTTOM COPYRIGHT & BACK TO TOP BAR */}
                <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Left: Copyright text */}
                    <div className="text-slate-500 text-xs sm:text-[13.5px] font-normal text-center sm:text-left">
                        © 2025 Conveza.ai. All rights reserved.
                    </div>
                    
                    {/* Right: AI Tag & Back to Top button */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2 text-xs sm:text-[13.5px] font-medium text-slate-300">
                            <span className="text-[#9A75FF] select-none">✦</span>
                            <span>Built for growth. <strong className="text-[#9D76FF] font-extrabold">Powered by AI.</strong></span>
                        </div>

                        {/* Back to Top Purple Arrow Button */}
                        <button 
                            onClick={scrollToTop}
                            className="w-10 h-10 rounded-xl bg-[#6847BA] hover:bg-[#7D52DC] text-white flex items-center justify-center ml-2 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex-shrink-0"
                            aria-label="Back to top"
                        >
                            <svg className="w-5 h-5 font-bold text-white" fill="none" stroke="currentColor" strokeWidth="2.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 19V5" />
                                <polyline points="5 12 12 5 19 12" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
