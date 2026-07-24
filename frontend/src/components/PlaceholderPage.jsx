import React from "react";
import { Link } from "react-router-dom";

const PlaceholderPage = ({ title }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-600 mb-8">This is the {title} page placeholder.</p>
            <Link to="/" className="text-primary hover:underline">&larr; Back to Home</Link>
        </div>
    );
};

export default PlaceholderPage;
