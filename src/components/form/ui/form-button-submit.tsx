import { Button } from "@/components/shadcn/ui/button";

export const FormButtonSubmit = ({
  text = "+ Save & Close",
}: {
  text?: string;
}) => {
  return <Button variant="default">{text}</Button>;
};
