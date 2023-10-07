import React, { isValidElement, useMemo } from "react";
import type { BreadcrumbProps } from "./types";
import { StyledNav, StyledSeparator } from "./styled";

const _SEPARATOR = "/";
const _ROLE = "separator";

const Breadcrumb = (props: BreadcrumbProps) => {
  /// render the children
  const _children = useMemo(() => {
    const _separator = props.separator ?? _SEPARATOR;

    return props.items.map((_item, _index) => {
      const _isLastElement = _index === props.items.length - 1;
      const _isReactElement = isValidElement(_item.label);

      return [
        <li key={_index}>
          {_isReactElement ? (
            _item.label
          ) : _item.href ? (
            <a href={_item.href}>{_item.label}</a>
          ) : (
            <span>{_item.label}</span>
          )}
        </li>,
        !_isLastElement && (
          <StyledSeparator key={`${_ROLE}${_index}`} role={_ROLE}>
            {_separator}
          </StyledSeparator>
        ),
      ];
    });
  }, [props.items, props.separator]);

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
