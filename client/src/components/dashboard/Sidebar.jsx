import { NavLink, Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import {
  LayoutDashboard,
  PenLine,
  Image,
  Eraser,
  ArrowLeft
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Write Article", path: "/dashboard/write-article", icon: PenLine },
  { name: "Blog Titles", path: "/dashboard/blog-titles", icon: PenLine },
  { name: "Generate Image", path: "/dashboard/generate-image", icon: Image },
  { name: "Remove Background", path: "/dashboard/remove-bg", icon: Eraser },
];

export default function Sidebar() {
  const { user } = useUser();

  return (
    <aside className="w-64 bg-black border-r flex flex-col">
      
      {/* TOP HEADER */}
      <div className="h-16 px-8 flex items-center justify-between border-b">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
        >
          <ArrowLeft size={25} />
          
        <span className="font-bold text-lg text-emerald-400">AI Tools</span>
        </Link>

      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* USER SECTION */}
      <div className="p-4 border-t flex items-center gap-3">
        <UserButton afterSignOutUrl="/" />

        <div className="flex flex-col text-sm">
          <span className="font-medium text-gray-100">
            {user?.fullName || "User"}
          </span>
          <span className="text-xs text-gray-500">
            {user?.primaryEmailAddress?.emailAddress}
          </span>
        </div>
      </div>
    </aside>
  );
}
