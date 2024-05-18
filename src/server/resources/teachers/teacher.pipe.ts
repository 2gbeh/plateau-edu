import { ITeacher } from "./teacher.dto";
import { TeacherService } from "./teacher.service";

export class TeacherPipe extends TeacherService {
  static transform(teacher: ITeacher) {
    return {
      ...teacher,
      avatar_f: this.avatar(teacher?.avatar),
      full_name: this.fullName(teacher.surname, teacher.other_names),
      display_name: this.displayName(teacher),
      date_of_birth_f: this.dateOfBirth(teacher.date_of_birth),
      age: this.age(teacher.date_of_birth),
      national_id_f: this.nationalId(teacher.national_id),
      teacher_number_f: this.teacherNumber(teacher),
      salary_f: this.salary(teacher),
      created_at_f: this.createdAt(teacher.created_at),
    };
  }
}
