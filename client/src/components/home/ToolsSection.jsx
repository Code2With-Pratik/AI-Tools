import { Sparkles, Image, FileText, Scissors } from "lucide-react";

const tools = [
  {
    title: "Write Article",
    desc: "Generate high quality articles instantly",
    icon: FileText,
  },
  {
    title: "Blog Titles",
    desc: "Catchy blog titles in seconds",
    icon: Sparkles,
  },
  {
    title: "Generate Image",
    desc: "Create AI images from text",
    icon: Image,
  },
  {
    title: "Remove Background",
    desc: "Remove image backgrounds instantly",
    icon: Scissors,
  },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful AI Tools
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="p-6 rounded-xl border bg-white hover:shadow-lg transition"
            >
              <tool.icon className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2">{tool.title}</h3>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
