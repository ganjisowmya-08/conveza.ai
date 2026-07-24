import React from "react";

const DashboardPreview = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">The Platform</h2>
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Everything in One Place</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Manage conversations, analyze campaign performance, and oversee your AI agents from a beautifully designed command center.
                    </p>
                </div>

                <div className="relative rounded-[2.5rem] bg-gray-900 p-4 md:p-8 shadow-2xl overflow-hidden ring-1 ring-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent pointer-events-none" />
                    
                    {/* Mockup Window */}
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                        {/* Browser Header */}
                        <div className="h-12 bg-gray-100 flex items-center px-4 gap-2 border-b border-gray-200">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-accent"></div>
                            <div className="ml-4 flex-1">
                                <div className="h-6 w-full max-w-md bg-white rounded-md mx-auto"></div>
                            </div>
                        </div>
                        
                        {/* Dashboard Body */}
                        <div className="flex h-[500px]">
                            {/* Sidebar */}
                            <div className="w-64 bg-gray-50 border-r border-gray-200 p-6 hidden md:block">
                                <div className="w-32 h-8 bg-gray-200 rounded-lg mb-10"></div>
                                <div className="space-y-4">
                                    <div className="h-10 bg-primary/10 rounded-lg"></div>
                                    <div className="h-10 bg-gray-200 rounded-lg"></div>
                                    <div className="h-10 bg-gray-200 rounded-lg"></div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 p-8 bg-white flex flex-col">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="w-48 h-10 bg-gray-200 rounded-lg"></div>
                                    <div className="w-32 h-10 bg-primary rounded-lg"></div>
                                </div>

                                <div className="grid grid-cols-3 gap-6 mb-8">
                                    <div className="h-32 bg-gray-50 rounded-2xl border border-gray-100 p-4">
                                        <div className="w-20 h-6 bg-gray-200 rounded mb-4"></div>
                                        <div className="w-32 h-10 bg-primary/10 rounded"></div>
                                    </div>
                                    <div className="h-32 bg-gray-50 rounded-2xl border border-gray-100 p-4">
                                        <div className="w-20 h-6 bg-gray-200 rounded mb-4"></div>
                                        <div className="w-32 h-10 bg-blue-100 rounded"></div>
                                    </div>
                                    <div className="h-32 bg-gray-50 rounded-2xl border border-gray-100 p-4">
                                        <div className="w-20 h-6 bg-gray-200 rounded mb-4"></div>
                                        <div className="w-32 h-10 bg-purple-100 rounded"></div>
                                    </div>
                                </div>

                                <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;
