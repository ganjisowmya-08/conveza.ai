import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
                    <div className="col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-accent/30">
                                C
                            </div>
                            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                                Conveza<span className="text-primary">.AI</span>
                            </h1>
                        </Link>
                        <p className="text-gray-500 mb-6 max-w-sm">
                            The next-generation AI revenue engine for WhatsApp Business. Automate sales and support without lifting a finger.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link to="/integrations" className="hover:text-primary transition-colors">Integrations</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link to="/changelog" className="hover:text-primary transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/security" className="hover:text-primary transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Conveza.AI. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-gray-400">
                        <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
