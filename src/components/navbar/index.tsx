import Link from "next/link";
import clsx from "clsx";
import { Figure } from "../figure";
//
import APP from "@/constants/APP";
import { menu } from "./navbar.util";

export const Navbar = () => {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Figure src="/icon.png" dim={[256, 256]} fit="40px" alt={APP.name} />
      </Link>
      {/*  */}
      {menu.map((e, i) => (
        <Link
          key={i}
          href={e.path}
          className={clsx(
            "transition-colors hover:text-foreground text-nowrap",
            i > 0 && "text-muted-foreground",
            i < 1 && "text-foreground"
          )}
        >
          {e.text}
        </Link>
      ))}
    </nav>
  );
};
