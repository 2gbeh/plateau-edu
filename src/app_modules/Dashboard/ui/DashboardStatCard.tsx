import { ContactRound, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";

export const DashboardStatCard = () => {
  return (
    <div className="grid-1-2 gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
          <ContactRound className="dim-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,509</div>
          <p className="text-xs text-muted-foreground">+25% from last month</p>
        </CardContent>
      </Card>
      {/*  */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          <Users className="dim-5" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,992</div>
          <p className="text-xs text-muted-foreground">+25% from last month</p>
        </CardContent>
      </Card>
    </div>
  );
};
