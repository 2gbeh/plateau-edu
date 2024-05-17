interface IProps {
  text: string;
  name?: string;
}

export const FormLabel = ({ text, name }: IProps) => {
  let isRequired = text.endsWith("*");
  //
  return (
    <label htmlFor={name} className="text-sm mb-2 px-1 font-semibold_">
      {isRequired ? text.slice(0, -1) : text}
      {isRequired && <b className="text-red-500 ml-1">*</b>}
    </label>
  );
};
