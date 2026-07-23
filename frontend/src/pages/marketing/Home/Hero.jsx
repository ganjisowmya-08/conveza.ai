import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
            {/* Navbar */}
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center font-bold text-xl">
                        C
                    </div>

                    <h1 className="text-2xl font-bold text-gray-800">
                        Conveza<span className="text-green-600">.AI</span>
                    </h1>
                </div>

                <div className="hidden lg:flex gap-8 text-gray-700 font-medium">
                    <a href="#">Features</a>
                    <a href="#">Solutions</a>
                    <a href="#">Pricing</a>
                    <a href="#">Customers</a>
                    <a href="#">Resources</a>
                </div>

                <div className="flex gap-4">
                    <Link
                        to="/login"
                        className="px-5 py-2 rounded-lg border border-green-600 text-green-600 hover:bg-green-50 flex items-center justify-center font-medium transition"
                    >
                        Login
                    </Link>

                    <button className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 font-medium transition">
                        Book Demo
                    </button>
                </div>
            </nav>

            {/* Hero Section */}

            <div className="max-w-7xl mx-auto px-8 pt-20 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left */}

                <div>

                    <p className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
                        🚀 WhatsApp Business Platform
                    </p>

                    <h1 className="text-6xl font-bold mt-8 leading-tight text-gray-900">
                        Grow Your Business with
                        <span className="text-green-600"> WhatsApp Marketing</span>
                    </h1>

                    <p className="mt-8 text-xl text-gray-600 leading-8">
                        Automate conversations, broadcast campaigns, capture leads,
                        integrate CRMs, and increase customer engagement from one
                        powerful dashboard.
                    </p>

                    <div className="flex gap-5 mt-10">
                        <Link
                            to="/signup"
                            className="px-8 py-4 bg-green-600 rounded-xl text-white font-semibold hover:bg-green-700 flex items-center justify-center transition"
                        >
                            Start Free Trial
                        </Link>

                        <button className="px-8 py-4 border rounded-xl border-gray-300 hover:bg-gray-100 font-semibold transition">
                            Watch Demo
                        </button>
                    </div>

                    <div className="flex gap-10 mt-12">

                        <div>
                            <h2 className="text-3xl font-bold">10K+</h2>
                            <p className="text-gray-500">Businesses</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold">99.9%</h2>
                            <p className="text-gray-500">Delivery Rate</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold">50M+</h2>
                            <p className="text-gray-500">Messages</p>
                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="relative">

                    <div className="rounded-3xl shadow-2xl bg-white p-6">

                        <img
                            src="https://placehold.co/700x500"
                            alt="Dashboard"
                            className="rounded-2xl"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;