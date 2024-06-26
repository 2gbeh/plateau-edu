import { TableCardWrapper } from "@/components/table/ui/table-card-wrapper";
import TeachersTable from "@/app_modules/Teachers/ui/TeachersTable";

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
    >
      <TeachersTable />
    </TableCardWrapper>
  );
}
