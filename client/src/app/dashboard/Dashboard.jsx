import StatsCards from "@/components/dashboard/StatsCards";
import UsageTable from "@/components/dashboard/UsageTable";
import PlanCard from "@/components/dashboard/PlanCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsCards />
      <div className="grid grid-cols-3 gap-6">
        <UsageTable />
        <PlanCard />
      </div>
    </div>
  );
}
