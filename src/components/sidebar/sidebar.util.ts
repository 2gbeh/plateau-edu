import PATH from "@/constants/PATH";
import { f } from "@/utils";

enum EVariant {
  FOCUS = "focus",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export const styles = {
  link: {
    [EVariant.FOCUS]:
      "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
    [EVariant.ACTIVE]:
      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
    [EVariant.DISABLED]:
      "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
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
    variant: EVariant.ACTIVE,
    title: "Expense",
    href: f(PATH.expense_preview,15),
    visible: true,
  },
  {
    variant: EVariant.ACTIVE,
    title: "Reports",
    href: PATH.expense_create,
    visible: true,
  },
  {
    variant: EVariant.ACTIVE,
    title: "Trips",
    href: PATH.expense_create_milelage,
    visible: true,
  },
  {
    variant: EVariant.ACTIVE,
    title: "Advances",
    href: PATH.advance_create,
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
];