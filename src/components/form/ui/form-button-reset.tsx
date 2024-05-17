import { Button } from "@/components/shadcn/ui/button";

export const FormButtonReset = ({ text = "Cancel" }: { text?: string }) => {
  return <Button variant="outline">{text}</Button>;
};
