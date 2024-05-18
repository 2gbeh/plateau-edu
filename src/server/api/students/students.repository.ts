import { CommonRepository } from "@/server/common/common.repository";
import { IStudent } from "./students.dto";
import fakeStudents from "@/data/fake-students";

export class TeachersRepository extends CommonRepository<IStudent[]> {
  constructor(protected data: IStudent[]) {
    super(data);
  }
}

export const teachersRepository = new TeachersRepository(fakeStudents);
