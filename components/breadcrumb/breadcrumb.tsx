import React, { cloneElement, useMemo } from "react";
import { BreadcrumbProps } from "./types";
import { StyledNav } from "./styled";

const Breadcrumb = (props: BreadcrumbProps) => {
  /// render the children
  const _children = useMemo(() => {
    return props.items.map(() => {
      //   return <li></li>;
      return cloneElement(<Breadcrumb items={[]} />);
    });
  }, [props.items]);

  /// there is no need to render the breadcrumb when there is no items
  if (!props.items.length) {
    return null;
  }

  /// render the breadcrumb
  return (
    <StyledNav>
      <ol>{_children}</ol>
    </StyledNav>
  );
};

export default Breadcrumb;
