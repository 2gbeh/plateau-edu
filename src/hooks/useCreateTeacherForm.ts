import { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
//
import { zzz } from "@/utils";
import { R } from "@/server/routes";
import RequestHelper from "@/server/helpers/RequestHelper";
import {
  TeacherSchema,
  TeacherSchemaDefaultValues,
} from "@/server/api/teachers/teacher.shema";
import { CreateTeacherDto } from "@/server/api/teachers/teachers.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import M from "@/constants/MOCK";

export function useCreateTeacherForm() {
  const router = useRouter();
  const {
    control,
    formState: { errors, isSubmitting },
    register,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(TeacherSchema),
    defaultValues: TeacherSchemaDefaultValues,
  });

  const createTeacher: SubmitHandler<CreateTeacherDto> = async (formData) => {
    console.log("🚀 ~ constcreateTeacher:SubmitHandler<CreateTeacherDto>= ~ formData:", formData, errors)
    return
    let raw = await fetch(R.teachers, RequestHelper.post(formData));
    let res = await raw.json();
    if (res.success) {
      alert("OK");
      console.log(res.data);
      reset();
    } else {
      alert(res.message);
    }
  };

  return {
    control,
    errors,
    isSubmitting,
    register,
    setValue,
    handleSubmit,
    reset,
    //
    createTeacher,
  };
}
