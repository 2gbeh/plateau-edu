import Skeleton from "@/components/loaders/skeleton";

export const DashboardStudentsListFallback = ({ n = 5 }: { n?: number }) => {
  return [...Array(n)].map((_, i) => (
    <div className="flex items-end gap-4">
      <Skeleton as="36 36 100%" />
      <div className="flex flex-col gap-2">
      <Skeleton as="80 14 2" />
      <Skeleton as="120 10 10" />
      </div>
      <div className="ml-auto text-sm">
        <Skeleton as="50 10 10" />
      </div>
    </div>
  ));
};
