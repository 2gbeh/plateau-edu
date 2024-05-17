import { UserIcon, Settings, Frame, LogOutIcon } from "lucide-react";

const styles = { className: "dim-4 mr-2" };

export const HeaderAvatarMenuItem = ({ name }: { name?: string }) => {
  const iconSelector = () => {
    switch (name) {
      case "Profile":
        return <UserIcon {...styles} />;
      case "Settings":
        return <Settings {...styles} />;
      case "Logout":
        return <LogOutIcon {...styles} />;
      default:
        return <Frame {...styles} />;
    }
  };
  //
  return (
    <>
      {iconSelector()} {name}
    </>
  );
};
