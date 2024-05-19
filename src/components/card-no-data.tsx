import { Figure } from "@/components/figure";

interface IProps {
  caption?: string;
  minHeight?: number;
  imageSize?: string;
}

export const CardNoData = ({
  caption = "No records found",
  minHeight = 300,
  imageSize = "100px",
}: IProps) => {
  return (
    <div className="flex-center-center" style={{ minHeight: minHeight }}>
      <figure className="flex flex-col gap-2 items-center">
        <Figure
          src="/images/no-search.png"
          dimension={[160, 160]}
          figureWidth={imageSize}
        />
        <figcaption className="text-gray-500">{caption}</figcaption>
      </figure>
    </div>
  );
};
