import { useState } from "react";
import { 
    Building2, 
    Globe, 
    Mail, 
    Phone, 
    MapPin, 
    FileText, 
    Save, 
    RotateCcw, 
    Sparkles, 
    Bot 
} from "lucide-react";

export default function Business() {
    const [business, setBusiness] = useState({
        companyName: "",
        industry: "",
        website: "",
        email: "",
        phone: "",
        address: "",
        description: "",
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBusiness((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset the form? All unsaved changes will be lost.")) {
            setBusiness({
                companyName: "",
                industry: "",
                website: "",
                email: "",
                phone: "",
                address: "",
                description: "",
            });
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        setIsSaving(true);
        
        // Mock API call delay
        setTimeout(() => {
            setIsSaving(false);
            console.log("Saved Business Profile:", business);
            alert("Business Profile Saved and AI Agent updated successfully! 🚀");
        }, 1000);
    };

    // Calculate completion progress
    const fields = Object.values(business);
    const filledFields = fields.filter((field) => field.trim() !== "").length;
    const progressPercent = Math.round((filledFields / fields.length) * 100);

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <div className="flex items-center gap-2 text-green-600 font-semibold text-sm mb-1">
                        <Bot size={16} className="animate-pulse" />
                        <span>Agent Configuration</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Business Profile
                    </h1>
                    <p className="text-gray-500 mt-1 max-w-2xl text-sm leading-relaxed">
                        Provide your business details. Conveza AI uses this context to automatically answer queries, direct customers, and represent your brand accurately.
                    </p>
                </div>

                {/* Progress bar card */}
                <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 min-w-[200px]">
                    <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1">
                        <span>Profile Completion</span>
                        <span className="text-green-600 font-bold">{progressPercent}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div 
                            className="bg-green-600 h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Column */}
                <div className="lg:col-span-2">
                    <form onSubmit={handleSave} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 md:p-8 space-y-6">
                            
                            {/* Company Name & Industry */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                        <Building2 size={14} className="text-gray-400" />
                                        Company Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        required
                                        value={business.companyName}
                                        onChange={handleChange}
                                        placeholder="e.g. Acme Corp"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50/50 focus:bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                        <Sparkles size={14} className="text-gray-400" />
                                        Industry <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="industry"
                                        required
                                        value={business.industry}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50/50 focus:bg-white appearance-none"
                                    >
                                        <option value="">Select Industry</option>
                                        <option value="E-Commerce">E-Commerce & Retail</option>
                                        <option value="Education">Education & E-Learning</option>
                                        <option value="Healthcare">Healthcare & Wellness</option>
                                        <option value="Finance">Finance & Banking</option>
                                        <option value="Real Estate">Real Estate</option>
                                        <option value="Travel">Travel & Hospitality</option>
                                        <option value="Technology">Technology & SaaS</option>
                                        <option value="Restaurant">Restaurant & Food Service</option>
                                        <option value="Other">Other Business</option>
                                    </select>
                                </div>
                            </div>

                            {/* Website & Contact Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                        <Globe size={14} className="text-gray-400" />
                                        Website URL
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={business.website}
                                        onChange={handleChange}
                                        placeholder="https://example.com"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50/50 focus:bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                        <Mail size={14} className="text-gray-400" />
                                        Support Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={business.email}
                                        onChange={handleChange}
                                        placeholder="support@company.com"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50/50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            {/* Phone & Address */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                        <Phone size={14} className="text-gray-400" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={business.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50/50 focus:bg-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                        <MapPin size={14} className="text-gray-400" />
                                        Business Address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={business.address}
                                        onChange={handleChange}
                                        placeholder="123 Main St, Suite 400"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50/50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                    <FileText size={14} className="text-gray-400" />
                                    Business Description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="description"
                                    required
                                    rows={5}
                                    value={business.description}
                                    onChange={handleChange}
                                    placeholder="Describe your company, key offerings, refund policies, FAQs, or any specific knowledge you want the AI agent to know..."
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-gray-50/50 focus:bg-white resize-none"
                                />
                                <p className="text-xs text-gray-400 mt-1">
                                    Be descriptive. The more details you provide, the smarter and more precise the agent will be.
                                </p>
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="bg-gray-50 px-6 py-4 md:px-8 md:py-6 border-t border-gray-100 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={handleReset}
                                className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-800 transition px-4 py-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100"
                            >
                                <RotateCcw size={16} />
                                Reset Form
                            </button>

                            <button
                                type="submit"
                                disabled={isSaving}
                                className="flex items-center gap-2 text-sm font-bold text-white bg-green-600 hover:bg-green-700 active:bg-green-800 transition px-6 py-2.5 rounded-xl shadow-sm hover:shadow disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSaving ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save size={16} />
                                        Save & Sync Agent
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                {/* AI Agent Persona Preview Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-2xl shadow-lg border border-transparent p-6 sticky top-8">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <Bot size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">AI Agent Preview</h3>
                                <p className="text-white/70 text-xs">Real-time persona projection</p>
                            </div>
                        </div>

                        <hr className="border-white/10 my-4" />

                        <div className="space-y-4">
                            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Greeting Persona</span>
                                <p className="text-sm mt-1 leading-relaxed font-sans">
                                    "{business.companyName ? `Hello! Thanks for reaching out to ${business.companyName}.` : "Hello! Welcome to our service."} How can I assist you today?"
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                                <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider">Knowledge Base Summary</span>
                                <p className="text-sm mt-1 leading-relaxed font-sans italic text-white/90">
                                    {business.description 
                                        ? business.description.length > 120 
                                            ? `${business.description.slice(0, 120)}...` 
                                            : business.description
                                        : "Waiting for business description details..."
                                    }
                                </p>
                            </div>

                            {/* Contact Details projection */}
                            <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-2">
                                <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider block">Agent Action Table</span>
                                <div className="text-xs space-y-1.5">
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Target Industry:</span>
                                        <span className="font-semibold">{business.industry || "Not set"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Location Routing:</span>
                                        <span className="font-semibold truncate max-w-[120px]">{business.address || "Not set"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Website Handshake:</span>
                                        <span className="font-semibold truncate max-w-[120px]">{business.website || "Not set"}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Fallback Escalation:</span>
                                        <span className="font-semibold truncate max-w-[120px]">{business.email || business.phone || "Not set"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-3 bg-white/10 rounded-xl flex items-center gap-3">
                            <Sparkles size={18} className="text-green-300 animate-pulse flex-shrink-0" />
                            <p className="text-xs text-white/80 leading-snug">
                                As you change the form values on the left, the agent's knowledge graph adapts instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}