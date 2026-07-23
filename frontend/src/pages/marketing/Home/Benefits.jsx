import React from "react";

const Benefits = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-20">
                    <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">The Conveza Advantage</h2>
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Massive ROI, Zero Effort</h1>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Benefit 1 */}
                    <div className="p-8 rounded-3xl bg-green-50 border border-green-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-5xl font-extrabold text-green-600 mb-4">3x</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Higher Conversion Rates</h3>
                        <p className="text-gray-600 text-sm">Compared to traditional email marketing. Reach customers where they actually spend their time.</p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="text-5xl font-extrabold text-emerald-600 mb-4">80%</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Reduction in Support Costs</h3>
                        <p className="text-gray-600 text-sm">Our AI agents handle the bulk of tier-1 support queries instantly, without human intervention.</p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="p-8 rounded-3xl bg-gray-900 text-white flex flex-col items-center text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent pointer-events-none" />
                        <div className="relative z-10">
                            <div className="text-5xl font-extrabold text-green-400 mb-4">24/7</div>
                            <h3 className="text-xl font-bold mb-3">Autonomous Selling</h3>
                            <p className="text-gray-400 text-sm">Your AI sales agent never sleeps. Close deals and capture leads even on weekends and holidays.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
