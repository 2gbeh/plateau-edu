import { FieldError } from "react-hook-form";

interface IProps {
  error?: FieldError;
}

export const FormError = ({ error }: IProps) => {
  return (
    error && (
      <p className="text-[12px] text-red-500 block px-1 pt-1">
        {error?.message}
      </p>
    )
  );
};
