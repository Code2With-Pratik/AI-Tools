import { useState } from "react";
import ToolLayout from "@/components/dashboard/ToolLayout";
import { useCredits } from "@/context/CreditContext";

export default function RemoveBg() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const { credits, consumeCredits } = useCredits();

  const COST = 10;

  const handleRemoveBg = () => {
    const success = consumeCredits("remove-bg", COST);
    if (!success) {
      alert("Not enough credits");
      return;
    }

    // Mock background removal
    setPreview(URL.createObjectURL(file));
  };

  return (
    <ToolLayout
      title="Remove Background"
      description={`Remove background from images (Cost: ${COST} credits)`}
      output={
        preview && (
          <img
            src={preview}
            alt="Processed"
            className="w-full rounded-xl border"
          />
        )
      }
    >
      <p className="text-sm text-gray-500 mb-2">
        Available credits: <b>{credits}</b>
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full p-2 border rounded"
      />

      <button
        onClick={handleRemoveBg}
        disabled={credits < COST || !file}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg disabled:opacity-50"
      >
        Remove Background
      </button>
    </ToolLayout>
  );
}
