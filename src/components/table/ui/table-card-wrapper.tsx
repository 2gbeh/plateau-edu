import { CircleSlash, Save } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";

interface IProps {
  children: React.ReactNode;
  h1?: string;
  p?: string;
}

export const TableCardWrapper = ({ children, h1, p }: IProps) => {
  return (
    <>
      <CardHeader>
        {h1 && <CardTitle>{h1}</CardTitle>}
        {p && <CardDescription>{p}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="border-t px-6 py-4 flex-center-end gap-4">
        <Button type="reset" variant="outline">
          <CircleSlash className="dim-4 mr-2" />
          Reset
        </Button>
        <Button>
          <Save className="dim-4 mr-2" />
          Save
        </Button>
      </CardFooter>
    </>
  );
};
