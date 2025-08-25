import React, { type Key, type ReactNode, useCallback, useContext, useMemo } from "react";
import { Context, type CLASS_NAMES } from "./context";
import type { ContextValue, MenuProps, Mode, Size } from "../../types/menu";
import { toArray, useControlledState, useEvent } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, spacing } from "../theme/tokens.stylex";
import { KeyboardArrowUp } from "../icon/icons";

const styles = {
  prefix: $create({
    default: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.xxxxxsmall,
    },
  }),

  suffix: $create({
    default: {
      marginInlineStart: spacing.auto,
    },
  }),

  collapser: $create({
    default: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "rotateX(180deg)",
      transitionProperty: "transform",
      transitionDuration: duration.short,
    },

    expanded: {
      transform: "rotateX(0)",
    },
  }),
};

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
  // prefix
  const _prefix = useMemo(
    () => prefix && <span {...$props(styles.prefix.default)}>{prefix}</span>,
    [prefix],
  );

  // child
  const _label = useMemo(() => label && <span>{label}</span>, [label]);

  // suffix
  const _suffix = useMemo<ReactNode>(() => {
    if (!suffix && !hasChildren) return null;

    const styled = $props(styles.collapser.default, isExpanded && styles.collapser.expanded);

    return (
      <span {...$props(styles.suffix.default)}>
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
  classNames,
  onExpandedKeysChange,
  ...props
}: {
  onClick: MenuProps["onClick"];
  setTrigger: ContextValue["collect"];
  size: Size;
  classNames: typeof CLASS_NAMES;
} & Pick<
  MenuProps,
  | "defaultExpandedKeys"
  | "defaultSelectedKeys"
  | "expandedKeys"
  | "selectedKeys"
  | "onExpandedKeysChange"
>) => {
  const [_selectedKeys, _setSelectedKeys] = useControlledState(props.selectedKeys, {
    defaultState: props.defaultSelectedKeys ?? [],
  });
  const [_expandedKeys, _setExpandedKeys] = useControlledState(props.expandedKeys, {
    defaultState: props.defaultExpandedKeys ?? [],
  });

  const selectedKeys = useMemo(() => new Set(toArray(_selectedKeys)), [_selectedKeys]);
  const expandedKeys = useMemo(() => new Set(_expandedKeys), [_expandedKeys]);

  // click handler
  const click = useCallback(
    async (key: Key) => {
      _setSelectedKeys([key]);
      await onClick?.(key);
    },
    [onClick, _setSelectedKeys],
  );

  // toggle expand
  const toggle = useEvent((key: Key) => {
    const expandingKeys = new Set(_expandedKeys);
    expandingKeys.has(key) ? expandingKeys.delete(key) : expandingKeys.add(key);
    const _expandingKeys = Array.from(expandingKeys);

    _setExpandedKeys(_expandingKeys);
    onExpandedKeysChange?.(_expandingKeys);
  });

  // collect item
  const collect = useCallback<ContextValue["collect"]>(
    (key, item) => {
      if (!item) return;
      setTrigger(key, item);
    },
    [setTrigger],
  );

  return useMemo(
    () => ({
      selectedKeys,
      expandedKeys,
      click,
      toggle,
      collect,
      size,
      classNames,
    }),
    [selectedKeys, expandedKeys, click, toggle, collect, size, classNames],
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
