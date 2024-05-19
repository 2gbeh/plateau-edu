import React from "react";
import { CirclePlus, ContactRound, ListTodo } from "lucide-react";
import { Card } from "@/components/shadcn/ui/card";
import { Heading } from "@/components/heading";
import Sidebar from "@/components/sidebar";
//
import PATH from "@/constants/PATH";

export default function StudentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Heading text="Manage Students" icon={<ContactRound className="sm:dim-8 dim-5" />}>
      <Sidebar
        menu={[
          {
            path: PATH.students_create,
            text: "Add Student",
            icon: <CirclePlus className="dim-4 mr-2" />,
          },
          {
            path: PATH.students,
            text: "View Students",
            icon: <ListTodo className="dim-4 mr-2" />,
          },
        ]}
      />
      {/*  */}
      <div className="grid gap-6">
        <Card x-chunk="dashboard-04-chunk-1">{children}</Card>
      </div>
    </Heading>
  );
}
