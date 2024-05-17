"use client"
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/shadcn/ui/badge";
import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { TableCardWrapper } from "@/components/table/ui/table-card-wrapper";
import fakeTeachers from "@/data/fake-teachers";
import UseClient from "@/components/use-client";
import fakerHelper from "@/lib/faker-js/main";

/*
● Title - required can be either [Mr, Mrs, Miss, Dr, Prof]
Surname - required
Other Names - required
Teacher Number - required

  
● Date of Birth - required - their age may not be less than 21
● National ID number - required field

Salary - optional
*/

// export const metadata = { title: "View Teachers" };

export default function Teachers() {
  fakerHelper.log(fakerHelper.getCollection);

  return (
    <TableCardWrapper
      h1="View Teachers"
      p="List of registred teachers"
      thead={[
        "#Passport",
        "Teacher Name/ID*",
        "Date of Birth*",
        "National ID*",
        "Salary",
        "Date Created",
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
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="32"
                src="/images/avatar-flat.png"
                width="32"
              />
              <UseClient />
            </TableCell>
            <TableCell className="font-medium">
              Mr. Laser Lemonade <br />1
            </TableCell>
            <TableCell>
              <Badge variant={i < 1 ? "secondary" : "outline"}>Active</Badge>
            </TableCell>
            <TableCell>$499.99</TableCell>
            <TableCell className="hidden md:table-cell">25</TableCell>
            <TableCell className="hidden md:table-cell">
              2023-07-12 10:42 AM
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        )),
      ]}
    </TableCardWrapper>
  );
}
