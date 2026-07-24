import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-md transition-all">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-all">
                        C
                    </div>
                    <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                        Conveza<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">.AI</span>
                    </h1>
                </Link>

                <div className="hidden lg:flex gap-8 text-sm font-semibold text-gray-600">
                    <Link to="/features" className="hover:text-primary transition-colors">Features</Link>
                    <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
                    <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                    <Link to="/customers" className="hover:text-primary transition-colors">Customers</Link>
                    <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
                </div>

                <div className="flex gap-4 items-center">
                    <Link to="/signin" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                        Sign In
                    </Link>
                    <Link to="/signup" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
                        Sign Up
                    </Link>
                    <button className="px-5 py-2.5 text-sm font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-accent/30 transition-all transform hover:-translate-y-0.5">
                        Book Demo
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
