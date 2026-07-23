import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/marketing/Home/Hero";
import Features from "./pages/marketing/Home/Features";
import Solutions from "./pages/marketing/Home/Solutions";
import Pricing from "./pages/marketing/Home/Pricing";
import Customers from "./pages/marketing/Home/Customers";
import Resources from "./pages/marketing/Home/Resources";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/features" element={<Features />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;