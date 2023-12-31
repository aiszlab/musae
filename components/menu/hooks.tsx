import React, { Key, ReactNode, useCallback, useContext, useMemo } from "react";
import Context from "./context";
import { KeyboardArrowUp } from "../icon";
import type { ContextValue, MenuProps } from "./types";
import { useControlledState } from "@aiszlab/relax";

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
}: {
  prefix: ReactNode;
  label: ReactNode;
  suffix: ReactNode;
}) => {
  /// prefix
  const _prefix = useMemo(
    () =>
      prefix && (
        <span style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: 4 }}>
          {prefix}
        </span>
      ),
    [prefix]
  );

  /// child
  const _label = useMemo(() => label && <span>{label}</span>, [label]);

  /// suffix
  const _suffix = useMemo(
    () =>
      suffix && (
        <span
          style={{
            marginLeft: "auto",
          }}
        >
          {suffix}
        </span>
      ),
    [suffix]
  );

  return {
    suffix: _suffix,
    prefix: _prefix,
    label: _label,
  };
};

/**
 * @description
 * use menu group children
 */
export const useGroupChildren = ({ isExpanded }: { isExpanded: boolean }) => {
  /// if there are children, render trailing arrow
  const collapser = useMemo(
    () => (
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: isExpanded ? "rotateX(0)" : "rotateX(180deg)",
          transition: "transform 200ms",
        }}
      >
        <KeyboardArrowUp size={16} />
      </span>
    ),
    [isExpanded]
  );

  return { collapser };
};

/**
 * @description
 * context value
 */
export const useContextValue = ({
  onClick,
  ...props
}: {
  selectedKeys?: Key[];
  expandedKeys?: Key[];
  onClick: MenuProps["onClick"];
}) => {
  const [_selectedKeys, _setSelectedKeys] = useControlledState(props.selectedKeys!, {
    defaultState: [],
  });
  const [_expandedKeys, _setExpandedKeys] = useControlledState(props.expandedKeys!, {
    defaultState: [],
  });

  const selectedKeys = useMemo(() => new Set(_selectedKeys), [_selectedKeys]);
  const expandedKeys = useMemo(() => new Set(_expandedKeys), [_expandedKeys]);

  /// click handler
  const click = useCallback(
    async (key: Key) => {
      console.log("key======", key);

      _setSelectedKeys([key]);
      await onClick?.(key);
    },
    [onClick, _setSelectedKeys]
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
    [expandedKeys, _setExpandedKeys]
  );

  /// collect item
  const collect = useCallback(() => {}, []);

  return useMemo<ContextValue>(
    () => ({
      selectedKeys,
      expandedKeys,
      click,
      toggle,
      collect,
    }),
    [selectedKeys, expandedKeys, click, toggle, collect]
  );
};
