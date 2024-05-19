import { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { z, ZodError } from "zod";
import { zh } from "@/server/helpers/ZodHelper";
import { TitleEnum } from "@/server/enums/TitleEnum";
import M from "@/constants/MOCK";

export const TeacherSchema = z.object({
  title: zh.reqEnum("Title", TitleEnum),
  surname: zh.reqStrOnly("Surname"),
  other_names: zh.reqStrOnly("Other Names"),
  date_of_birth: zh.minYrs("Date of Birth", 21),
  national_id: zh.reqChar("National ID"),
  teacher_number: zh.reqFmt("Teacher Number", "EDU/STA/"),
  salary: zh.optNum("Salary"),
});

export type TeacherSchemaType = z.infer<typeof TeacherSchema>;
export type TeacherSchemaKey = keyof TeacherSchemaType;
export type TeacherSchemaFormControl = Control<Required<TeacherSchemaType>, any>;
export type TeacherSchemaFormRegister = UseFormRegister<TeacherSchemaType>;
export type TeacherSchemaFieldErrors = FieldErrors<TeacherSchemaType>;

export const TeacherSchemaDefaultValues = M.teachers_create
  ? {
      title: "Mr.",
      surname: "Tugbeh",
      other_names: "Emmanuel Osaretin",
      date_of_birth: "1992-09-15",
      national_id: "08169960927",
      teacher_number: "EDU/STA/159",
      salary: "650000",
    }
  : {
      title: "",
      surname: "",
      other_names: "",
      date_of_birth: "",
      national_id: "",
      teacher_number: "",
      salary: "",
    };
