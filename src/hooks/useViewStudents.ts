import { useEffect, useMemo, useState } from "react";
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
  const [fetching, isFetching] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState<TPrimaryKey>("");

  const handleDelete = async (id: TPrimaryKey) => {
    setToBeDeleted(id);
    //
    let res = await FetchHelper.destroy(R.students, id);
    if (res.success) {
      alert(res.data.avatar);
      handleGet();
    } else {
      alert(res.message);
    }
    //
    setToBeDeleted("");
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
    toBeDeleted,
  };
}
