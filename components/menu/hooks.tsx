import React, { Key, ReactNode, useContext, useMemo } from "react";
import Context from "./context";
import { StyledCollapser, StyledMenuItemPrefix } from "./styled";
import { KeyboardArrowUp } from "../icon";

/**
 * @description
 * use menu context
 */
export const useMenu = () => useContext(Context);

/**
 * @description
 * use children
 */
export const useChildren = ({
  id,
  hasChildren,
  isExpanded,
  collapserClassName,
  label,
  prefix: prefixInProps,
  prefixClassName,
  contentClassName,
}: {
  id: Key;
  hasChildren: boolean;
  isExpanded: boolean;
  collapserClassName: string;
  label: ReactNode;
  prefix: ReactNode;
  prefixClassName: string;
  contentClassName: string;
}) => {
  /// if there are children, render trailing arrow
  const collapser = useMemo(() => {
    if (!hasChildren) return null;

    return (
      <StyledCollapser isExpanded={isExpanded} className={collapserClassName}>
        <KeyboardArrowUp size={16} />
      </StyledCollapser>
    );
  }, [hasChildren, isExpanded, collapserClassName]);

  /// prefix
  const prefix = useMemo(() => {
    if (!prefixInProps) return null;

    return <StyledMenuItemPrefix className={prefixClassName}>{prefixInProps}</StyledMenuItemPrefix>;
  }, [prefixInProps, prefixClassName]);

  /// child
  const child = useMemo(() => {
    if (!label) return null;

    return <span className={contentClassName}>{label}</span>;
  }, [label, contentClassName]);

  return {
    collapser,
    prefix,
    child,
  };
};
