import { AreaChart } from "lucide-react";
import { Heading } from "@/components/heading";
import DashboardContent from "@/app_modules/Dashboard/ui/DashboardContent";

export const metadata = { title: "Dashboard" };

export default function Dashboard() {
  return (
    <Heading
      text="Dashboard"
      icon={<AreaChart className="dim-8" />}
      hasAside={false}
    >
      <DashboardContent />
    </Heading>
  );
}
