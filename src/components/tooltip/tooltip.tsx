import type { TooltipProps } from "musae/types/tooltip";
import React from "react";
import { Popover } from "../popover";
import { useClassNames } from "../../hooks/use-class-names";
import { TooltipClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";

const Tooltip = ({ children, className, style, title }: TooltipProps) => {
  const classNames = useClassNames("tooltip");

  // `Tooltip` title is used into `Popover` content!!! not a bug!
  return (
    <Popover
      content={title}
      className={clsx(classNames[TooltipClassToken.Tooltip], className)}
      style={style}
    >
      {children}
    </Popover>
  );
};

export default Tooltip;
