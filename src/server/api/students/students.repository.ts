import { CommonRepository } from "@/server/common/common.repository";
import { IStudent } from "./students.dto";

export class StudentsRepository {
  constructor(private readonly commonRepository: CommonRepository) {}
}
