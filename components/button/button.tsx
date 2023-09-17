import type { ButtonProps, Variant } from "./types";
import { Wrapper, Span } from "./styled";
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
    <Wrapper onClick={onClick} className={className} variant={variant}>
      <Span>{children}</Span>
    </Wrapper>
  );
};

export default Button;
