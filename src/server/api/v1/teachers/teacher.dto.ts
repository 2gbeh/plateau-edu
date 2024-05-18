import { ICommon } from "@/server/common/common.dto";

export interface ITeacher extends ICommon {
  avatar?: string;
  title: string;
  surname: string;
  other_names: string;
  date_of_birth: string | Date;
  national_id: string;
  teacher_number: string;
  salary?: number | string;
}
