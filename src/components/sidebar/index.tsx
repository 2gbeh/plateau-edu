import Image from "next/image";
import Link from "next/link";
import { Home, Settings, Frame } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
//
import APP from "@/constants/APP";
import PATH from "@/constants/PATH";
import { styles, menu } from "./sidebar.util";

export const Sidebar = () => {
  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground"
      x-chunk="dashboard-04-chunk-0"
    >
      <Link href="#" className="font-semibold text-primary">
        General
      </Link>
      <Link href="#">Security</Link>
      <Link href="#">Integrations</Link>
      <Link href="#">Support</Link>
      <Link href="#">Organizations</Link>
      <Link href="#">Advanced</Link>
    </nav>
  );
};
