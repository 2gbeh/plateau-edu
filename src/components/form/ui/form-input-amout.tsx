import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { FormLabel } from "./form-label";
import { formStyles } from "../form.util";
import clsx from "clsx";

interface IProps {
  label: string;
  names: string[];
  placeholders?: string[];
  itemize?: boolean;
}

export const FormInputAmount = ({
  label,
  names,
  placeholders = ["USD", "0.00"],
  itemize,
}: IProps) => {
  let [selectName, inputName] = names;
  let [selectPlaceholder, inputPlaceholder] = placeholders;
  //
  return (
    <div className="flex flex-col">
      <div className="flex-center-between">
        <FormLabel text={label} name={inputName} />
        {itemize && (
          <Link
            href="#"
            className="text-primary flex-center gap-1 text-sm mr-1"
          >
            <ClipboardList className="dim-4" />
            Itemize
          </Link>
        )}
      </div>
      {/*  */}
      <div className="flex-center gap-1">
        <select
          name={selectName}
          required
          className={formStyles.input_amount_select}
        >
          <option value="null" hidden>
            {selectPlaceholder ?? ""}
          </option>
        </select>
        <input
          type="number"
          name={inputName}
          id={inputName}
          placeholder={inputPlaceholder}
          className={formStyles.input_amount_input}
        />
      </div>
    </div>
  );
};
