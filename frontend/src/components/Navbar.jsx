import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all font-sans h-[88px] flex items-center">
            <nav className="container-custom flex items-center justify-between py-4">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
                        C
                    </div>
                    <span className="font-extrabold font-heading text-gray-900 text-xl tracking-tight group-hover:opacity-80 transition-opacity">
                        Conveza<span className="text-primary">.ai</span>
                    </span>
                </Link>

                <div className="hidden xl:flex items-center gap-7 font-semibold text-[15px] text-gray-600">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900 transition-colors">
                        Features <span className="text-[10px]">▼</span>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900 transition-colors">
                        Solutions <span className="text-[10px]">▼</span>
                    </div>
                    <Link to="/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900 transition-colors">
                        Resources <span className="text-[10px]">▼</span>
                    </div>
                    <Link to="/customers" className="hover:text-gray-900 transition-colors">Customers</Link>
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                    <Link to="/login" className="hidden sm:inline font-bold text-[15px] text-gray-700 hover:text-primary transition-colors">
                        Login
                    </Link>
                    <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
                        <Link to="/demo" className="hidden md:inline-flex items-center justify-center flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200 text-sm whitespace-nowrap">
                            Book Demo
                        </Link>
                        <Link to="/signup" className="inline-flex items-center justify-center flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-xl bg-accent text-gray-900 font-extrabold hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 text-sm whitespace-nowrap shadow-sm">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
