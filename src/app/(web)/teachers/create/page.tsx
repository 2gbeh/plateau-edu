export const metadata = { title: "Add Teacher" };

import { FormCardWrapper } from "@/components/form/ui/form-card-wrapper";
import { FormFieldset } from "@/components/form/ui/form-fieldset";
import { FormInputGroup } from "@/components/form/ui/form-input-group";
import { FormInput } from "@/components/form/ui/form-input";
import { FormInputAmount } from "@/components/form/ui/form-input-amout";
import { FormSelect } from "@/components/form/ui/form-select";
import { ButtonVariants } from "@/components/button-variants";

import { CircleSlash, Save } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
/*
●  National ID number - required field
● Teacher Number - required

● Title - required can be either [Mr, Mrs, Miss, Dr, Prof]
● Surname - required
● Other Names - required

● Date of Birth - required - their age may not be less than 21
● Salary - optional 
● Email - 
● Phone No. - 
*/

export default function TeachersCreate() {
  return (
    <form>
      <FormCardWrapper h1="Add Teacher" p="Teacher biodata caption form">
        <fieldset disabled={false} className="flex flex-col gap-4">
          <FormInputGroup>
            <FormInput
              label="National ID*"
              type="number"
              name="national_id"
              required
            />
            <FormInput
              label="Teacher Number?Staff ID*"
              type="number"
              name="teacher_number"
              required
            />
          </FormInputGroup>
          {/*  */}
          <FormInputGroup>
            <FormSelect
              label="Title*"
              name="title"
              placeholder="Mr./Mrs./Miss"
              required
            />
            <FormInput
              label="Surname*"
              name="surname"
              placeholder="Family Name"
              required
            />
            <FormInput label="Other Names*" name="other_names" required />
          </FormInputGroup>
          {/*  */}
          <FormInputGroup>
            <FormInput
              label="Date of Birth*"
              type="date"
              name="date_of_birth"
              required
            />
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              placeholder="Ex. example@domain.com"
            />
            <FormInput
              label="Phone Number"
              type="tel"
              name="phone"
              placeholder="Ex. (123) 456-7890"
            />
            <FormInputAmount label="Salary" names={["currency", "salary"]} />
          </FormInputGroup>
        </fieldset>
      </FormCardWrapper>
    </form>
  );
}
