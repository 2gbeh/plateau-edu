import { usePathname } from "next/navigation";

const basePath = (path: string) => path.split("/")[1];

export function useActiveLink() {
  const pathname = usePathname();

  const isActiveLink = (dynamicPath: string) => {
    return pathname === dynamicPath || basePath(pathname) === basePath(dynamicPath);
  };

  return { isActiveLink };
}
