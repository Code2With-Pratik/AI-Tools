import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { CreditProvider } from "@/context/CreditContext";
import App from "./App";
import "./index.css";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkKey}>
        <CreditProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CreditProvider>
    </ClerkProvider>
  </React.StrictMode>
);
