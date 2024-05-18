import { ICommonTeacherStudent } from "@/server/common/dto/common-teacher-student.dto";
import { ICommon } from "@/server/common/dto/common.dto";

export interface ITeacher extends ICommonTeacherStudent {
  title: string;
  teacher_number: string;
  salary?: number | string;
}

export interface ITeacherRequestContext {
  params: {
    teacher_id: string;
  };
}

export type CreateTeacherDto = Omit<ITeacher, keyof ICommon>;

