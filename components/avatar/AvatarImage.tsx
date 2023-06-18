import { Image } from "@radix-ui/react-avatar";
import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const AvatarImage = forwardRef<ElementRef<typeof Image>, ComponentPropsWithoutRef<typeof Image>>(
  ({ className, ...props }, ref) => (
    <Image ref={ref} className={clsx("aspect-square h-full w-full", className)} {...props} />
  )
);

export default AvatarImage;
