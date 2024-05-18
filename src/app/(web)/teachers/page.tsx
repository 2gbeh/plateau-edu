import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import { TableCardWrapper } from "@/components/table/ui/table-card-wrapper";
import { TableCellAvatar } from "@/components/table/ui/table-cell-avatar";
import { TableCellHidden } from "@/components/table/ui/table-cell-hidden";
import { TableCellAction } from "@/components/table/ui/table-cell-action";
//
import fakeTeachers from "@/data/fake-teachers";
import { TeachersPipe } from "@/server/api/teachers/teachers.pipe";
import { TableCellBadge } from "@/components/table/ui/table-cell-bagde";
import { TableCellStrong } from "@/components/table/ui/table-cell-strong";

export const metadata = { title: "View Teachers" };

export default function Teachers() {
  return (
    <TableCardWrapper
      h1="View Teachers"
      p="List of registred teachers"
      thead={[
        "#Passport",
        "Teacher Name*",
        "Teacher Number",
        "Date of Birth",
        "National ID",
        "Salary*",
        "#Action*",
      ]}
      tfoot={
        <span>
          Showing <strong>1-10</strong> of <strong>32</strong> records
        </span>
      }
    >
      {[
        fakeTeachers.map((e, i) => {
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
              <TableCellHidden>{teacherPipe.date_of_birth_f}</TableCellHidden>
              <TableCellHidden>{teacherPipe.national_id_f}</TableCellHidden>
              <TableCell>$ {teacherPipe.salary_f}</TableCell>
              {/*  */}
              <TableCellAction id={teacherPipe.id} />
            </TableRow>
          );
        }),
      ]}
    </TableCardWrapper>
  );
}
