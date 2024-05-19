"use client";

import React from "react";
import { FormWrapper, formUtil } from "@/components/form/ui/form-wrapper";
import { FormGrid } from "@/components/form/ui/form-grid";
import { FormGroup } from "@/components/form/ui/form-group";
import { FormLabel } from "@/components/form/ui/form-label";
import { FormError } from "@/components/form/ui/form-error";
//
import { TitleEnumAsArray } from "@/server/enums/TitleEnum";
import { StudentSchemaKey } from "@/server/api/students/student.schema";
import { useAddStudent } from "@/hooks/useAddStudent";

const StudentsCreateForm = () => {
  const {
    control,
    errors,
    isSubmitting,
    register,
    setValue,
    handleSubmit,
    reset,
    //
    handlePost,
  } = useAddStudent();
  //
  return (
    <FormWrapper
      h1="Add Student"
      p="Student biodata caption form"
      onSubmit={handleSubmit(handlePost)}
      disabled={isSubmitting}
    >
      {/* //////////////////////////////////////////////////////////// */}
      <FormGrid>
        {["national_id"].map((name) => (
          <FormGroup key={name}>
            <FormLabel text="National ID*" id={name} />
            <input
              {...register(name as any)}
              type="number"
              id={name}
              required
              className={formUtil.styles.input}
            />
            <FormError error={errors[name as StudentSchemaKey]} />
          </FormGroup>
        ))}
        {["student_number"].map((name) => (
          <FormGroup key={name}>
            <FormLabel text="Student Number?Student ID*" id={name} />
            <input
              {...register(name as any)}
              type="search"
              id={name}
              placeholder="Ex. EDU/STU/015"
              required
              className={formUtil.styles.input}
            />
            <FormError error={errors[name as StudentSchemaKey]} />
          </FormGroup>
        ))}
      </FormGrid>
      {/* //////////////////////////////////////////////////////////// */}
      <FormGrid>
        {["surname"].map((name) => (
          <FormGroup key={name}>
            <FormLabel text="Surname*" id={name} />
            <input
              {...register(name as any)}
              id={name}
              placeholder="Family Name"
              required
              className={formUtil.styles.input}
            />
            <FormError error={errors[name as StudentSchemaKey]} />
          </FormGroup>
        ))}
        {["other_names"].map((name) => (
          <FormGroup key={name}>
            <FormLabel text="Other Names*" id={name} />
            <input
              {...register(name as any)}
              id={name}
              required
              className={formUtil.styles.input}
            />
            <FormError error={errors[name as StudentSchemaKey]} />
          </FormGroup>
        ))}
        {["date_of_birth"].map((name) => (
          <FormGroup key={name}>
            <FormLabel text="Date of Birth*" id={name} />
            <input
              {...register(name as any)}
              type="date"
              id={name}
              required
              className={formUtil.styles.input}
            />
            <FormError error={errors[name as StudentSchemaKey]} />
          </FormGroup>
        ))}
      </FormGrid>
    </FormWrapper>
  );
};

export default React.memo(StudentsCreateForm);
