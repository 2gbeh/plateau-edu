import { useEffect, useMemo, useState } from "react";
import M from "@/constants/MOCK";
import R from "@/server/routes";
import FetchHelper from "@/server/helpers/FetchHelper";
import { zzz } from "@/utils";
//
import fakeTeachers from "@/data/fake-teachers";
import { ITeacher } from "@/server/api/teachers/teachers.dto";

export function useFetchTeachers() {
  const [data, setData] = useState<null | ITeacher[]>(null);

  const onMount = async () => {
    let raw = await fetch(R.teachers);
    let res = await raw.json();
    if (res.success) {
      setData(res.data);
    } else {
      setData([]);
    }
  };

  const mockOnMount = async () => {
    await zzz();
    setData(fakeTeachers);
  };

  useEffect(() => {
    M.teachers ? mockOnMount() : onMount();
  }, []);

  return {
    data,
  };
}
