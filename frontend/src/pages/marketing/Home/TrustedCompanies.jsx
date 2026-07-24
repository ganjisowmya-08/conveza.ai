import React from "react";

const TrustedCompanies = () => {
    return (
        <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 mb-6">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    Trusted by innovative teams worldwide
                </p>
            </div>
            
            <div className="relative flex overflow-x-hidden group">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                
                <div className="animate-marquee whitespace-nowrap flex items-center gap-24 opacity-40 hover:opacity-70 transition-opacity">
                    <span className="text-3xl font-extrabold text-gray-400">AcmeCorp</span>
                    <span className="text-3xl font-extrabold text-gray-400">GlobalRetail</span>
                    <span className="text-3xl font-extrabold text-gray-400">TechNova</span>
                    <span className="text-3xl font-extrabold text-gray-400">Pioneer</span>
                    <span className="text-3xl font-extrabold text-gray-400">Nexus</span>
                    <span className="text-3xl font-extrabold text-gray-400">Synergy</span>
                    <span className="text-3xl font-extrabold text-gray-400">AcmeCorp</span>
                    <span className="text-3xl font-extrabold text-gray-400">GlobalRetail</span>
                    <span className="text-3xl font-extrabold text-gray-400">TechNova</span>
                </div>
            </div>
        </section>
    );
};

export default TrustedCompanies;
