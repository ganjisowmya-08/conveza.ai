import React, { useState } from "react";

const Knowledge = () => {
    const [knowledge, setKnowledge] = useState(() => {
        const saved = localStorage.getItem("conveza_knowledge");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Error parsing conveza_knowledge", e);
            }
        }
        return {
            website: "https://convezathreads.com/collections",
            faq: "Q: What is your return policy?\nA: We offer free returns and exchanges within 30 days of delivery.\n\nQ: How long does shipping take?\nA: Orders are processed in 1-2 days. Standard shipping takes 3-5 business days.",
            products: "• Classic Organic T-Shirt: $25 (Colors: Sage Green, Navy, Oatmeal)\n• Eco Summer Floral Dress: $49 (Sizes: XS, S, M, L)",
            instructions: "• Help customers choose the right color/size of T-shirt.\n• Always direct users to checkout when they decide on a product.",
        };
    });

    const [pdfFile, setPdfFile] = useState(null);

    const handleChange = (e) => {
        setKnowledge((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0]);
    };

    const handleSave = () => {
        localStorage.setItem("conveza_knowledge", JSON.stringify(knowledge));
        console.log({
            ...knowledge,
            pdf: pdfFile,
        });

        alert("Knowledge Base Saved Successfully!");
    };

    return (
        <div className="max-w-5xl mx-auto p-6">

            <div className="bg-white rounded-xl shadow-lg p-6">

                <h1 className="text-3xl font-bold mb-2">
                    Knowledge Base
                </h1>

                <p className="text-gray-500 mb-6">
                    Train your Conveza AI using your business website, PDFs,
                    FAQs and product information.
                </p>

                {/* Website */}

                <div className="mb-5">

                    <label className="block mb-2 font-medium">
                        Website URL
                    </label>

                    <input
                        type="url"
                        name="website"
                        value={knowledge.website}
                        onChange={handleChange}
                        placeholder="https://yourcompany.com"
                        className="w-full border rounded-lg p-3 outline-none"
                    />

                </div>

                {/* PDF Upload */}

                <div className="mb-5">

                    <label className="block mb-2 font-medium">
                        Upload PDF
                    </label>

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="w-full border rounded-lg p-3"
                    />

                    {pdfFile && (
                        <p className="text-green-600 mt-2">
                            Selected File: {pdfFile.name}
                        </p>
                    )}

                </div>

                {/* FAQs */}

                <div className="mb-5">

                    <label className="block mb-2 font-medium">
                        Frequently Asked Questions
                    </label>

                    <textarea
                        rows="5"
                        name="faq"
                        value={knowledge.faq}
                        onChange={handleChange}
                        placeholder="Example:
Q: What are your working hours?
A: Monday to Saturday, 9 AM to 7 PM."
                        className="w-full border rounded-lg p-3 outline-none"
                    />

                </div>

                {/* Products */}

                <div className="mb-5">

                    <label className="block mb-2 font-medium">
                        Products & Services
                    </label>

                    <textarea
                        rows="5"
                        name="products"
                        value={knowledge.products}
                        onChange={handleChange}
                        placeholder="Describe your products and services..."
                        className="w-full border rounded-lg p-3 outline-none"
                    />

                </div>

                {/* Instructions */}

                <div className="mb-5">

                    <label className="block mb-2 font-medium">
                        AI Instructions
                    </label>

                    <textarea
                        rows="6"
                        name="instructions"
                        value={knowledge.instructions}
                        onChange={handleChange}
                        placeholder="Example:
• Always greet customers politely.
• Answer only using business information.
• If unsure, ask the customer to contact support."
                        className="w-full border rounded-lg p-3 outline-none"
                    />

                </div>

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={() => {
                            setKnowledge({
                                website: "",
                                faq: "",
                                products: "",
                                instructions: "",
                            });
                            setPdfFile(null);
                        }}
                        className="border px-5 py-2 rounded-lg"
                    >
                        Reset
                    </button>

                    <button
                        onClick={handleSave}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
                    >
                        Save Knowledge
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Knowledge;