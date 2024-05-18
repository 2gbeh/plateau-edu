import { ICommonTeacherStudent } from "@/server/common/dto/common-teacher-student.dto";

export interface ITeacher extends ICommonTeacherStudent {
  title: string;
  teacher_number: string;
  salary?: number | string;
}
