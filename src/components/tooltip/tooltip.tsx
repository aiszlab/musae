import type { TooltipProps } from "musae/types/tooltip";
import React from "react";
import { Popover } from "../popover";
import { useClassNames } from "../../hooks/use-class-names";
import { TooltipClassToken } from "../../utils/class-name";
import { stringify } from "@aiszlab/relax/class-name";

const Tooltip = ({ children, className, style, title }: TooltipProps) => {
  const classNames = useClassNames("tooltip");

  // when `title` is invalid, use children only
  if (!title) {
    return children;
  }

  // `Tooltip` title is used into `Popover` content!!! not a bug!
  return (
    <Popover
      content={title}
      className={stringify(classNames[TooltipClassToken.Tooltip], className)}
      style={style}
    >
      {children}
    </Popover>
  );
};

export default Tooltip;
