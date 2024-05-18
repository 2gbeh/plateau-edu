import { Tiptoe } from "@/components/tiptoe";

interface IProps {
  text: string;
  name?: string;
}

export const FormLabel = ({ text, name }: IProps) => {
  let [tip, text_f, isRequired, hasTooltip] = [
    "",
    text,
    text.endsWith("*"),
    text.includes("?"),
  ];
  text_f = isRequired ? text_f.slice(0, -1) : text_f;
  [text_f, tip] = hasTooltip
    ? [text_f.split("?")[0], text_f.split("?")[1]]
    : [text_f, ""];
  //
  return (
    <label
      htmlFor={name}
      className="text-sm mb-2 px-1 font-semibold_ flex-center"
    >
      {text_f}

      {/* TOOLTIP */}
      {hasTooltip && <Tiptoe text={tip} />}

      {/* REQUIRED */}
      {isRequired && <b className="text-red-500 ml-1">*</b>}
    </label>
  );
};
