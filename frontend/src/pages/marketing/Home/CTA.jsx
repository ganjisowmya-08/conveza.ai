import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="py-24 bg-white px-8">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-primary/90 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/90/20">
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/100/20 rounded-full blur-[100px]" />

                <div className="relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Ready to automate your <br/> WhatsApp revenue?
                    </h1>
                    <p className="text-xl text-primary/10 max-w-2xl mx-auto mb-10">
                        Join 10,000+ forward-thinking brands that use Conveza.AI to sell, support, and scale on autopilot.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/signup" className="px-10 py-5 rounded-full bg-accent text-white font-bold text-lg hover:bg-accent shadow-xl shadow-accent/40 transition-all transform hover:-translate-y-1">
                            Start Your 14-Day Free Trial
                        </Link>
                        <button className="px-10 py-5 rounded-full bg-white/10 text-white font-bold text-lg hover:bg-white/20 backdrop-blur-md transition-all">
                            Talk to Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
