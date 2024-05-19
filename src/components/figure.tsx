import Image from "next/image";

interface IProps {
  src: string;
  dimension: [number, number];
  figureWidth?: string;
  alt?: string;
  styles?: string;
}

export const Figure = ({ src, dimension, figureWidth, alt = "", styles }: IProps) => {
  const [width, height] = dimension;
  return (
    <figure style={{ width: figureWidth }}>
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
