import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import Skeleton from "@/components/loaders/skeleton";

export const DashboardTeachersTableFallback = ({ n = 5 }: { n?: number }) => {
  return [...Array(n)].map((_, i) => (
    <TableRow key={i}>
      <TableCell>
        <Skeleton as="32 32 6" />
      </TableCell>
      <TableCell>
        <Skeleton as="130 18 2" />
      </TableCell>
      <TableCell>
        <Skeleton as="100 28 4" />
      </TableCell>
      <TableCell>
        <Skeleton as="80 18 4" />
      </TableCell>
    </TableRow>
  ));
};
