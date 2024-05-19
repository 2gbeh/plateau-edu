import React from "react";
import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import { Figure } from "@/components/figure";

interface IProps {
  text?: string;
}

export const TableCellNoData = ({ text = "No records found" }: IProps) => {
  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell colSpan={6}>
        <div className=" min-h-[300px] flex-center-center">
          <figure className="flex flex-col gap-2 items-center">
            <Figure src="/images/no-search.png" dim={[160, 160]} as="100px" />
            <figcaption>{text}</figcaption>
          </figure>
        </div>
      </TableCell>
    </TableRow>
  );
};
