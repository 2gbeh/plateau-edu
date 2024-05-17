import { FormLabel } from "./form-label";
import { formStyles } from "../form.util";
import { TList } from "@/types/common.type";

type TOptionsObject = {
  value: string | number;
  label: string;
};
interface IProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  placeholder?: string;
  options?: TList | TOptionsObject[];
}

export const FormSelect = ({
  label,
  name,
  placeholder,
  options,
  ...rest
}: IProps) => {
  return (
    <div className={formStyles.input_group}>
      <FormLabel text={label} name={name} />
      {/*  */}
      <select name={name} id={name} {...rest} className={formStyles.input}>
        <option value="null" hidden>
          {placeholder ?? ""}
        </option>

        {/* OPTIONS */}
        {options?.map((e, i) => {
          let [text, value] = (e as TOptionsObject).value
            ? [(e as TOptionsObject).label, (e as TOptionsObject).value]
            : [e, e];
          return (
            <option key={i} value={value as string}>
              {text as string}
            </option>
          );
        })}
      </select>
    </div>
  );
};
