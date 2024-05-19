import React from "react";
import clsx from "clsx";

interface IProps {
  as?: string;
  sx?: string;
}

const Skeleton = ({ as = "50 50 100%", sx = "" }: IProps) => {
  const [width, height, borderRadius] = praseProps(as);
  //
  return (
    <React.Fragment>
      <div className={clsx("skeleton", sx)}></div>
      <style jsx>{`
        .skeleton {
          width: ${width};
          height: ${height};
          border-radius: ${borderRadius};
          border: "solid thin inherit";
          opacity: 0.7;
          animation: buffer 0.5s linear infinite alternate;
        }
        @keyframes buffer {
          0% {
            background-color: hsl(200, 20%, 80%);
          }
          100% {
            background-color: hsl(200, 20%, 92%);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default React.memo(Skeleton);

const praseProps = (as: string) =>
  as.trim().length > 0
    ? as
        .split(" ")
        .map((prop) =>
          prop
            ? prop.endsWith("%")
              ? prop
              : `${prop.replace("px", "")}px`
            : "0px"
        )
    : ["50px", "50px", "100%"];
