"use client";

import React from "react";
import { FormWrapper, formUtil } from "@/components/form/ui/form-wrapper";
import { FormGrid } from "@/components/form/ui/form-grid";
import { FormGroup } from "@/components/form/ui/form-group";
import { FormLabel } from "@/components/form/ui/form-label";
import { FormError } from "@/components/form/ui/form-error";
import XModal from "@/components/x-modal";
import XDialog from "@/components/x-dialog";
//
import { TitleEnumAsArray } from "@/server/enums/TitleEnum";
import { TeacherSchemaKey } from "@/server/api/teachers/teacher.schema";
import { useAddTeacher } from "@/hooks/useAddTeacher";

const TeachersCreateForm = () => {
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
    dialog,
    showModal,
    toggleModal,
  } = useAddTeacher();
  return (
    <>
      <XModal show={showModal} onClose={toggleModal}>
        <XDialog
          h1={dialog?.h1}
          p={dialog?.p}
          success={dialog?.success}
          confirm={{ OK: toggleModal }}
        />
      </XModal>
      {/* //////////////////////////////////////////// */}
      <FormWrapper
        h1="Add Teacher"
        p="Teacher biodata caption form"
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
              <FormError error={errors[name as TeacherSchemaKey]} />
            </FormGroup>
          ))}
          {["teacher_number"].map((name) => (
            <FormGroup key={name}>
              <FormLabel text="Teacher Number?Staff ID*" id={name} />
              <input
                {...register(name as any)}
                type="search"
                id={name}
                placeholder="Ex. EDU/STA/015"
                required
                className={formUtil.styles.input}
              />
              <FormError error={errors[name as TeacherSchemaKey]} />
            </FormGroup>
          ))}
        </FormGrid>
        {/* //////////////////////////////////////////////////////////// */}
        <FormGrid>
          {["title"].map((name) => (
            <FormGroup key={name}>
              <FormLabel text="Title*" id={name} />
              <select
                {...register(name as any)}
                id={name}
                defaultValue="Mr./Mrs./Miss"
                required
                className={formUtil.styles.input}
              >
                <option>Mr./Mrs./Miss</option>
                {TitleEnumAsArray?.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
              <FormError error={errors[name as TeacherSchemaKey]} />
            </FormGroup>
          ))}
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
              <FormError error={errors[name as TeacherSchemaKey]} />
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
              <FormError error={errors[name as TeacherSchemaKey]} />
            </FormGroup>
          ))}
        </FormGrid>
        {/* //////////////////////////////////////////////////////////// */}
        <FormGrid>
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
              <FormError error={errors[name as TeacherSchemaKey]} />
            </FormGroup>
          ))}
          {["salary"].map((name) => (
            <FormGroup key={name}>
              <FormLabel text="Salary" id={name} />
              <input
                {...register(name as any)}
                type="number"
                id={name}
                placeholder="0.00"
                className={formUtil.styles.input}
              />
              <FormError error={errors[name as TeacherSchemaKey]} />
            </FormGroup>
          ))}
        </FormGrid>
      </FormWrapper>
    </>
  );
};

export default React.memo(TeachersCreateForm);
