import { CommonService } from "@/server/common/common.service";
import { IStudent } from "./students.dto";
import { abbr } from "@/utils";

export class StudentsService extends CommonService {
  static avgAge(students: IStudent[]) {
    let sumOfAges = students.reduce(
      (T, student) => T + this.age(student.date_of_birth),
      0
    );
    //
    return Math.round(sumOfAges / students.length);
  }

  // Reichert, M.J.
  static displayName(student: IStudent) {
    let [surname, other_names] = [student.surname, student.other_names];
    let initials = abbr(other_names, true);
    return `${surname}, ${initials}`;
  }
}
