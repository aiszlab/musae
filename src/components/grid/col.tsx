import React from "react";
import type { ColProps } from "./types";
import { useColStyle } from "./hooks";
import { useClassNames } from "../config";
import { ComponentToken, GridClassToken } from "../../utils/class-name";
import clsx from "clsx";

const Col = ({ children, className, span, as: As = "div", ...props }: ColProps) => {
  const style = useColStyle([span, props.style]);
  const classNames = useClassNames(ComponentToken.Grid);

  return (
    <As style={style} className={clsx(classNames[GridClassToken.Col], className)}>
      {children}
    </As>
  );
};

export default Col;
