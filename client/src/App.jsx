import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import HomeLayout from "./layouts/HomeLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./app/home/Home";
import Dashboard from "./app/dashboard/Dashboard";
import SignInPage from "./app/auth/SignIn";
import SignUpPage from "./app/auth/SignUp";

export default function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      {/* PROTECTED ROUTES */}
      <Route
        element={
          <SignedIn>
            <DashboardLayout />
          </SignedIn>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* REDIRECT UNAUTH USERS */}
      <Route
        path="/dashboard"
        element={
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        }
      />
    </Routes>
  );
}
