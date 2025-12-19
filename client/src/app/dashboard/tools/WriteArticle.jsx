import { useState } from "react";
import ToolLayout from "@/components/dashboard/ToolLayout";
import { useCredits } from "@/context/CreditContext";

export default function WriteArticle() {
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");
  const { credits, consumeCredits } = useCredits();

  const COST = 20;

  const handleGenerate = () => {
    const success = consumeCredits("write-article", COST);

    if (!success) {
      alert("Not enough credits");
      return;
    }

    setOutput(
      `Generated article for "${topic}".\nCredits used: ${COST}`
    );
  };

  return (
    <ToolLayout
      title="Write Article"
      description={`Costs ${COST} credits`}
      output={<pre className="whitespace-pre-wrap">{output}</pre>}
    >
      <p className="text-sm text-gray-500 mb-2">
        Available credits: <b>{credits}</b>
      </p>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic"
        className="w-full border px-3 py-2 rounded-lg"
      />

      <button
        onClick={handleGenerate}
        disabled={credits < COST}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg disabled:opacity-50"
      >
        Generate Article
      </button>
    </ToolLayout>
  );
}
