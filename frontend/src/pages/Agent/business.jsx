import React, { useState } from "react";

const Business = () => {
    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem("conveza_business");
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Error parsing conveza_business", e);
            }
        }
        return {
            companyName: "Conveza Organic Threads",
            industry: "E-Commerce",
            website: "https://convezathreads.com",
            email: "support@convezathreads.com",
            phone: "+91 98765 43210",
            address: "Hyderabad, India",
            description: "We sell high-quality, eco-friendly organic apparel online. We are known for our soft organic cotton t-shirts and summer dresses, and we offer free shipping on orders over $50.",
        };
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSave = () => {
        localStorage.setItem("conveza_business", JSON.stringify(formData));
        console.log("Business Details:", formData);
        alert("Business details saved successfully!");
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="bg-white rounded-xl shadow-lg p-6">

                <h1 className="text-3xl font-bold mb-2">
                    Business Profile
                </h1>

                <p className="text-gray-500 mb-6">
                    Add your business information to help Conveza AI understand your company.
                </p>

                <div className="grid md:grid-cols-2 gap-5">

                    <div>
                        <label className="block mb-2 font-medium">
                            Company Name
                        </label>

                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="ABC Technologies"
                            className="w-full border rounded-lg p-3 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Industry
                        </label>

                        <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >
                            <option value="">Select Industry</option>
                            <option>Education</option>
                            <option>E-Commerce</option>
                            <option>Healthcare</option>
                            <option>Finance</option>
                            <option>Technology</option>
                            <option>Real Estate</option>
                            <option>Travel</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Website
                        </label>

                        <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://example.com"
                            className="w-full border rounded-lg p-3 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="info@example.com"
                            className="w-full border rounded-lg p-3 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Phone
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 9876543210"
                            className="w-full border rounded-lg p-3 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Address
                        </label>

                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Hyderabad, India"
                            className="w-full border rounded-lg p-3 outline-none"
                        />
                    </div>

                </div>

                <div className="mt-5">

                    <label className="block mb-2 font-medium">
                        Business Description
                    </label>

                    <textarea
                        rows="5"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your business, products and services..."
                        className="w-full border rounded-lg p-3 outline-none"
                    />

                </div>

                <div className="flex justify-end mt-6">

                    <button
                        onClick={handleSave}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
                    >
                        Save Business
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Business;