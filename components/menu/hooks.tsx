import React, { Fragment, ReactNode, useContext, useMemo } from "react";
import Context, { ConfigContext } from "./context";
import { StyledCollapser, StyledMenuItemPrefix } from "./styled";
import { KeyboardArrowUp } from "../icon";
import { Order } from "./types";

/**
 * @description
 * use menu context
 */
export const useMenu = () => useContext(Context);

/**
 * @description
 * use menu config
 */
export const useMenuConfig = () => useContext(ConfigContext);

/**
 * @description
 * use children
 */
export const useChildren = ({
  hasChildren,
  isCollapsed,
  collapserClassName,
  label,
  prefix: _prefix,
  prefixClassName,
  contentClassName,
  orders,
}: {
  hasChildren: boolean;
  isCollapsed: boolean;
  collapserClassName: string;
  label: ReactNode;
  prefix: ReactNode;
  prefixClassName: string;
  contentClassName: string;
  orders: Order[];
}): ReactNode => {
  /// if there are children, render trailing arrow
  const collapser = useMemo(() => {
    if (!hasChildren) return null;

    return (
      <StyledCollapser isCollapsed={isCollapsed} className={collapserClassName} key={Order.Collapser}>
        <KeyboardArrowUp size={16} />
      </StyledCollapser>
    );
  }, [hasChildren, isCollapsed, collapserClassName]);

  /// prefix
  const prefix = useMemo(() => {
    if (!_prefix) return null;

    <StyledMenuItemPrefix className={prefixClassName} key={Order.Prefix}>
      {_prefix}
    </StyledMenuItemPrefix>;
  }, [_prefix, prefixClassName]);

  /// child
  const child = useMemo(() => {
    if (!label) return null;

    return (
      <span className={contentClassName} key={Order.Child}>
        {label}
      </span>
    );
  }, [label, contentClassName]);

  const children = useMemo(
    () => ({
      collapser,
      prefix,
      child,
    }),
    [collapser, prefix, child]
  );

  return useMemo(() => {
    return orders.map((order) => children[order]).filter((child) => !!child);
  }, [children, orders]);
};
