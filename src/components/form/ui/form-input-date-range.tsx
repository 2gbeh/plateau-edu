import { FormInput } from "./form-input";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labels: string[];
  names: string[];
}

export const FormInputDateRange = ({ labels, names, ...rest }: IProps) => {
  let [labelFrom, labelTo] = labels;
  let [nameFrom, nameTo] = names;
  //
  return (
    <div className="flex-center-between gap-4">
      <div className="flex-1">
        <FormInput label={labelFrom} type="date" name={nameFrom} />
      </div>
      <div className="flex-1">
        <FormInput label={labelTo} type="date" name={nameTo} />
      </div>
    </div>
  );
};
