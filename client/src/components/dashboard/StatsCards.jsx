const stats = [
  { label: "Total Requests", value: "1,240" },
  { label: "Words Generated", value: "98,540" },
  { label: "Images Created", value: "124" },
  { label: "Credits Left", value: "320" },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-red-500 p-5 rounded-xl border"
        >
          <p className="text-sm text-gray-50">{stat.label}</p>
          <h2 className="text-2xl font-bold mt-1">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
}
