import { TableCell, TableRow } from "@/components/shadcn/ui/table";

interface IProps {
  span?: number;
  total?: number;
  from?: number;
  to?: number;
}

export const TableCellFooter = ({
  span = 9,
  total = 0,
  from = 1,
  to,
}: IProps) => {
  return (
    total > 0 && (
      <TableRow>
        <TableCell></TableCell>
        <TableCell colSpan={span}>
          <div className="pt-1 -ml-5 text-xs text-muted-foreground">
            Showing{" "}
            <strong>
              {from}-{to || total}
            </strong>{" "}
            of <strong>{total}</strong> records
          </div>
        </TableCell>
      </TableRow>
    )
  );
};
