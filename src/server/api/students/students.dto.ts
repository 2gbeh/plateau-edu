import { ICommonTeacherStudent } from "@/server/common/dto/common-teacher-student.dto";

export interface IStudent extends ICommonTeacherStudent {
  student_number: string;
}
