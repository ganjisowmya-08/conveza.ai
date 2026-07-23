import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CustomerRoutes from "./routes/CustomerRoutes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <CustomerRoutes />
        </BrowserRouter>
    </React.StrictMode>
);