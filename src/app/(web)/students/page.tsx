import { TableCardWrapper } from "@/components/table/ui/table-card-wrapper";
import StudentsTable from "@/app_modules/Students/ui/StudentsTable";

export const metadata = { title: "View Students" };

export default function Students() {
  return (
    <TableCardWrapper
      h1="View Students"
      p="List of registred students"
      thead={[
        "#Passport",
        "Student Name*",
        "Student Number",
        "Date of Birth*",
        "National ID",
        "#Action*",
      ]}
    >
      <StudentsTable />
    </TableCardWrapper>
  );
}
