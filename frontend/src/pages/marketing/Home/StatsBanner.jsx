import React from "react";

const StatsBanner = () => {
    return (
        <section className="py-12 bg-[#fcfcfd] font-sans">
            <div className="container-custom">
                <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white shadow-2xl shadow-primary/20 flex flex-wrap justify-between items-center gap-8">
                    
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl border border-white/20">
                            👥
                        </div>
                        <div>
                            <div className="text-2xl font-mono font-bold">2,500+</div>
                            <div className="text-[13px] text-white/80 font-medium">Happy Customers</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl border border-white/20">
                            ✉️
                        </div>
                        <div>
                            <div className="text-2xl font-mono font-bold">20M+</div>
                            <div className="text-[13px] text-white/80 font-medium">Messages Delivered</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl border border-white/20">
                            🎯
                        </div>
                        <div>
                            <div className="text-2xl font-mono font-bold">98.5%</div>
                            <div className="text-[13px] text-white/80 font-medium">Delivery Rate</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl border border-white/20">
                            ⭐
                        </div>
                        <div>
                            <div className="text-2xl font-mono font-bold">4.9/5</div>
                            <div className="text-[13px] text-white/80 font-medium">Customer Rating</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl border border-white/20">
                            🎧
                        </div>
                        <div>
                            <div className="text-2xl font-mono font-bold">24/7</div>
                            <div className="text-[13px] text-white/80 font-medium">Customer Support</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StatsBanner;
