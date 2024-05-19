"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";
import { TableCell } from "@/components/shadcn/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { Button } from "@/components/shadcn/ui/button";
// 
import { TPrimaryKey } from "@/types/common.type";

interface IProps {
  id: TPrimaryKey;
  actions?: Record<string, (id: TPrimaryKey) => void>[];
}

const TableCellAction = ({ id, actions }: IProps) => {
  return (
    <TableCell>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button aria-haspopup="true" size="icon" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          {actions?.map((e, i) => {
            let [text, handleClick] = [
              Object.keys(e).pop(),
              Object.values(e).pop(),
            ];
            return (
              <DropdownMenuItem key={i} onClick={() => handleClick!(id)}>
                {text}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  );
};

export default React.memo(TableCellAction);
