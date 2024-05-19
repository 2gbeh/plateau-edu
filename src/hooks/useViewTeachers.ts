import { useEffect, useMemo, useState } from "react";
import M from "@/constants/MOCK";
import R from "@/server/routes";
import FetchHelper from "@/server/helpers/FetchHelper";
import { zzz } from "@/utils";
//
import { TPrimaryKey } from "@/types/common.type";
import fakeTeachers from "@/data/fake-teachers";
import { ITeacher } from "@/server/api/teachers/teachers.dto";

export function useViewTeachers() {
  const [data, setData] = useState<null | ITeacher[]>(null);
  const [fetching, isFetching] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState<TPrimaryKey>("");

  const handleDelete = async (id: TPrimaryKey) => {
    setToBeDeleted(id);
    //
    let res = await FetchHelper.destroy(R.teachers, id);
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
    if (M.teachers) {
      await zzz();
      setData(fakeTeachers);
    } else {
      let res = await FetchHelper.index(R.teachers);
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
