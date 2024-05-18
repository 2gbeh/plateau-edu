import { TableCell } from "@/components/shadcn/ui/table";

interface IProps {
  children?: React.ReactNode;
  text?: number | string;
}

export const TableCellStrong = ({ children, text }: IProps) => {
  return <TableCell className="font-medium">{children || text}</TableCell>;
};
