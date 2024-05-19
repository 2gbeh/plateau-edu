"use client";

import React from "react";
import clsx from "clsx";
import { TableCell, TableRow } from "@/components/shadcn/ui/table";
import { TableCellAvatar } from "@/components/table/ui/table-cell-avatar";
import { TableCellHidden } from "@/components/table/ui/table-cell-hidden";
import { TableCellBadge } from "@/components/table/ui/table-cell-bagde";
import { TableCellStrong } from "@/components/table/ui/table-cell-strong";
import { TableCellFooter } from "@/components/table/ui/table-cell-footer";
import { TeachersTableFallback } from "./TeachersTableFallback";
import { TableCellNoData } from "@/components/table/ui/table-cell-no-data";
import TableCellAction from "@/components/table/ui/table-cell-action";
//
import { TeachersPipe } from "@/server/api/teachers/teachers.pipe";
import { useViewTeachers } from "@/hooks/useViewTeachers";

const TeachersTable = () => {
  const { data, handleDelete, isToBeDeleted } = useViewTeachers();
  //
  return (
    <>
      {data ? (
        data.length > 0 ? (
          data.map((e, i) => {
            const teacherPipe = TeachersPipe.transform(e);
            //
            return (
              <TableRow key={i} className={clsx(isToBeDeleted(e.id))}>
                <TableCellAvatar src={teacherPipe.avatar_f} alt="Avatar" />
                {/*  */}
                <TableCellStrong>{teacherPipe.display_name}</TableCellStrong>
                <TableCellBadge variant="secondary">
                  {teacherPipe.teacher_number}
                </TableCellBadge>
                <TableCellHidden>{teacherPipe.date_of_birth_f}</TableCellHidden>
                <TableCellHidden>{teacherPipe.national_id_f}</TableCellHidden>
                <TableCell>$ {teacherPipe.salary_f}</TableCell>
                {/*  */}
                <TableCellAction
                  id={teacherPipe.id}
                  actions={[{ Delete: handleDelete }]}
                />
              </TableRow>
            );
          })
        ) : (
          <TableCellNoData />
        )
      ) : (
        <TeachersTableFallback n={5} />
      )}
      {/*  */}
      <TableCellFooter span={6} total={data?.length} />
    </>
  );
};

export default React.memo(TeachersTable);
