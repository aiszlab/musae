import type { ButtonProps, Variant } from "./types";
import { StyledButton } from "./styled";
import React, { forwardRef, useMemo } from "react";
import { useClassNames } from "../config";
import { ButtonClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";

/**
 * @author murukal
 *
 * @description
 * button
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, onClick, style, color = "primary", size = "medium", ...props }, ref) => {
    const classNames = useClassNames(ComponentToken.Button);

    /// get which variant is using
    /// variant determin style
    const variant = useMemo<Variant>(() => props.variant || "filled", [props.variant]);

    return (
      <StyledButton
        onClick={onClick}
        className={clsx(className, classNames[ButtonClassToken.Button])}
        variant={variant}
        style={style}
        color={color}
        size={size}
        ref={ref}
      >
        <span>{children}</span>
      </StyledButton>
    );
  }
);

export default Button;
