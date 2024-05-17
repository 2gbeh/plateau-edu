import { FormLabel } from "./form-label";
import { formStyles } from "../form.util";
import clsx from "clsx";

interface IProps {
  label: string;
  name: string;
  placeholder?: string;
  unit: string;
}

export const FormInputUnit = ({
  label,
  name,
  placeholder = "0.00",
  unit,
}: IProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex-center-between">
        <FormLabel text={label} name={name} />
      </div>
      {/*  */}
      <div className="flex-center gap-1">
        <input
          type="number"
          name={name}
          id={name}
          placeholder={placeholder}
          className={formStyles.input_unit_input}
        />
        <div className={formStyles.input_unit_hint}>{unit}</div>
      </div>
    </div>
  );
};
