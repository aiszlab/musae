import { HTMLAttributeReferrerPolicy, useEffect, useState } from "react";

/**
 * @description
 * prefetch image
 * if image load failed, get fail status
 */
export const useImage = ({
  src,
  crossOrigin,
  referrerPolicy = "no-referrer",
}: {
  src?: string;
  crossOrigin?: string;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
}) => {
  const [isLoaded, setIsLoaded] = useState<false | "loaded" | "error">(false);

  useEffect(() => {
    if (!src) {
      return;
    }

    setIsLoaded(false);

    const image = new Image();
    image.onload = () => {
      setIsLoaded("loaded");
    };
    image.onerror = () => {
      setIsLoaded("error");
    };
    image.crossOrigin = crossOrigin ?? null;
    image.referrerPolicy = referrerPolicy;
    image.src = src;

    return () => {
      image.onload = null;
      image.onerror = null;
      image.remove();
    };
  }, [src, crossOrigin, referrerPolicy]);

  return isLoaded;
};
