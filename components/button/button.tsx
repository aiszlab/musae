import { Props } from "./types";
import Wrapper from "./wrapper";
import Span from "./span";
import React, { FC } from "react";

/**
 * @author murukal
 *
 * @description
 * button
 */
const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Span>{children}</Span>
    </Wrapper>
  );
};

export default Button;
