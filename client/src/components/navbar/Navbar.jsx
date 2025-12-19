import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
       <div className='w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          AI<span className="text-green-600">Tools</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#tools" className="hover:text-green-600">Tools</a>
          <a href="#pricing" className="hover:text-green-600">Pricing</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800"
          >
            Dashboard
          </Link>

          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}
