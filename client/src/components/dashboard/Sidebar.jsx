import { NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { LayoutDashboard, Pen, Image, Eraser } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Write Article", path: "/dashboard/write-article", icon: Pen },
  { name: "Blog Titles", path: "/dashboard/blog-titles", icon: Pen },
  { name: "Generate Image", path: "/dashboard/generate-image", icon: Image },
  { name: "Remove Background", path: "/dashboard/remove-bg", icon: Eraser },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black border-r flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 font-bold text-lg">
        AI Dashboard
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
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

      {/* User */}
      <div className="p-4 border-t flex items-center gap-3">
        <UserButton />
        <span className="text-sm text-gray-600">Account</span>
      </div>
    </aside>
  );
}
