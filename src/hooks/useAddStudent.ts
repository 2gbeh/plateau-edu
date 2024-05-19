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
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);
  const [dialog, setDialog] = useState({
    h1: "Record Created",
    p: "Visit the View Students page to see newly added records.",
    success: true,
  });
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
      reset();
    } else {
      alert(res.message);
      setDialog({
        h1: "Server Error",
        p: JSON.stringify(res.message),
        success: false,
      });
    }
    toggleModal();
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
    dialog,
    showModal,
    toggleModal,
  };
}
