import Image from "next/image";
import clsx from "clsx";

interface IProps {
  src: string;
  dim: [number, number];
  fit?: string;
  alt?: string;
  styles?: string;
}

export const Figure = ({ src, dim, fit, alt = "", styles }: IProps) => {
  const [width, height] = dim;
  return (
    <figure style={{ width: fit }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className={styles}
      />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
};
