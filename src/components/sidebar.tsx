import Link from "next/link";
import clsx from "clsx";

interface IProps {
  menu: { path: string; text: string }[];
}

export const Sidebar = ({ menu }: IProps) => {
  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground"
      x-chunk="dashboard-04-chunk-0"
    >
      {menu.map((e, i) => (
        <Link
          key={i}
          href={e.path}
          className={clsx(i < 1 && "font-semibold text-primary")}
        >
          {e.text}
        </Link>
      ))}
    </nav>
  );
};
