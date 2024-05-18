"use client";

import { useEffect, useState } from "react";

/* USAGE 
  <ImageFallback
  as={["https://github.com/2gbeh.png", "/images/avatar-flat.png"]}
  alt="Account"
  title="GitHub"
  className="min-w-10 min-h-10 max-w-10 max-h-10 rounded-full"
/>; 
*/

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  as: [string | undefined, string];
}

export const ImageFallback = ({ as, ...props }: IProps) => {
  const [status, setStatus] = useState(false);
  const [image, fallback] = as;
  useEffect(() => {
    setStatus(window?.navigator?.onLine);
  });
  //
  return <img {...props} src={status && image ? image : fallback} />;
};
