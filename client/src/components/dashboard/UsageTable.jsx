const rows = [
  { tool: "Write Article", usage: "340 requests" },
  { tool: "Generate Image", usage: "120 images" },
  { tool: "Remove Background", usage: "80 images" },
];

export default function UsageTable() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl border col-span-2">
      <h3 className="font-semibold mb-4">Tool Usage</h3>

      <table className="w-full text-sm">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="text-left py-2">Tool</th>
            <th className="text-right py-2">Usage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.tool} className="border-b last:border-0">
              <td className="py-3">{row.tool}</td>
              <td className="py-3 text-right">{row.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
