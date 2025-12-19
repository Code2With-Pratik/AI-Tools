import { useCredits } from "@/context/CreditContext";

export default function UsageTable() {
  const { usage } = useCredits();

  return (
    <div className="bg-white p-6 rounded-xl border col-span-2">
      <h3 className="font-semibold mb-4">Usage</h3>

      {Object.keys(usage).length === 0 ? (
        <p className="text-sm text-gray-500">No usage yet</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {Object.entries(usage).map(([tool, amount]) => (
            <li key={tool} className="flex justify-between">
              <span>{tool}</span>
              <span>{amount} credits</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
