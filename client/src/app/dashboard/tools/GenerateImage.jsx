import { useState } from "react";
import ToolLayout from "@/components/dashboard/ToolLayout";
import { useCredits } from "@/context/CreditContext";

export default function GenerateImage() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const { credits, consumeCredits } = useCredits();

  const COST = 25;

  const handleGenerate = () => {
    const success = consumeCredits("generate-image", COST);
    if (!success) {
      alert("Not enough credits");
      return;
    }

    // Mock image output
    setImage(
      `https://via.placeholder.com/512x512.png?text=${encodeURIComponent(
        prompt
      )}`
    );
  };

  return (
    <ToolLayout
      title="AI Image Generator"
      description={`Generate images from text (Cost: ${COST} credits)`}
      output={
        image && (
          <img
            src={image}
            alt="Generated"
            className="w-full rounded-xl border"
          />
        )
      }
    >
      <p className="text-sm text-gray-500 mb-2">
        Available credits: <b>{credits}</b>
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image you want..."
        className="w-full border px-3 py-2 rounded-lg min-h-25"
      />

      <button
        onClick={handleGenerate}
        disabled={credits < COST || !prompt}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg disabled:opacity-50"
      >
        Generate Image
      </button>
    </ToolLayout>
  );
}
