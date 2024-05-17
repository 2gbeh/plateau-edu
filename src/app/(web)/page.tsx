import { Frame } from "lucide-react";
import { Heading } from "@/components/heading";
import { StatCard } from "@/components/stat-card";
import { DashboardTeachersTable } from "@/app_modules/Dashboard/ui/DashboardTeachersTable";
import { DashboardStudentsList } from "@/app_modules/Dashboard/ui/DashboardStudentsList";

export const metadata = { title: "Dashboard" };

export default function Dashboard() {
  return (
    <Heading text="Dashboard" hasAside={false}>
      <div className="grid-1-2 gap-5">
        <StatCard
          label="Total Teachers"
          value="1,509"
          summary="+25% from last month"
        >
          <Frame className="dim-4" />
        </StatCard>
        <StatCard
          label="Total Students"
          value="1,992"
          summary="+75% from last month"
        >
          <Frame className="dim-4" />
        </StatCard>
      </div>
      {/*  */}
      <div className="grid-1-6 gap-10 mt-5">
        <div className="col-span-4">
          <DashboardTeachersTable />
        </div>
        <div className="col-span-2">
          <DashboardStudentsList />
        </div>
      </div>
    </Heading>
  );
}
