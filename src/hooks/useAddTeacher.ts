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
} from "@/server/api/teachers/teacher.schema";
import { CreateTeacherDto } from "@/server/api/teachers/teachers.dto";

export function useAddTeacher() {
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
    // console.log("🚀 ~ formData:", formData);
    // return
    let res = await FetchHelper.store(R.teachers, formData);
    if (res.success) {
      alert(res.data.id);
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
