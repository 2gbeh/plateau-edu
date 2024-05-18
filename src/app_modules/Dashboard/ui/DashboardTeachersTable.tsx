import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import { TableCardWrapper } from "@/components/table/ui/table-card-wrapper";
import { TableCellAvatar } from "@/components/table/ui/table-cell-avatar";
import { TableCellBadge } from "@/components/table/ui/table-cell-bagde";
import { TableCellStrong } from "@/components/table/ui/table-cell-strong";
//
import PATH from "@/constants/PATH";
import { ITeacher } from "@/server/api/teachers/teachers.dto";
import { TeachersPipe } from "@/server/api/teachers/teachers.pipe";

export const DashboardTeachersTable = ({ data }: { data: ITeacher[] }) => {
  return (
    <TableCardWrapper
      h1="Recent Teachers"
      a={PATH.teachers}
      thead={["#Passport", "Teacher Name*", "Teacher Number", "Salary*"]}
    >
      {data.map((e, i) => {
        const teacherPipe = TeachersPipe.transform(e);
        //
        return (
          <TableRow key={i}>
            <TableCellAvatar src={teacherPipe.avatar_f} alt="Avatar" />
            {/*  */}
            <TableCellStrong>{teacherPipe.display_name}</TableCellStrong>
            <TableCellBadge variant="secondary">
              {teacherPipe.teacher_number}
            </TableCellBadge>
            <TableCell>$ {teacherPipe.salary_f}</TableCell>
          </TableRow>
        );
      })}
    </TableCardWrapper>
  );
};
