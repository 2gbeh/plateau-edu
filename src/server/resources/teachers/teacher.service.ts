import { $, abbr } from "@/utils";
import { CommonService } from "@/server/common/common.service";
import { ITeacher } from "./teacher.dto";

export class TeacherService extends CommonService {
  static avgSalary(teachers: ITeacher[]) {
    let sumOfSalaries = teachers.reduce(
      (T, teacher) => T + Number(teacher.salary),
      0
    );
    return $(Math.round(sumOfSalaries / teachers.length));
  }

  // Dr. Reichert, M.J.
  static displayName(teacher: ITeacher) {
    let [title, surname, other_names] = [
      teacher.title,
      teacher.surname,
      teacher.other_names,
    ];
    let initials = abbr(other_names, true);
    return `${title} ${surname}, ${initials}`;
  }

  static teacherNumber(teacher: ITeacher) {
    return `EDU/STA/${teacher.teacher_number}`;
  }

  static salary(teacher: ITeacher) {
    return teacher?.salary ? $(teacher.salary) : "0.00";
  }
}
