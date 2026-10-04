import styles from "./styles";
import React, { type Key, type ReactNode, useCallback, useContext, useMemo } from "react";
import { Context, type CLASS_NAMES } from "./context";
import type { ContextValue, MenuProps, Mode, Size } from "../../types/menu";
import { isVoid, toArray, useControlledState, useEvent } from "@aiszlab/relax";
import { props as $props } from "@stylexjs/stylex";
import { IconKeyboardArrowUp } from "../icon/icons";

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
  leading,
  label,
  trailing,
  hasChildren,
  isExpanded,
  isInline,
}: {
  leading: ReactNode;
  label: ReactNode;
  trailing: ReactNode;
  hasChildren: boolean;
  isExpanded: boolean;
  isInline: boolean;
}) => {
  // leading
  const _leading = useMemo(
    () => (isVoid(leading) ? null : <span {...$props(styles.leading.base)}>{leading}</span>),
    [leading],
  );

  // child
  const _label = useMemo(() => label && <span>{label}</span>, [label]);

  // trailing
  const _trailing = useMemo<ReactNode>(() => {
    if (isVoid(trailing) && !hasChildren) return null;

    const styled = $props(styles.collapser.base, isExpanded && styles.collapser.expanded);

    return (
      <span {...$props(styles.trailing.base)}>
        {trailing}
        {hasChildren && isInline && (
          <span {...styled}>
            <IconKeyboardArrowUp size={16} />
          </span>
        )}
      </span>
    );
  }, [hasChildren, isExpanded, trailing, isInline]);

  return {
    trailing: _trailing,
    leading: _leading,
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

    if (expandingKeys.has(key)) {
      expandingKeys.delete(key);
    } else {
      expandingKeys.add(key);
    }

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
