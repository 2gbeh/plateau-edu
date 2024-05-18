import { CommonRepository } from "@/server/common/common.repository";
import fakeStudents from "@/data/fake-students";

export class StudentsRepository extends CommonRepository {
  constructor() {
    super(fakeStudents);
  }
}

export const studentsRepository = new StudentsRepository();
