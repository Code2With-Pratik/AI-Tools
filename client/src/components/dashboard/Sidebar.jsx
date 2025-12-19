import { Link } from "react-router-dom";
import { tools } from "@/config/tools";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      {tools.map(tool => (
        <Link
          key={tool.path}
          to={tool.path}
          className="block mb-3 hover:text-green-400"
        >
          {tool.name}
        </Link>
      ))}
    </aside>
  );
}
