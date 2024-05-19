import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { abbr } from "@/utils";

interface IProps {
  src?: string;
  username?: string;
  alt?: string;
}
export const XAvatarFallback = ({
  src = "/avatars/01.png",
  username = "Not Available",
  alt = "",
}: IProps) => {
  return (
    <Avatar className="hidden h-9 w-9 sm:flex">
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{abbr(username)}</AvatarFallback>
    </Avatar>
  );
};
