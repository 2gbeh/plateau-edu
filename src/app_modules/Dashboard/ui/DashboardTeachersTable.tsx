import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import { TableCardWrapper } from "@/components/table/ui/table-card-wrapper";
import { TableCellAvatar } from "@/components/table/ui/table-cell-avatar";
import { TableCellBadge } from "@/components/table/ui/table-cell-bagde";
import { TableCellStrong } from "@/components/table/ui/table-cell-strong";
//
import fakeTeachers from "@/data/fake-teachers";
import { TeachersPipe } from "@/server/api/teachers/teachers.pipe";

export const DashboardTeachersTable = () => {
  return (
    <TableCardWrapper
      h1="Recent Teachers"
      thead={["#Passport", "Teacher Name*", "Teacher Number", "Salary*"]}
    >
      {[
        fakeTeachers.slice(0, 10).map((e, i) => {
          const teacherPipe = TeachersPipe.transform(e);
          //
          return (
            <TableRow key={i}>
              <TableCellAvatar src={teacherPipe.avatar_f} alt="Avatar" />
              {/*  */}
              <TableCellStrong>{teacherPipe.display_name}</TableCellStrong>
              <TableCellBadge variant="secondary">
                {teacherPipe.teacher_number_f}
              </TableCellBadge>
              <TableCell>$ {teacherPipe.salary_f}</TableCell>
            </TableRow>
          );
        }),
      ]}
    </TableCardWrapper>
  );
};
