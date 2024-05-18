import { CircleHelp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";

interface IProps {
  children?: React.ReactNode;
  text: string;
}

export const Tiptoe = ({ children, text }: IProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {children || <CircleHelp className="dim-3 text-gray-600 ml-1" />}
        </TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
