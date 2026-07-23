import React from "react";

const Resources = () => {
    const resources = [
        { category: "Guide", title: "The Ultimate Guide to WhatsApp Marketing in 2024", readTime: "8 min read" },
        { category: "Webinar", title: "Mastering Automated Workflows for E-Commerce", readTime: "Watch now" },
        { category: "Case Study", title: "How BrandCorp Increased Sales by 30% via WhatsApp", readTime: "5 min read" },
        { category: "Documentation", title: "Getting Started with the Conveza.AI API", readTime: "Docs" },
        { category: "Blog", title: "5 Best Practices for Broadcast Campaigns", readTime: "4 min read" },
        { category: "Blog", title: "Integrating your CRM with WhatsApp Business", readTime: "6 min read" }
    ];

    return (
        <section className="min-h-screen bg-gray-50 py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Resources & Knowledge Base</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to learn, build, and scale your customer engagement strategy.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((res, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group">
                            <div className="h-48 bg-gray-200 group-hover:bg-green-100 transition-colors flex items-center justify-center text-4xl">
                                📚
                            </div>
                            <div className="p-6">
                                <span className="text-sm font-bold text-green-600 uppercase tracking-wider">{res.category}</span>
                                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">{res.title}</h3>
                                <p className="text-gray-500 text-sm">{res.readTime}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
