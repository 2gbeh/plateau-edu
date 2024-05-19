import { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { z } from "zod";
import { zh } from "@/server/helpers/ZodHelper";

export const studentDefaultValues = {
  surname: "Ehiaghe",
  other_names: "Sandra",
  date_of_birth: "1995-11-15",
  national_id: "07066157335",
  student_number: "EDU/STU/151195",
};

export const StudentSchema = z.object({
  surname: zh.reqStr("Surname"),
  other_names: zh.reqStr("Other Names"),
  date_of_birth: zh.maxYrs("Date of Birth", 22),
  national_id: zh.reqChar("National ID"),
  student_number: zh.reqFmt("Student Number", "EDU/STU/"),
});
