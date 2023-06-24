import clsx from "clsx";
import React, { DetailedHTMLProps } from "react";

const AvatarImage = ({
  className,
  ...props
}: DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return (
    <img className={clsx("w-full h-full text-center object-cover text-transparent indent-96", className)} {...props} />
  );
};

export default AvatarImage;
