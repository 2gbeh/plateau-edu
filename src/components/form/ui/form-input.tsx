import { FormLabel } from "./form-label";
import { formStyles } from "../form.util";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

export const FormInput = ({ label, name, ...rest }: IProps) => {
  return (
    <div className={formStyles.input_group}>
      {label && <FormLabel text={label} name={name} />}
      {/*  */}
      <input name={name} id={name} {...rest} className={formStyles.input} />
    </div>
  );
};
