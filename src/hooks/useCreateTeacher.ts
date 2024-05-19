import { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import M from "@/constants/MOCK";
import R from "@/server/routes";
import FetchHelper from "@/server/helpers/FetchHelper";
import { zzz } from "@/utils";
//
import {
  TeacherSchema,
  TeacherSchemaDefaultValues,
} from "@/server/api/teachers/teacher.shema";
import { CreateTeacherDto } from "@/server/api/teachers/teachers.dto";

export function useCreateTeacher() {
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

  const handlePost: SubmitHandler<CreateTeacherDto> = async (formData) => {
    M.teachers_create && console.log("🚀 ~ formData:", formData);
    // return
    let raw = await fetch(R.teachers, FetchHelper.post(formData));
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
    handlePost,
  };
}
