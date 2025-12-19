import { useCredits } from "@/context/CreditContext";

export default function StatsCards() {
  const { credits } = useCredits();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-5 rounded-xl border">
        <p className="text-sm text-gray-500">Credits Left</p>
        <h2 className="text-2xl font-bold">{credits}</h2>
      </div>
    </div>
  );
}
