import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { Figure } from "./figure";

export const HeaderAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Figure
            src="/images/etugbeh.png"
            dimension={[1033, 1034]}
            figureWidth="32px"
            alt="Toggle user menu"
            styles="rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Hi, Emmanuel</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
