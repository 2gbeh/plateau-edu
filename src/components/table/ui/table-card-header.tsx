import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";

interface IProps {
  h1?: string;
  p?: string;
  a?: string;
}

export const TableCardHeader = ({ h1, p, a }: IProps) => {
  return (
    <>
      {a ? (
        <CardHeader className="flex flex-row items-center">
          {h1 && <CardTitle>{h1}</CardTitle>}
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href={a}>
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
      ) : (
        <CardHeader>
          {h1 && <CardTitle>{h1}</CardTitle>}
          {p && <CardDescription>{p}</CardDescription>}
        </CardHeader>
      )}
    </>
  );
};
