import { z, type EnumLike } from "zod";

export default class ZodHelper {
  static reqStr = (label: string, min = 2) =>
    z
      .string({
        required_error: `${label} is required.`,
        invalid_type_error: `${label} can not be numeric.`,
      })
      .trim()
      .min(min, `${label} must be at least ${min} char(s) long.`);

  static optNum = (label: string) =>
    z.coerce
      .number({
        invalid_type_error: `${label} should be a numeric value.`,
      })
      .optional();

  static reqChar = (label: string, len = 11) =>
    z.coerce
      .string({
        required_error: `${label} is required.`,
      })
      .trim()
      .length(len, `${label} must be ${len} char(s) long.`);

  static reqEnum = (label: string, enumeratedType: EnumLike) =>
    z.nativeEnum(enumeratedType, {
      errorMap: (issue, { defaultError }) => ({
        message:
          issue.code === "invalid_enum_value"
            ? `${label} is required, select one option.`
            : issue.code,
      }),
    });

  static minYrs = (label: string, age = 18) =>
    z.coerce
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_date"
              ? `${label} is required.`
              : defaultError,
        }),
      })
      .refine(
        (val) => new Date().getFullYear() - new Date(val).getFullYear() >= age,
        `${label} must not be less than ${age} years ago.`
      );

  static maxYrs = (label: string, age = 18) =>
    z.coerce
      .date({
        errorMap: (issue, { defaultError }) => ({
          message:
            issue.code === "invalid_date"
              ? `${label} is required.`
              : defaultError,
        }),
      })
      .refine(
        (val) => new Date().getFullYear() - new Date(val).getFullYear() <= age,
        `${label} must not be more than ${age} years ago.`
      );

  static reqFmt = (label: string, format: string, len = 11) =>
    z
      .string({
        required_error: `${label} is required.`,
      })
      .trim()
      .length(len, `${label} must be ${len} char(s) long.`)
      .refine((val) => val.search(new RegExp(format, "i")) > -1, {
        message: `Invalid ${label} format.`,
      });
}

export const zh = ZodHelper;
