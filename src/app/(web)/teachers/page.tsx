import Image from "next/image";
import { Badge } from "@/components/shadcn/ui/badge";
import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import { TableCardWrapper } from "@/components/table/ui/table-card-wrapper";
import { TableCellAction } from "@/components/table/ui/table-cell-action";
//
import fakeTeachers from "@/data/fake-teachers";

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
        fakeTeachers.map((e, i) => (
          <TableRow>
            <TableCell className="hidden sm:table-cell">
              <Image
                src={e.avatar}
                width={32}
                height={32}
                alt="Avatar"
                className="aspect-square rounded-md object-cover"
              />
            </TableCell>
            <TableCell className="font-medium">
              {e.title}
              {e.surname}
              {e.other_names}
              <br />
              <Badge variant="secondary" className="mt-1 text-xs_">
                EDU/STA/{e.teacher_number}
              </Badge>
            </TableCell>
            <TableCell>
              {e.date_of_birth}
              <Badge variant={i < 1 ? "secondary" : "outline"} className="ml-2">
                {new Date().getFullYear() - Number(e.date_of_birth.slice(0, 4))}
              </Badge>
            </TableCell>
            <TableCell>{e.national_id}</TableCell>
            <TableCell className="hidden md:table-cell">${e.salary}</TableCell>
            <TableCellAction id={e.id} />
          </TableRow>
        )),
      ]}
    </TableCardWrapper>
  );
}
