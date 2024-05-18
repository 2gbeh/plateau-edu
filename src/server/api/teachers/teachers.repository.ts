import { CommonRepository } from "@/server/common/common.repository";
import fakeTeachers from "@/data/fake-teachers";

export class TeachersRepository extends CommonRepository {
  constructor() {
    super(fakeTeachers);
  }
}

export const teachersRepository = new TeachersRepository();
