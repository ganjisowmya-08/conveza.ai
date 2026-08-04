import React from "react";
import Hero from "./Hero";
import ChatWidget from "../../../components/common/ChatWidget";

export default function Home() {
    return (
        <div className="relative min-h-screen">
            <Hero />
            <ChatWidget />
        </div>
    );
}
