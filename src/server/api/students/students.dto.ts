import { ICommonTeacherStudent } from "@/server/common/dto/common-teacher-student.dto";
import { ICommon } from "@/server/common/dto/common.dto";

export interface IStudent extends ICommonTeacherStudent {
  student_number: string;
}

export interface IStudentRequestContext {
  params: {
    student_id: string;
  };
}

export type CreateStudentDto = Omit<IStudent, keyof ICommon>;

export type UpdateStudentDto = Partial<CreateStudentDto>;

