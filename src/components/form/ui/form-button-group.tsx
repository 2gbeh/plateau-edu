import clsx from "clsx";
import { Button } from "@/components/shadcn/ui/button";

interface IProps {
  value?: string;
  hasPadding?: boolean;
  hasBorder?: boolean;
}

export const FormButtonGroup = ({
  value = "+ Save & Close",
  hasPadding = true,
  hasBorder = true,
}: IProps) => {
  return (
    <section
      className={clsx({
        "flex-center-end gap-5 mt-0 pt-4": true,
        "px-8": hasPadding,
        "border-t": hasBorder,
      })}
    >
      <Button variant="outline">Cancel</Button>
      <Button variant="default">{value}</Button>
    </section>
  );
};
