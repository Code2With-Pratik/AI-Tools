import { useState } from "react";
import ToolLayout from "@/components/dashboard/ToolLayout";
import { useCredits } from "@/context/CreditContext";

export default function BlogTitles() {
  const [topic, setTopic] = useState("");
  const [titles, setTitles] = useState([]);
  const { credits, consumeCredits } = useCredits();

  const COST = 5;

  const handleGenerate = () => {
    const success = consumeCredits("blog-titles", COST);
    if (!success) {
      alert("Not enough credits");
      return;
    }

    setTitles([
      `10 Powerful Tips About ${topic}`,
      `Why ${topic} Will Change the Future`,
      `The Ultimate Guide to ${topic}`,
      `${topic}: Everything You Need to Know`,
      `How ${topic} Can Boost Your Success`,
    ]);
  };

  return (
    <ToolLayout
      title="Blog Titles Generator"
      description={`Generate SEO-friendly blog titles (Cost: ${COST} credits)`}
      output={
        titles.length > 0 && (
          <ul className="list-disc pl-5 space-y-2">
            {titles.map((title, i) => (
              <li key={i}>{title}</li>
            ))}
          </ul>
        )
      }
    >
      <p className="text-sm text-gray-500 mb-2">
        Available credits: <b>{credits}</b>
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter blog topic"
        className="w-full border px-3 py-2 rounded-lg"
      />

      <button
        onClick={handleGenerate}
        disabled={credits < COST || !topic}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg disabled:opacity-50"
      >
        Generate Titles
      </button>
    </ToolLayout>
  );
}
