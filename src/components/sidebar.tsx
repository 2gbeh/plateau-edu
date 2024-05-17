"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface IProps {
  menu: { path: string; text: string; icon?: React.ReactNode }[];
}

const Sidebar = ({ menu }: IProps) => {
  const pathname = usePathname();
  //
  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground"
      x-chunk="dashboard-04-chunk-0"
    >
      {menu.map((e, i) => (
        <Link
          key={i}
          href={e.path}
          className={clsx(
            "flex-center",
            pathname == e.path && "font-semibold text-primary"
          )}
        >
          <span>{e.icon}</span>
          <span>{e.text}</span>
        </Link>
      ))}
    </nav>
  );
};

export default React.memo(Sidebar);
