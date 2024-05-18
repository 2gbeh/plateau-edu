import { AreaChart } from "lucide-react";
import { Heading } from "@/components/heading";
import { DashboardStatCard } from "@/app_modules/Dashboard/ui/DashboardStatCard";
import { DashboardTeachersTable } from "@/app_modules/Dashboard/ui/DashboardTeachersTable";
import { DashboardStudentsList } from "@/app_modules/Dashboard/ui/DashboardStudentsList";
// 
import fakeStudents from "@/data/fake-students";
import fakeTeachers from "@/data/fake-teachers";

export const metadata = { title: "Dashboard" };

export default function Dashboard() {
  return (
    <Heading
      text="Dashboard"
      icon={<AreaChart className="dim-8" />}
      hasAside={false}
    >
      <DashboardStatCard data={[fakeTeachers, fakeStudents]} />
      {/*  */}
      <div className="grid-1-6 gap-10 mt-6">
        <div className="col-span-4">
          <DashboardTeachersTable data={fakeTeachers.slice(0, 5)} />
        </div>
        <div className="sm:col-span-2 col-span-4">
          <DashboardStudentsList data={fakeStudents.slice(0, 5)} />
        </div>
      </div>
    </Heading>
  );
}
