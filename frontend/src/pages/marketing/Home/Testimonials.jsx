import React from "react";

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">Wall of Love</h2>
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">What Our Customers Say</h1>
                </div>

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
                                <div className="flex gap-1 text-green-500 mb-6">
                                    ★★★★★
                                </div>
                                <p className="text-gray-800 text-lg leading-relaxed font-medium mb-8">
                                    "{t.text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-white flex items-center justify-center font-bold text-xl shadow-inner">
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

export default Testimonials;
