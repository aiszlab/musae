import { useImageLoader } from "@aiszlab/relax";
import clsx from "clsx";
import React, { useMemo } from "react";

interface Props {
  src: string;
  alt: string;
}

const Avatar = (props: Props) => {
  const status = useImageLoader({
    src: props.src,
  });

  const childRenderer = useMemo(() => {
    if (status === "none") {
      return props.alt;
    }
  }, [props.alt]);

  return <div className={clsx("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full")}>{childRenderer}</div>;
};

export default Avatar;
