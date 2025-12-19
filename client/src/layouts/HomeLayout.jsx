import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
