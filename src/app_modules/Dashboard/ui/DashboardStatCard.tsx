import { ContactRound, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
//
import { $ } from "@/utils";
import { TeachersService } from "@/server/api/teachers/teachers.service";
import { StudentsService } from "@/server/api/students/students.service";
import { ITeacher } from "@/server/api/teachers/teachers.dto";
import { IStudent } from "@/server/api/students/students.dto";

interface IProps {
  data: [teachers: ITeacher[], students: IStudent[]];
}

export const DashboardStatCard = ({ data: [teachers, students] }: IProps) => {
  return (
    <div className="grid-1-2 gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
          <CardTitle className="text-sm_ font-medium">Total Teachers</CardTitle>
          <ContactRound className="dim-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{$(teachers.length)}</div>
          <p className="text-sm text-muted-foreground">
            Teacher average salary: $ {TeachersService.avgSalary(teachers)}
          </p>
        </CardContent>
      </Card>
      {/*  */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
          <CardTitle className="text-sm_ font-medium">Total Students</CardTitle>
          <Users className="dim-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{$(students.length)}</div>
          <p className="text-sm text-muted-foreground">
            Student average age: {StudentsService.avgAge(students)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
