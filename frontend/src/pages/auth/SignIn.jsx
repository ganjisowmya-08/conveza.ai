import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold mb-4">Sign In</h1>
            <p className="text-gray-600 mb-8">This is the Sign In page placeholder.</p>
            <Link to="/" className="text-green-600 hover:underline">&larr; Back to Home</Link>
        </div>
    );
};

export default SignIn;
