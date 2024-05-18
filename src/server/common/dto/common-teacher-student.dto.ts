import { ICommon } from "./common.dto";

export interface ICommonTeacherStudent extends ICommon {
  avatar?: string;
  surname: string;
  other_names: string;
  date_of_birth: string | Date;
  national_id: string;
}
