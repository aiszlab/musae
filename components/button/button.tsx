import type { ButtonProps } from "./types";
import { Wrapper } from "./styled";
import Span from "./span";
import React from "react";

/**
 * @author murukal
 *
 * @description
 * button
 */
const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      <Span>{children}</Span>
    </Wrapper>
  );
};

export default Button;
