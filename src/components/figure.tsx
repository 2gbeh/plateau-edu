import Image from "next/image";

interface IProps {
  src: string;
  dim: [number, number];
  as?: string;
  alt?: string;
  styles?: string;
}

export const Figure = ({ src, dim, as, alt = "", styles }: IProps) => {
  const [width, height] = dim;
  return (
    <figure style={{ width: as }}>
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
