import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] bg-white overflow-hidden flex items-center">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left */}
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary/90 font-semibold text-sm mb-8 shadow-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                        Next-Gen WhatsApp AI Revenue Engine
                    </div>

                    <h1 className="text-6xl font-heading font-extrabold mt-4 leading-[1.1] text-gray-900 tracking-tight">
                        Turn WhatsApp into your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Smartest Sales Agent
                        </span>
                    </h1>

                    <p className="mt-8 text-xl text-gray-600 leading-relaxed font-medium">
                        Stop using basic chatbots. Conveza.AI deploys autonomous agents, runs Click-to-WhatsApp ads, and drives revenue while you sleep.
                    </p>

                    <div className="flex gap-4 mt-10">
                        <Link to="/signup" className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 shadow-xl shadow-accent/30 transition-all transform hover:-translate-y-1">
                            Start Free Trial
                        </Link>
                        <button className="px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 font-bold hover:border-gray-300 hover:bg-gray-50 shadow-sm transition-all">
                            Book a Demo
                        </button>
                    </div>

                    <div className="flex items-center gap-6 mt-12 text-sm font-semibold text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            No credit card required
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            14-day free trial
                        </div>
                    </div>
                </div>

                {/* Right Floating Dashboard Mockup */}
                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/10 rounded-[3rem] transform rotate-3 scale-105" />
                    
                    {/* Main UI Card */}
                    <div className="relative bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-lg z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">🤖</div>
                            <div>
                                <h3 className="font-bold text-gray-900">AI Sales Agent</h3>
                                <p className="text-sm text-primary font-medium">Online & Engaging</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-2xl p-4 rounded-tl-none w-[80%] text-sm text-gray-600">
                                Hi there! Looking for our new summer collection?
                            </div>
                            <div className="bg-primary text-white rounded-2xl p-4 rounded-tr-none w-[80%] ml-auto text-sm">
                                Yes, do you have the floral dress in a Medium?
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-4 rounded-tl-none w-[85%] text-sm text-gray-600 flex flex-col gap-3">
                                We sure do! Here it is. Would you like to checkout now?
                                <button className="bg-white text-primary border border-primary/20 py-2 rounded-lg font-bold shadow-sm">
                                    Buy Now - $49
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Floating Element 1 */}
                    <div className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">↑</div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">Conversion Rate</p>
                                <p className="font-bold text-gray-900">+42.8%</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Element 2 */}
                    <div className="absolute -left-12 bottom-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">📱</div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">Ad Campaign</p>
                                <p className="font-bold text-gray-900">Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;