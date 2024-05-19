"use client";

import React from "react";
import clsx from "clsx";
import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import { TableCellAvatar } from "@/components/table/ui/table-cell-avatar";
import { TableCellHidden } from "@/components/table/ui/table-cell-hidden";
import { TableCellBadge } from "@/components/table/ui/table-cell-bagde";
import { TableCellStrong } from "@/components/table/ui/table-cell-strong";
import { TableCellFooter } from "@/components/table/ui/table-cell-footer";
import { StudentsTableFallback } from "./StudentsTableFallback";
import { TableCellNoData } from "@/components/table/ui/table-cell-no-data";
import TableCellAction from "@/components/table/ui/table-cell-action";
//
import { StudentsPipe } from "@/server/api/students/students.pipe";
import { useViewStudents } from "@/hooks/useViewStudents";

const StudentsTable = () => {
  const { data, handleDelete, isToBeDeleted } = useViewStudents();
  //
  return (
    <>
      {data ? (
        data.length > 0 ? (
          data.map((e, i) => {
            const studentPipe = StudentsPipe.transform(e);
            //
            return (
              <TableRow key={i} className={clsx(isToBeDeleted(e.id))}>
                <TableCellAvatar src={studentPipe.avatar_f} alt="Avatar" />
                {/*  */}
                <TableCellStrong>{studentPipe.display_name}</TableCellStrong>
                <TableCellBadge variant="secondary">
                  {studentPipe.student_number}
                </TableCellBadge>
                <TableCell>{studentPipe.date_of_birth_f}</TableCell>
                <TableCellHidden>{studentPipe.national_id_f}</TableCellHidden>
                {/*  */}
                <TableCellAction
                  id={studentPipe.id}
                  actions={[{ Delete: handleDelete }]}
                />
              </TableRow>
            );
          })
        ) : (
          <TableCellNoData />
        )
      ) : (
        <StudentsTableFallback n={5} />
      )}
      {/*  */}
      <TableCellFooter span={6} total={data?.length} />
    </>
  );
};

export default React.memo(StudentsTable);
