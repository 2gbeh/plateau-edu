export interface ITeacher {
  id: string;
  avatar?: string;
  title: string;
  surname: string;
  other_names: string;
  date_of_birth: string | Date;
  national_id: string;
  teacher_number: string;
  salary?: number | string;
  created_at: string | Date;
}
