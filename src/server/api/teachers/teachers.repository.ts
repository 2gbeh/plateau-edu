import { CommonRepository } from "@/server/common/common.repository";
import { ITeacher } from "./teachers.dto";

export class TeachersRepository {
  constructor(private readonly commonRepository: CommonRepository) {}
}
