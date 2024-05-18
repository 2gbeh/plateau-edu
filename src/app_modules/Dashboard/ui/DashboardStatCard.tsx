import { ContactRound, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
//
import { $ } from "@/utils";
import fakeTeachers from "@/data/fake-teachers";
import fakeStudents from "@/data/fake-students";
import { TeacherService } from "@/server/resources/teachers/teacher.service";
import { StudentService } from "@/server/resources/students/stdudent.service";

export const DashboardStatCard = () => {
  return (
    <div className="grid-1-2 gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
          <ContactRound className="dim-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{$(fakeTeachers.length)}</div>
          <p className="text-xs text-muted-foreground">
            Teacher average salary: $ {TeacherService.avgSalary(fakeTeachers)}
          </p>
        </CardContent>
      </Card>
      {/*  */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          <Users className="dim-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{$(fakeStudents.length)}</div>
          <p className="text-xs text-muted-foreground">
            Student average age: {StudentService.avgAge(fakeStudents)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
