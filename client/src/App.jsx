import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import UserSync from "./components/UserSync";

import HomeLayout from "./layouts/HomeLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./app/home/Home";
import Dashboard from "./app/dashboard/Dashboard";
import SignInPage from "./app/auth/SignIn";
import SignUpPage from "./app/auth/SignUp";

// dashboard tool pages
import WriteArticle from "./app/dashboard/tools/WriteArticle";
import BlogTitles from "./app/dashboard/tools/BlogTitles";
import GenerateImage from "./app/dashboard/tools/GenerateImage";
import RemoveBg from "./app/dashboard/tools/RemoveBg";

export default function App() {
  return (
    <>
      {/* 🔑 SYNC CLERK USER → DATABASE */}
      <UserSync />

      <Routes>
        {/* PUBLIC */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* AUTH */}
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />

        {/* DASHBOARD (PROTECTED) */}
        <Route
          element={
            <SignedIn>
              <DashboardLayout />
            </SignedIn>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/write-article" element={<WriteArticle />} />
          <Route path="/dashboard/blog-titles" element={<BlogTitles />} />
          <Route path="/dashboard/generate-image" element={<GenerateImage />} />
          <Route path="/dashboard/remove-bg" element={<RemoveBg />} />
        </Route>

        {/* REDIRECT UNAUTHENTICATED USERS */}
        <Route
          path="/dashboard/*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </>
  );
}
