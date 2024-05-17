import React from "react";
import { CirclePlus, ContactRound, ListTodo } from "lucide-react";
import { Card } from "@/components/shadcn/ui/card";
import { Heading } from "@/components/heading";
import Sidebar from "@/components/sidebar";
//
import PATH from "@/constants/PATH";

export default function TeachersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Heading text="Manage Teachers" icon={<ContactRound className="dim-8" />}>
      <Sidebar
        menu={[
          {
            path: PATH.teachers_create,
            text: "Add Teacher",
            icon: <CirclePlus className="dim-4 mr-2" />,
          },
          {
            path: PATH.teachers,
            text: "All Teachers",
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
