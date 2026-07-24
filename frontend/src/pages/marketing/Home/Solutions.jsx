import React from "react";

const Solutions = () => {
    const solutions = [
        { title: "E-Commerce", desc: "Recover abandoned carts, send order updates, and promote sales directly on WhatsApp.", img: "🛍️" },
        { title: "Real Estate", desc: "Schedule property visits and share catalogs with interested buyers instantly.", img: "🏠" },
        { title: "Healthcare", desc: "Automate appointment reminders, share test results securely, and handle FAQs.", img: "⚕️" },
        { title: "Education", desc: "Send fee reminders, event updates, and course materials to students.", img: "🎓" }
    ];

    return (
        <section className="min-h-screen bg-white py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Tailored Solutions for Your Industry</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover how Conveza.AI transforms customer engagement across various sectors.</p>
                </div>
                <div className="space-y-16">
                    {solutions.map((sol, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 bg-primary/5 rounded-3xl p-20 text-center text-8xl shadow-inner">
                                {sol.img}
                            </div>
                            <div className="flex-1 space-y-6">
                                <h2 className="text-4xl font-bold text-gray-900">{sol.title}</h2>
                                <p className="text-xl text-gray-600 leading-relaxed">{sol.desc}</p>
                                <button className="text-primary font-bold text-lg hover:underline flex items-center gap-2">
                                    Learn more about {sol.title} &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
