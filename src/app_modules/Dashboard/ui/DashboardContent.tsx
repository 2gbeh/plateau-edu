"use client";

import React from "react";
import { DashboardStatCard } from "@/app_modules/Dashboard/ui/DashboardStatCard";
import { DashboardTeachersTable } from "@/app_modules/Dashboard/ui/DashboardTeachersTable";
import { DashboardStudentsList } from "@/app_modules/Dashboard/ui/DashboardStudentsList";
//
import { useDashboard } from "@/hooks/useDashboard";

export const DashboardContent = () => {
  const { dataTeachers, dataStudents } = useDashboard();
  //
  return (
    <>
      <DashboardStatCard data={[dataTeachers, dataStudents]} />
      {/*  */}
      <div className="grid-1-6 gap-10 mt-6">
        <div className="col-span-4">
          <DashboardTeachersTable data={dataTeachers} />
        </div>
        <div className="sm:col-span-2 col-span-4">
          <DashboardStudentsList data={dataStudents} />
        </div>
      </div>
    </>
  );
};

export default React.memo(DashboardContent);
