"use client";

import Link from "next/link";
import clsx from "clsx";
import { Home, ContactRound, Users, Menu } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { Figure } from "../figure";
import { useActiveLink } from "@/hooks/useActiveLink";
//
import APP from "@/constants/APP";
import { menu } from "./drawer.util";

export const Drawer = () => {
  const { isActiveLink } = useActiveLink();
  //
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Figure src="/icon.png" dim={[256, 256]} as="40px" alt={APP.name} />
          </Link>
          {/*  */}
          {menu.map((e, i) => {
            return (
              <Link
                key={i}
                href={e.path}
                className={clsx(
                  "flex-center",
                  isActiveLink(e.path)
                    ? "hover:text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {
                  {
                    home: <Home className="dim-5 mr-2" />,
                    contact_round: <ContactRound className="dim-5 mr-2" />,
                    users: <Users className="dim-5 mr-2" />,
                  }[e.icon]
                }
                <span>{e.text}</span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
