import React from "react";
import Hero from "./Hero";
import TrustedCompanies from "./TrustedCompanies";
import Features from "./Features";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import DashboardPreview from "./DashboardPreview";
import Integrations from "./Integrations";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
            <Hero />
            <TrustedCompanies />
            <Features />
            <Benefits />
            <HowItWorks />
            <DashboardPreview />
            <Integrations />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    );
}
