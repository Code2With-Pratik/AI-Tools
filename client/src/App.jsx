import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./app/home/Home";
import Dashboard from "./app/dashboard/Dashboard";

import WriteArticle from "./app/dashboard/tools/WriteArticle";
import BlogTitles from "./app/dashboard/tools/BlogTitles";
import GenerateImage from "./app/dashboard/tools/GenerateImage";
import RemoveBg from "./app/dashboard/tools/RemoveBg";

import SignIn from "./app/auth/SignIn";
import SignUp from "./app/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* AUTH */}
        <Route path="/sign-in/*" element={<SignIn />} />
        <Route path="/sign-up/*" element={<SignUp />} />

        {/* DASHBOARD */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/write-article" element={<WriteArticle />} />
          <Route path="/dashboard/blog-titles" element={<BlogTitles />} />
          <Route path="/dashboard/generate-image" element={<GenerateImage />} />
          <Route path="/dashboard/remove-bg" element={<RemoveBg />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
