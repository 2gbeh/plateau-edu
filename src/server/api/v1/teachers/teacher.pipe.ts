import { $, age, abbr } from "@/utils";
import date from "@/utils/phpDateFormat";
//
import { ITeacher } from "./teacher.dto";

export class TeacherPipe {
  static transform(teacher: ITeacher) {
    return {
      ...teacher,
      avatar_f: teacher?.avatar || "/images/avatar-flat.png",
      display_name: `${teacher.title} ${teacher.surname}, ${abbr(
        teacher.other_names,
        true
      )}`,
      full_name: `${teacher.surname} ${teacher.other_names}`,
      age: age(teacher.date_of_birth),
      date_of_birth_f: date(
        teacher.date_of_birth as string,
        "M j, Y"
      ) as string,
      national_id_f: `${teacher.national_id.slice(
        0,
        2
      )}-${teacher.national_id.slice(2, 10)}-${teacher.national_id.slice(-1)}`,
      teacher_number_f: `EDU/STA/${teacher.teacher_number}`,
      salary_f: teacher?.salary ? $(teacher.salary) : "0.00",
      created_at_f: date(teacher.created_at as string, "M j") as string,
    };
  }
}
