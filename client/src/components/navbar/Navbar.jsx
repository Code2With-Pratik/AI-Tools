import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link to="/" className="font-bold text-lg">
          AI Tools
        </Link>

        <div className="flex items-center gap-4">
          <SignedOut>
            <Link to="/sign-in" className="text-sm">Sign In</Link>
            <Link
              to="/sign-up"
              className="px-4 py-2 bg-black text-white rounded-lg text-sm"
            >
              Sign Up
            </Link>
          </SignedOut>

          <SignedIn>
            <Link to="/dashboard" className="text-sm">
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
