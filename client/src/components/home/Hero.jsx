import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-500">
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Supercharge Your Work with <br />
          <span className="text-green-600">AI Tools</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Generate articles, images, blogs, and automate repetitive tasks
          using powerful AI — all in one dashboard.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800"
          >
            Get Started
          </Link>

          <a
            href="#tools"
            className="px-6 py-3 rounded-lg border hover:bg-gray-100"
          >
            Explore Tools
          </a>
        </div>
      </div>
    </section>
  );
}
