import { TableCell } from "@/components/shadcn/ui/table";
import { Badge } from "@/components/shadcn/ui/badge";
//
import { TBadgeVariant } from "@/types/common.type";

interface IProps {
  text: number | string;
  variant?: Exclude<TBadgeVariant, "ghost">;
  required?: boolean;
}

export const TableCellBadge = ({
  text,
  variant = "outline",
  required = false,
}: IProps) => {
  return (
    <TableCell className={required ? "table-cell" : "hidden sm:table-cell"}>
      <Badge variant={variant}>{text}</Badge>
    </TableCell>
  );
};
