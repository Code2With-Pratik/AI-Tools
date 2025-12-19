import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { useAuth } from "@clerk/clerk-react";

export default function UsageTable() {
  const { getToken } = useAuth();
  const [usage, setUsage] = useState([]);

  useEffect(() => {
    const fetchUsage = async () => {
      const token = await getToken();
      const res = await api.get("/credits/usage", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsage(res.data);
    };

    fetchUsage();
  }, []);

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left border-b">
          <th>Tool</th>
          <th>Credits</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {usage.map((u) => (
          <tr key={u.id} className="border-b">
            <td>{u.tool}</td>
            <td>-{u.cost}</td>
            <td>{new Date(u.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
