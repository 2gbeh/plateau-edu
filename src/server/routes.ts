const baseURL = "/api/v1";

export const R = {
  ping: "/api",

  teachers: baseURL + "/teachers",

  students: baseURL + "/students",
} as const;
