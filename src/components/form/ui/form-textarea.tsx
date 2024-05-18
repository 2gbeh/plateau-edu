import { FormLabel } from "./form-label";
import { formStyles } from "../form.util";

interface IProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export const FormTextarea = ({ label, name, ...props }: IProps) => {
  return (
    <div className={formStyles.input_group}>
      <FormLabel text={label} name={name} />
      {/*  */}
      <textarea
        rows={4}
        name={name}
        id={name}
        {...props}
        className={formStyles.input}
      ></textarea>
    </div>
  );
};
