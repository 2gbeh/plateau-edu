import { useEffect, useMemo, useState } from "react";
import M from "@/constants/MOCK";
import R from "@/server/routes";
import FetchHelper from "@/server/helpers/FetchHelper";
import { zzz } from "@/utils";
//
import fakeTeachers from "@/data/fake-teachers";
import fakeStudents from "@/data/fake-students";
import { ITeacher } from "@/server/api/teachers/teachers.dto";
import { IStudent } from "@/server/api/students/students.dto";

export function useDashboard() {
  const [dataTeachers, setDataTeachers] = useState<null | ITeacher[]>(null);
  const [dataStudents, setDataStudents] = useState<null | IStudent[]>(null);

  const handleGet = async () => {
    if (M.dashboard) {
      await zzz();
      setDataTeachers(fakeTeachers);
      setDataStudents(fakeStudents);
    } else {
      let [resTeachers, resStudents] = await Promise.all([
        FetchHelper.index(R.teachers),
        FetchHelper.index(R.students),
      ]);
      // 
      if (resTeachers.success) {
        setDataTeachers(resTeachers.data);
      } else {
        setDataTeachers([]);
      }
      if (resStudents.success) {
        setDataTeachers(resStudents.data);
      } else {
        setDataStudents([]);
      }
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return {
    dataTeachers,
    dataStudents,
  };
}
