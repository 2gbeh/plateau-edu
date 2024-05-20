import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import FetchHelper from "@/server/helpers/FetchHelper";
import { TeacherSchemaDefaultValues } from "@/server/api/teachers/teacher.schema";
import { useAddTeacher } from "@/hooks/useAddTeacher";
import fakeTeachers from "@/data/fake-teachers";
import { storeMock } from "@/server/helpers/FetchHelper/FetchHelper.mock";

describe("useAddTeacher", () => {
  beforeAll(() => {
    storeMock(fakeTeachers[0]);
  });

  it("should succesfully create a teacher", async () => {
    const { result } = renderHook(useAddTeacher);

    act(() => {
      result.current.handlePost(TeacherSchemaDefaultValues);
    });

    await waitFor(() => {
      expect(result.current.showModal).toBe(true);
      expect(result.current.dialog.success).toBe(true);
    });
  });

  it("should not create a teacher", async () => {
    storeMock("E nor work!", false);

    const { result } = renderHook(useAddTeacher);

    act(() => {
      result.current.handlePost(TeacherSchemaDefaultValues);
    });

    await waitFor(() => {
      expect(result.current.showModal).toBe(true);
      expect(result.current.dialog.success).toBe(false);
      expect(result.current.dialog.p).toBe(JSON.stringify("E nor work!"));
    });
  });
});
