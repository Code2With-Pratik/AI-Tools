import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-blue-500 border-b flex items-center justify-between px-6">
      <h1 className="font-semibold text-lg">Dashboard</h1>
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <Bell size={20} />
      </button>
    </header>
  );
}
