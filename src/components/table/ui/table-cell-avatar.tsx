import Image from "next/image";
import { TableCell } from "@/components/shadcn/ui/table";

interface IProps {
  src: string;
  dim?: number;
  required?: boolean;
  alt?: string;
}

export const TableCellAvatar = ({
  src,
  dim = 32,
  required = false,
  alt = "",
}: IProps) => {
  const [width, height] = [dim, dim];
  //
  return (
    <TableCell
      className={required ? "table-cell" : "hidden sm:table-cell"}
      style={{ maxWidth: width, minWidth: width }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="aspect-square rounded-md object-cover"
      />
    </TableCell>
  );
};
