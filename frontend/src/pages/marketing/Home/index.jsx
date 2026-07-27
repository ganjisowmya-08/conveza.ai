import React from "react";
import Hero from "./Hero";
import TrustedCompanies from "./TrustedCompanies";
import Benefits from "./Benefits";
import Features from "./Features";
import Integrations from "./Integrations";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

export default function Home() {
    return (
        <div className="flex flex-col bg-white overflow-x-hidden">
            <Hero />
            <TrustedCompanies />
            <Benefits />
            <Features />
            <Integrations />
            <Pricing />
            <Testimonials />
            <FAQ />
        </div>
    );
}
