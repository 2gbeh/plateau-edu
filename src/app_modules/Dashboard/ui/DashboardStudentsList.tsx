import { Card, CardContent } from "@/components/shadcn/ui/card";
import { AvatarFb } from "@/components/avatar-fb";
import { NamePlate } from "@/components/name-plate";
import { TableCardHeader } from "@/components/table/ui/table-card-header";
//
import PATH from "@/constants/PATH";
import { IStudent } from "@/server/api/students/students.dto";
import { StudentsPipe } from "@/server/api/students/students.pipe";

export const DashboardStudentsList = ({ data }: { data: IStudent[] }) => {
  return (
    <Card className="">
      <TableCardHeader h1="Recent Students" a={PATH.students} />
      {/*  */}
      <CardContent className="grid gap-6">
        {data.map((e, i) => {
          const studentPipe = StudentsPipe.transform(e);
          //
          return (
            <div key={i} className="flex items-center gap-4">
              <AvatarFb
                src={studentPipe.avatar_f}
                username={studentPipe.full_name}
              />
              <NamePlate
                h1={studentPipe.display_name}
                p={studentPipe.student_number}
              />
              <div className="ml-auto text-sm">Age {studentPipe.age}</div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
