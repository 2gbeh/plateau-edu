import Image from "next/image";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import clsx from "clsx";

interface IProps {
  children: React.ReactNode;
  h1: string;
  p: string;
  hasImage?: boolean;
}

export const StatCard = ({ children, h1, p, hasImage }: IProps) => {
  return (
    <Card
      x-chunk="dashboard-01-chunk-0"
      className={clsx("pt-4 pb-2 flex-1", !hasImage && "flex-center")}
    >
      <CardContent className="flex-1">
        <div className="flex-center-between">
          <h1 className="text-2xl font-bold">{h1}</h1>
          <aside className="text-sm bg-gray-100 px-2 py-1 rounded-lg">
            {children}
          </aside>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{p}</p>
      </CardContent>

      {/* FAKE CHART */}
      {hasImage && (
        <figure className="px-5 pb-4">
          <Image
            src="/images/chart.png"
            alt="Chart"
            className="w-full"
            width={413}
            height={115}
            priority
          />
        </figure>
      )}
    </Card>
  );
};
