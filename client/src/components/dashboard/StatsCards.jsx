import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { useAuth } from "@clerk/clerk-react";

export default function StatsCards() {
  const { getToken } = useAuth();
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const fetchCredits = async () => {
      const token = await getToken();
      const res = await api.get("/credits", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCredits(res.data.credits);
    };

    fetchCredits();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-sm text-gray-500">Remaining Credits</h3>
      <p className="text-3xl font-bold">{credits}</p>
    </div>
  );
}
