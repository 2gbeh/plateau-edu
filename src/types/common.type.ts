export type TProps = Record<string, unknown>;

export type TPrimaryKey = string | number;

export type TList = string[];

export type TDocument = Record<string, unknown>;

export type TCollection = TDocument[];

export type TButtonVariant =
  | "default"
  | "destructive"
  | "ghost"
  | "link"
  | "outline"
  | "secondary";

export type TBadgeVariant = "default" | "destructive" | "outline" | "secondary";

export enum EGender {
  M = "Male",
  F = "Female",
}

// "M" | "F"
export type TGenderKeys = keyof typeof EGender;

// "Male" | "Female"
export type TGenderValues = `${EGender}`;

export type TDialog = {
  h1: string;
  p: string;
  success: boolean;
};
