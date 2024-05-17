import { AreaChart } from "lucide-react";
import { Heading } from "@/components/heading";
import { DashboardStatCard } from "@/app_modules/Dashboard/ui/DashboardStatCard";
import { DashboardTeachersTable } from "@/app_modules/Dashboard/ui/DashboardTeachersTable";
import { DashboardStudentsList } from "@/app_modules/Dashboard/ui/DashboardStudentsList";

export const metadata = { title: "Dashboard" };

export default function Dashboard() {
  return (
    <Heading
      text="Dashboard"
      icon={<AreaChart className="dim-8" />}
      hasAside={false}
    >
      <DashboardStatCard />
      {/*  */}
      <div className="grid-1-6 gap-10 mt-6">
        <div className="col-span-4">
          <DashboardTeachersTable />
        </div>
        <div className="sm:col-span-2 col-span-4">
          <DashboardStudentsList />
        </div>
      </div>
    </Heading>
  );
}
