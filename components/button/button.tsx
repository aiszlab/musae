import type { ButtonProps, Variant } from "./types";
import { StyledWrapper, StyledSpan } from "./styled";
import React, { useMemo } from "react";

/**
 * @author murukal
 *
 * @description
 * button
 */
const Button = ({ children, className, onClick, ...props }: ButtonProps) => {
  /// get which variant is using
  /// variant determin style
  const variant = useMemo<Variant>(() => props.variant || "filled", [props.variant]);

  return (
    <StyledWrapper onClick={onClick} className={className} variant={variant}>
      <StyledSpan>{children}</StyledSpan>
    </StyledWrapper>
  );
};

export default Button;
