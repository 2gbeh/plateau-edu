import { IStudent } from "./students.dto";
import { StudentsService } from "./students.service";

export class StudentsPipe extends StudentsService {
  static transform(student: IStudent) {
    return {
      ...student,
      avatar_f: this.avatar(student?.avatar),
      full_name: this.fullName(student.surname, student.other_names),
      display_name: this.displayName(student),
      date_of_birth_f: this.dateOfBirth(student.date_of_birth),
      age: this.age(student.date_of_birth),
      national_id_f: this.nationalId(student.national_id),
      created_at_f: this.createdAt(student.created_at),
    };
  }
}
