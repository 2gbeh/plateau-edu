import { CommonService } from "@/server/common/common.service";
import { IStudent } from "./student.dto";

export class StudentService extends CommonService {
  static avgAge(students: IStudent[]) {
    let sumOfAges = students.reduce(
      (T, student) => T + this.age(student.date_of_birth),
      0
    );
    //
    return Math.round(sumOfAges / students.length);
  }
}
