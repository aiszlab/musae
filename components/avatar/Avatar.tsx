import { useImageLoader } from "@aiszlab/relax";
import clsx from "clsx";
import React, { useMemo } from "react";
import AvatarImage from "./AvatarImage";

interface Props {
  src: string;
  alt: string;
}

const Avatar = (props: Props) => {
  const status = useImageLoader({
    src: props.src,
  });

  console.log("status=====", status);

  const child = useMemo(() => {
    // if (status === "none") {
    //   return props.alt;
    // }

    return <AvatarImage src={props.src} />;
  }, [props.alt, status, props.src]);

  return <div className={clsx("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full")}>{child}</div>;
};

export default Avatar;
