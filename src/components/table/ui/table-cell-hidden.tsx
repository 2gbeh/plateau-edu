import { TableCell } from "@/components/shadcn/ui/table";

interface IProps {
  children?: React.ReactNode;
}

export const TableCellHidden = ({ children }: IProps) => {
  return <TableCell className="hidden md:table-cell">{children}</TableCell>;
};
