"use client";

import React, { useEffect, useState } from "react";

/* USAGE 
  <ImageFallback
  figureWidth={["https://github.com/2gbeh.png", "/images/avatar-flat.png"]}
  alt="Account"
  title="GitHub"
  className="min-w-10 min-h-10 max-w-10 max-h-10 rounded-full"
/>; 
*/

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  as: [string | undefined, string];
}

const ImageFallback = ({ as, ...props }: IProps) => {
  const [status, setStatus] = useState(false);
  const [image, fallback] = as;
  useEffect(() => {
    setStatus(window?.navigator?.onLine);
  });
  //
  return <img {...props} src={status && image ? image : fallback} />;
};

export default React.memo(ImageFallback);
