import { Fallback } from "@radix-ui/react-avatar";
import clsx from "clsx";
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const AvatarFallback = forwardRef<ElementRef<typeof Fallback>, ComponentPropsWithoutRef<typeof Fallback>>(
  ({ className, ...props }, ref) => (
    <Fallback
      ref={ref}
      className={clsx("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
      {...props}
    />
  )
);

export default AvatarFallback;
