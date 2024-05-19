"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { Home, ContactRound, Users } from "lucide-react";
import { Figure } from "../figure";
import { useActiveLink } from "@/hooks/useActiveLink";
//
import APP from "@/constants/APP";
import { menu } from "./navbar.util";

const Navbar = () => {
  const { isActiveLink } = useActiveLink();
  //
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Figure
          src="/icon.png"
          dimension={[256, 256]}
          figureWidth="40px"
          alt={APP.name}
        />
      </Link>
      {/*  */}
      {menu.map((e, i) => {
        return (
          <Link
            key={i}
            href={e.path}
            className={clsx(
              "transition-colors hover:text-foreground text-nowrap flex-center",
              isActiveLink(e.path) ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {
              {
                home: <Home className="dim-4 mr-1.5" />,
                contact_round: <ContactRound className="dim-4 mr-1.5" />,
                users: <Users className="dim-4 mr-1.5" />,
              }[e.icon]
            }
            <span>{e.text}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default React.memo(Navbar);
