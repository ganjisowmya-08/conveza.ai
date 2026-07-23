import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
            <p className="text-gray-600 mb-8">This is the Sign Up page placeholder.</p>
            <Link to="/" className="text-green-600 hover:underline">&larr; Back to Home</Link>
        </div>
    );
};

export default SignUp;
