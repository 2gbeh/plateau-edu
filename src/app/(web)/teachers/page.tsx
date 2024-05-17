import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/shadcn/ui/badge";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
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

/*
● Title - required can be either [Mr, Mrs, Miss, Dr, Prof]
Surname - required
Other Names - required
National ID number - required field

● Date of Birth - required - their age may not be less than 21
● Teacher Number - required

Salary - optional 
Email - 
Phone No. - 
*/

export const metadata = { title: "View Teachers" };

export default function Teachers() {
  return (
    <TableCardWrapper
      h1="View Teachers"
      p="List of registred teachers"
      thead={[
        "#Passport",
        "Teacher Name*",
        "Date of Birth*",
        "Teacher Number*",
        "Salary",
        "Date Created",
        "#Action*",
      ]}
      tfoot={
        <>
          Showing <strong>1-10</strong> of <strong>32</strong> records
        </>
      }
    >
      <TableRow>
        <TableCell className="hidden sm:table-cell">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="32"
            src="/images/avatar-flat.png"
            width="32"
          />
        </TableCell>
        <TableCell className="font-medium">Mr. Laser Lemonade <br/>1</TableCell>
        <TableCell>
          <Badge variant="outline">Draft</Badge>
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
      <TableRow>
        <TableCell className="hidden sm:table-cell">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="32"
            src="/images/avatar-flat.png"
            width="32"
          />
        </TableCell>
        <TableCell className="font-medium">Hypernova Headphones</TableCell>
        <TableCell>
          <Badge variant="outline">Active</Badge>
        </TableCell>
        <TableCell>$129.99</TableCell>
        <TableCell className="hidden md:table-cell">100</TableCell>
        <TableCell className="hidden md:table-cell">
          2023-10-18 03:21 PM
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
      <TableRow>
        <TableCell className="hidden sm:table-cell">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="32"
            src="/images/avatar-flat.png"
            width="32"
          />
        </TableCell>
        <TableCell className="font-medium">AeroGlow Desk Lamp</TableCell>
        <TableCell>
          <Badge variant="outline">Active</Badge>
        </TableCell>
        <TableCell>$39.99</TableCell>
        <TableCell className="hidden md:table-cell">50</TableCell>
        <TableCell className="hidden md:table-cell">
          2023-11-29 08:15 AM
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
      <TableRow>
        <TableCell className="hidden sm:table-cell">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="32"
            src="/images/avatar-flat.png"
            width="32"
          />
        </TableCell>
        <TableCell className="font-medium">TechTonic Energy Drink</TableCell>
        <TableCell>
          <Badge variant="secondary">Draft</Badge>
        </TableCell>
        <TableCell>$2.99</TableCell>
        <TableCell className="hidden md:table-cell">0</TableCell>
        <TableCell className="hidden md:table-cell">
          2023-12-25 11:59 PM
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
      <TableRow>
        <TableCell className="hidden sm:table-cell">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="32"
            src="/images/avatar-flat.png"
            width="32"
          />
        </TableCell>
        <TableCell className="font-medium">Gamer Gear Pro Controller</TableCell>
        <TableCell>
          <Badge variant="outline">Active</Badge>
        </TableCell>
        <TableCell>$59.99</TableCell>
        <TableCell className="hidden md:table-cell">75</TableCell>
        <TableCell className="hidden md:table-cell">
          2024-01-01 12:00 AM
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
      <TableRow>
        <TableCell className="hidden sm:table-cell">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="32"
            src="/images/avatar-flat.png"
            width="32"
          />
        </TableCell>
        <TableCell className="font-medium">Luminous VR Headset</TableCell>
        <TableCell>
          <Badge variant="outline">Active</Badge>
        </TableCell>
        <TableCell>$199.99</TableCell>
        <TableCell className="hidden md:table-cell">30</TableCell>
        <TableCell className="hidden md:table-cell">
          2024-02-14 02:14 PM
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
    </TableCardWrapper>
  );
}
