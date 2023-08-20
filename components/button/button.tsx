import type { Props } from "./types";
import Wrapper from "./wrapper";
import Span from "./span";
import React from "react";

/**
 * @author murukal
 *
 * @description
 * button
 */
const Button = ({ children, className, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      <Span>{children}</Span>
    </Wrapper>
  );
};

export default Button;
