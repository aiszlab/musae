import { TooltipProps } from "./types";
import React from "react";
import { Popover } from "../popover";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, TooltipClassToken } from "../../utils/class-name";
import clsx from "clsx";

const Tooltip = ({ children, className, style, title }: TooltipProps) => {
  const classNames = useClassNames(ComponentToken.Tooltip);

  // `Tooltip` title is used into `Popover` description!!! not a bug!
  return (
    <Popover description={title} className={clsx(classNames[TooltipClassToken.Tooltip], className)} style={style}>
      {children}
    </Popover>
  );
};

export default Tooltip;
