import type { ButtonProps, Variant } from "./types";
import { StyledWrapper, StyledSpan } from "./styled";
import React, { forwardRef, useMemo } from "react";

/**
 * @author murukal
 *
 * @description
 * button
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, onClick, style, ...props }, ref) => {
  /// get which variant is using
  /// variant determin style
  const variant = useMemo<Variant>(() => props.variant || "filled", [props.variant]);

  return (
    <StyledWrapper
      onClick={onClick}
      className={className}
      variant={variant}
      style={style}
      color={props.color || "primary"}
      ref={ref}
    >
      <StyledSpan>{children}</StyledSpan>
    </StyledWrapper>
  );
});

export default Button;
