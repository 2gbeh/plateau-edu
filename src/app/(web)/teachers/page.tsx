import { Badge } from "@/components/shadcn/ui/badge";
import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import { TableCardWrapper } from "@/components/table/ui/table-card-wrapper";
import { TableCellAvatar } from "@/components/table/ui/table-cell-avatar";
import { TableCellHidden } from "@/components/table/ui/table-cell-hidden";
import { TableCellAction } from "@/components/table/ui/table-cell-action";
//
import fakeTeachers from "@/data/fake-teachers";
import { TeacherPipe } from "@/server/resources/teachers/teacher.pipe";

export const metadata = { title: "View Teachers" };

export default function Teachers() {
  return (
    <TableCardWrapper
      h1="View Teachers"
      p="List of registred teachers"
      thead={[
        "#Passport",
        "Teacher Name/No.*",
        "Date of Birth*",
        "National ID*",
        "Salary",
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
          const teacherPipe = TeacherPipe.transform(e);
          //
          return (
            <TableRow key={i}>
              <TableCellAvatar src={teacherPipe.avatar_f} alt="Avatar" />
              {/*  */}
              <TableCell className="font-medium">
                {teacherPipe.display_name}
                <br />
                <Badge variant="secondary" className="mt-1 text-xs_">
                  {teacherPipe.teacher_number_f}
                </Badge>
              </TableCell>
              <TableCell>{teacherPipe.date_of_birth_f}</TableCell>
              <TableCell>{teacherPipe.national_id_f}</TableCell>
              <TableCellHidden>$ {teacherPipe.salary_f}</TableCellHidden>
              {/*  */}
              <TableCellAction id={teacherPipe.id} />
            </TableRow>
          );
        }),
      ]}
    </TableCardWrapper>
  );
}
