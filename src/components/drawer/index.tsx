import Image from "next/image";
import Link from "next/link";
import {
  PanelLeft,
  Home,
  Frame,
} from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
//
import APP from "@/constants/APP";
import PATH from "@/constants/PATH";
import { styles, menu } from "./top-drawer.util";

export const TopDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="dim-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href={PATH.dashboard}
            title="Home"
            className="group flex-center-center dim-10 shrink-0 gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Image
              src="/icon.png"
              alt={APP.name}
              className="dark:invert"
              width={160}
              height={160}
              priority
            />
            <span className="sr-only">{APP.name}</span>
          </Link>
          {/*  */}
          {menu.map(
            (e, i) =>
              e?.visible && (
                <Link
                  key={i}
                  href={e.href}
                  className={styles.link[e?.variant || "active"]}
                >
                  {e.title === "Home" ? (
                    <Home className="dim-5" />
                  ) : (
                    <Frame className="dim-5" />
                  )}
                  {e.title}
                </Link>
              )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
