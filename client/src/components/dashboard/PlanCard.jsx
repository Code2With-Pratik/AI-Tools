export default function PlanCard() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl border">
      <h3 className="font-semibold">Current Plan</h3>
      <p className="text-2xl font-bold mt-2">Free</p>
      <p className="text-sm text-gray-300 mt-1">
        500 credits per month
      </p>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg font-medium">
        Upgrade to Pro
      </button>
    </div>
  );
}
