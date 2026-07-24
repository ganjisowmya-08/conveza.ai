import React from "react";

const Customers = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Wall of Love</h2>
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Trusted by Industry Leaders</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See why top brands are ditching legacy marketing platforms for Conveza.AI.
                    </p>
                </div>

                {/* CSS Marquee Logo Cloud */}
                <div className="relative flex overflow-x-hidden group mb-32 bg-white py-10 border-y border-gray-100">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                    
                    <div className="animate-marquee whitespace-nowrap flex items-center gap-24 opacity-50">
                        <span className="text-4xl font-extrabold text-gray-400">AcmeCorp</span>
                        <span className="text-4xl font-extrabold text-gray-400">GlobalRetail</span>
                        <span className="text-4xl font-extrabold text-gray-400">TechNova</span>
                        <span className="text-4xl font-extrabold text-gray-400">Pioneer</span>
                        <span className="text-4xl font-extrabold text-gray-400">Nexus</span>
                        <span className="text-4xl font-extrabold text-gray-400">Synergy</span>
                        <span className="text-4xl font-extrabold text-gray-400">AcmeCorp</span>
                        <span className="text-4xl font-extrabold text-gray-400">GlobalRetail</span>
                        <span className="text-4xl font-extrabold text-gray-400">TechNova</span>
                    </div>
                </div>

                {/* X-style Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            name: "Sarah Jenkins",
                            role: "VP Marketing @ GlobalRetail",
                            text: "We switched from AiSensy to Conveza.AI last month. The Gen-AI chatbots are on another level. Our conversion rates from WhatsApp are up 45%.",
                            initial: "S"
                        },
                        {
                            name: "David Chen",
                            role: "Founder @ TechNova",
                            text: "The 1-Click Ads Manager is a game changer. We launch Meta ads directly from Conveza, and the AI agent instantly closes the leads. Literal magic. 🚀",
                            initial: "D"
                        },
                        {
                            name: "Elena Rodriguez",
                            role: "Head of Support @ Synergy",
                            text: "I was skeptical about AI support, but Conveza's agent actually understands context. It resolved 80% of our tier-1 tickets on day one.",
                            initial: "E"
                        }
                    ].map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 text-accent mb-6">
                                    ★★★★★
                                </div>
                                <p className="text-gray-800 text-lg leading-relaxed font-medium mb-8">
                                    "{t.text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-accent to-accent text-white flex items-center justify-center font-bold text-xl shadow-inner">
                                    {t.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customers;
