import PATH from "@/constants/PATH";

export const menu = [
  { text: "Profile" },
  { text: "Themes" },
  { text: "Settings", href: PATH.settings },
  { text: "Notification Settings", hasSeparator: true },
  { text: "Hotkeys" },
  { text: "Referrals" },
  { text: "Help", hasSeparator: true },
  { text: "Trash" },
  { text: "Logout", href: PATH.login },
];
