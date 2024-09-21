import React, { type Key, type ReactNode, useCallback, useContext, useMemo } from "react";
import Context from "./context";
import type { ContextValue, MenuProps, Mode } from "./types";
import { useControlledState } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { KeyboardArrowUp } from "../icon/icons";
import type { Size } from "../../types/element";

const styles = stylex.create({
  prefix: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.xxsmall,
  },

  suffix: {
    marginInlineStart: spacing.auto,
  },

  collapser: (props: { isExpanded: boolean }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: props.isExpanded ? "rotateX(0)" : "rotateX(180deg)",
    transition: "transform 0.2s",
  }),
});

/**
 * @description
 * use menu context
 */
export const useMenuContext = () => useContext(Context);

/**
 * @description
 * use children
 */
export const useItemChildren = ({
  prefix,
  label,
  suffix,
  hasChildren,
  isExpanded,
  isInline,
}: {
  prefix: ReactNode;
  label: ReactNode;
  suffix: ReactNode;
  hasChildren: boolean;
  isExpanded: boolean;
  isInline: boolean;
}) => {
  /// prefix
  const _prefix = useMemo(
    () => prefix && <span {...stylex.props(styles.prefix)}>{prefix}</span>,
    [prefix],
  );

  /// child
  const _label = useMemo(() => label && <span>{label}</span>, [label]);

  /// suffix
  const _suffix = useMemo<ReactNode>(() => {
    if (!suffix && !hasChildren) return null;

    const styled = stylex.props(
      styles.collapser({
        isExpanded,
      }),
    );

    return (
      <span {...stylex.props(styles.suffix)}>
        {suffix}
        {hasChildren && isInline && (
          <span {...styled}>
            <KeyboardArrowUp size={16} />
          </span>
        )}
      </span>
    );
  }, [hasChildren, isExpanded, suffix, isInline]);

  return {
    suffix: _suffix,
    prefix: _prefix,
    label: _label,
  };
};

/**
 * @description
 * context value
 */
export const useContextValue = ({
  onClick,
  setTrigger,
  size,
  ...props
}: {
  onClick: MenuProps["onClick"];
  setTrigger: ContextValue["collect"];
  size: Size;
} & Pick<
  MenuProps,
  "defaultExpandedKeys" | "defaultSelectedKeys" | "expandedKeys" | "selectedKeys"
>) => {
  const [_selectedKeys, _setSelectedKeys] = useControlledState(props.selectedKeys, {
    defaultState: props.defaultSelectedKeys ?? [],
  });
  const [_expandedKeys, _setExpandedKeys] = useControlledState(props.expandedKeys, {
    defaultState: props.defaultExpandedKeys ?? [],
  });

  const selectedKeys = useMemo(() => new Set(_selectedKeys), [_selectedKeys]);
  const expandedKeys = useMemo(() => new Set(_expandedKeys), [_expandedKeys]);

  /// click handler
  const click = useCallback(
    async (key: Key) => {
      _setSelectedKeys([key]);
      await onClick?.(key);
    },
    [onClick, _setSelectedKeys],
  );

  /// toggle expand
  const toggle = useCallback(
    (key: Key) => {
      const isExpanded = expandedKeys.has(key);
      _setExpandedKeys((prev) => {
        const expanded = new Set(prev);
        isExpanded ? expanded.delete(key) : expanded.add(key);
        return Array.from(expanded);
      });
    },
    [expandedKeys, _setExpandedKeys],
  );

  /// collect item
  const collect = useCallback<ContextValue["collect"]>(
    (key, item) => {
      if (!item) return;
      setTrigger(key, item);
    },
    [setTrigger],
  );

  return useMemo<ContextValue>(
    () => ({
      selectedKeys,
      expandedKeys,
      click,
      toggle,
      collect,
      size,
    }),
    [selectedKeys, expandedKeys, click, toggle, collect, size],
  );
};

/**
 * @description
 * in menu, musae allow developer scroll to the position by given key
 * but there are only x or y scroll orientation
 * so we need convert the mode into orientation
 */
export const useScrollOrientation = (mode: Mode) => {
  return mode === "horizontal" ? "horizontal" : "vertical";
};
