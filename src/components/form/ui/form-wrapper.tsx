export * as formUtil from "../form.util";

import { CircleSlash, Save } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { Loading, LoadingAlt, Buffer, Spinner } from "@/components/loaders";

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  h1?: string;
  p?: string;
  disabled?: boolean;
}

export const FormWrapper = ({
  children,
  h1,
  p,
  disabled,
  ...props
}: IProps) => {
  return (
    <form {...props} autoComplete="off">
      <CardHeader>
        {h1 && <CardTitle>{h1}</CardTitle>}
        {p && <CardDescription>{p}</CardDescription>}
      </CardHeader>

      {/* CONTROLS */}
      <CardContent>
        <fieldset disabled={disabled} className="flex flex-col gap-4">
          {children}
        </fieldset>
      </CardContent>

      {/* ACTION */}
      <CardFooter className="border-t px-6 py-4 flex-center-end gap-4">
        <Button type="reset" variant="outline">
          <CircleSlash className="dim-4 mr-2" />
          Reset
        </Button>
        <Button disabled={disabled}>
          <Save className="dim-4 mr-2" />
          Save
          {disabled && (
            <i className="ml-1.5">
              <Loading size={24} />
            </i>
          )}
        </Button>
      </CardFooter>
    </form>
  );
};
