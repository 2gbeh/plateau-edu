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
import { Buffer, LoadingAlt } from "@/components/loaders";
import { COLOR } from "@/constants/APP";

interface IProps {
  data: [teachers: null | ITeacher[], students: null | IStudent[]];
}

export const DashboardStatCard = ({ data: [teachers, students] }: IProps) => {
  const teachersLoaded = teachers instanceof Array;
  const studentsLoaded = students instanceof Array;
  //
  return (
    <div className="grid-1-2 gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
          <CardTitle className="text-sm_ font-medium">Total Teachers</CardTitle>
          <ContactRound className="dim-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {teachersLoaded ? (
              $(teachers?.length || 0)
            ) : (
              <Buffer size={32} fill={COLOR.accent} />
            )}
          </div>
          <p className="text-sm text-muted-foreground flex-center gap-1">
            Teacher average salary: $
            {teachersLoaded ? (
              TeachersService.avgSalary(teachers ?? [])
            ) : (
              <LoadingAlt fill={COLOR.accent} size={24} />
            )}
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
          <div className="text-2xl font-bold">
            {studentsLoaded ? (
              $(students?.length || 0)
            ) : (
              <Buffer size={32} fill={COLOR.accent} />
            )}
          </div>
          <p className="text-sm text-muted-foreground flex-center gap-1">
            Student average age:
            {studentsLoaded ? (
              StudentsService.avgAge(students ?? [])
            ) : (
              <LoadingAlt fill={COLOR.accent} size={24} />
            )}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
