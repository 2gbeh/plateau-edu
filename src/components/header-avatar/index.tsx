import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
//
import { HeaderAvatarMenuItem } from "./header-avatar-menu-item";
import { menu } from "./header-avatar.util";

export const HeaderAvatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Image
            src="/images/avatar.png"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuLabel>Hi, Sterling</DropdownMenuLabel> */}
        {menu.map((e, i) => (
          <>
            <DropdownMenuItem key={i}>
              {e?.href ? (
                <Link href={e.href} className="flex-center">
                  <HeaderAvatarMenuItem name={e.text} />
                </Link>
              ) : (
                  <HeaderAvatarMenuItem name={e.text} />
              )}
            </DropdownMenuItem>
            {e?.hasSeparator && <DropdownMenuSeparator />}
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
