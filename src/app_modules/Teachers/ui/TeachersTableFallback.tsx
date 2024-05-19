import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import Skeleton from "@/components/loaders/skeleton";

export const TeachersTableFallback = ({ n = 10 }: { n?: number }) => {
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
      <TableCell>
        <Skeleton as="100 18 2" />
      </TableCell>
      <TableCell>
        <Skeleton as="80 18 2" />
      </TableCell>
      <TableCell>
        <div className="flex-center-center gap-2 mt-1">
          <Skeleton as="15 15 5" />
          <Skeleton as="15 15 5" />
        </div>
      </TableCell>
    </TableRow>
  ));
};
