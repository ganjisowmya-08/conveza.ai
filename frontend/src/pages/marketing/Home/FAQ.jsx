import React, { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How is Conveza.AI different from basic WhatsApp bots?",
            answer: "Unlike traditional flow-builders that force users into strict menus, Conveza uses true Generative AI. It understands natural language, context, and typos, providing human-like responses to close sales and resolve issues autonomously."
        },
        {
            question: "Do I need coding skills to train the AI?",
            answer: "Absolutely not. You can train your AI agent simply by uploading your PDF documents, entering your website URL, or linking your product catalog. The AI learns everything instantly in 1 click."
        },
        {
            question: "Can human agents take over the conversation?",
            answer: "Yes! Our Shared Inbox 2.0 allows human agents to seamlessly jump into any AI conversation. The AI will even draft suggested responses for your humans to approve to save time."
        },
        {
            question: "Are there any hidden costs per message?",
            answer: "We charge a flat platform fee that includes a massive allowance of AI messages. Official Meta API conversation costs are billed separately at cost, with no markup from us."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">FAQ</h2>
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Got Questions?</h1>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div 
                            key={i} 
                            className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === i ? 'border-green-500 bg-green-50/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                        >
                            <button 
                                className="w-full text-left px-6 py-5 flex justify-between items-center font-bold text-lg text-gray-900"
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                            >
                                {faq.question}
                                <span className={`transform transition-transform text-green-600 ${openIndex === i ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            {openIndex === i && (
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
