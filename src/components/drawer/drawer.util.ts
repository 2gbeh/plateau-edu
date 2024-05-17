import PATH from "@/constants/PATH";

enum EVariant {
  FOCUS = "focus",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export const styles = {
  link: {
    [EVariant.FOCUS]:
      "flex items-center gap-4 px-2.5 text-foreground",
    [EVariant.ACTIVE]:
      "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
    [EVariant.DISABLED]:
      "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
  },
};

export const menu = [
  {
    variant: EVariant.FOCUS,
    title: "Home",
    href: PATH.dashboard,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Expense",
    href: PATH.tent,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Reports",
    href: PATH.tent,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Trips",
    href: PATH.tent,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Advances",
    href: PATH.tent,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Approvals",
    href: PATH.tent,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Analytics",
    href: PATH.tent,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Settings",
    href: PATH.tent,
    visible: true,
  },
];