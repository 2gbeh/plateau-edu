import { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import M from "@/constants/MOCK";
import R from "@/server/routes";
import FetchHelper from "@/server/helpers/FetchHelper";
import { zzz } from "@/utils";
//
import {
  StudentSchema,
  StudentSchemaDefaultValues,
} from "@/server/api/students/student.schema";
import { CreateStudentDto } from "@/server/api/students/students.dto";

export function useAddStudent() {
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
    resolver: zodResolver(StudentSchema),
    defaultValues: StudentSchemaDefaultValues,
  });

  const handlePost: SubmitHandler<CreateStudentDto> = async (formData) => {
    // console.log("🚀 ~ formData:", formData);
    // return
    let res = await FetchHelper.store(R.students, formData);
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
