import { Card, CardContent } from "@/components/shadcn/ui/card";
import { XAvatarFallback } from "@/components/x-avatar-fallback";
import { NamePlate } from "@/components/name-plate";
import { TableCardHeader } from "@/components/table/ui/table-card-header";
import { DashboardStudentsListFallback } from "./DashboardStudentsListFallback";
import { CardNoData } from "@/components/card-no-data";
//
import PATH from "@/constants/PATH";
import { IStudent } from "@/server/api/students/students.dto";
import { StudentsPipe } from "@/server/api/students/students.pipe";

export const DashboardStudentsList = ({
  data,
}: {
  data: null | IStudent[];
}) => {
  return (
    <Card className="">
      <TableCardHeader h1="Recent Students" a={PATH.students} />
      {/*  */}
      <CardContent className="grid gap-6">
        {data ? (
          data.length > 0 ? (
            data.slice(-5).map((e, i) => {
              const studentPipe = StudentsPipe.transform(e);
              //
              return (
                <div key={i} className="flex items-end gap-4">
                  <XAvatarFallback
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
            })
          ) : (
            <CardNoData minHeight={260} imageSize="80px" />
          )
        ) : (
          <DashboardStudentsListFallback />
        )}
      </CardContent>
    </Card>
  );
};
