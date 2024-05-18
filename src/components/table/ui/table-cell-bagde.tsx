import { TableCell } from "@/components/shadcn/ui/table";
import { Badge } from "@/components/shadcn/ui/badge";
//
import { TBadgeVariant } from "@/types/common.type";

interface IProps {
  children?: React.ReactNode;
  text?: number | string;
  variant?: Exclude<TBadgeVariant, "ghost">;
  required?: boolean;
}

export const TableCellBadge = ({
  children,
  text,
  variant = "outline",
  required = false,
}: IProps) => {
  return (
    <TableCell className={required ? "table-cell" : "hidden sm:table-cell"}>
      <Badge variant={variant}>{children || text}</Badge>
    </TableCell>
  );
};
