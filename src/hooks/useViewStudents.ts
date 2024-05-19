import { useEffect, useMemo, useState } from "react";
import { useOptimisticDelete } from "./useOptimisticDelete";
import M from "@/constants/MOCK";
import R from "@/server/routes";
import FetchHelper from "@/server/helpers/FetchHelper";
import { zzz } from "@/utils";
//
import { TPrimaryKey } from "@/types/common.type";
import fakeStudents from "@/data/fake-students";
import { IStudent } from "@/server/api/students/students.dto";

export function useViewStudents() {
  const [data, setData] = useState<null | IStudent[]>(null);
  const { isToBeDeleted, toggleToBeDeleted } = useOptimisticDelete();

  const handleDelete = async (id: TPrimaryKey) => {
    toggleToBeDeleted(id);
    //
    let res = await FetchHelper.destroy(R.students, id);
    if (res.success) {
      // alert(res.data.avatar);
      handleGet();
    } else {
      // alert(res.message);
    }
    //
    toggleToBeDeleted();
  };

  const handleGet = async () => {
    if (M.students) {
      await zzz();
      setData(fakeStudents);
    } else {
      let res = await FetchHelper.index(R.students);
      if (res.success) {
        setData(res.data);
      } else {
        setData([]);
      }
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return {
    data,
    handleDelete,
    isToBeDeleted,
  };
}
