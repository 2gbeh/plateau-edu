import { CommonService } from "@/server/common/common.service";
import { TeacherService } from "./teacher.service";
import { ITeacher } from "./teacher.dto";

export class TeacherPipe {
  static transform(teacher: ITeacher) {
    return {
      ...teacher,
      ...CommonService.avatar(teacher?.avatar),
      ...CommonService.fullName(teacher.surname, teacher.other_names),
      ...CommonService.dateOfBirth(teacher.date_of_birth),
      ...CommonService.age(teacher.date_of_birth),
      ...CommonService.nationalId(teacher.national_id),
      ...CommonService.createdAt(teacher.created_at),
      //
      ...TeacherService.displayName(teacher),
      ...TeacherService.teacherNumber(teacher),
      ...TeacherService.salary(teacher),
    };
  }
}
