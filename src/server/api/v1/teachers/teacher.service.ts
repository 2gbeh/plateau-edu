import { $, abbr } from "@/utils";
import { ITeacher } from "./teacher.dto";

export class TeacherService {
  // Dr. Reichert, M.J.
  static displayName(teacher: ITeacher) {
    let [title, surname, other_names] = [
      teacher.title,
      teacher.surname,
      teacher.other_names,
    ];
    let initials = abbr(other_names, true);
    return {
      display_name: `${title} ${surname}, ${initials}`,
    };
  }

  static teacherNumber(teacher: ITeacher) {
    return { teacher_number_f: `EDU/STA/${teacher.teacher_number}` };
  }

  static salary(teacher: ITeacher) {
    return { salary_f: teacher?.salary ? $(teacher.salary) : "0.00" };
  }
}
