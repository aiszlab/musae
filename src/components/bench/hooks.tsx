import React, { Children, type Key, type ReactNode, useCallback, useMemo, useState } from "react";
import { first, isUndefined, useEvent } from "@aiszlab/relax";
import type { BenchProps, Layout, Logo, NavigationItem } from "../../types/bench";
import type { MenuItem } from "../../types/menu";
import { Image } from "../image";
import type { Voidable } from "@aiszlab/relax/types";
import { toReactNodeText } from "../../utils/react";

/**
 * @description check logo type
 */
const isLogo = (_v: Logo | ReactNode): _v is Logo => !!(_v as Voidable<Logo>)?.url;

/**
 * @description logo
 */
export const useLogo = (logo?: ReactNode | Logo) => {
  return useMemo<ReactNode>(() => {
    if (isLogo(logo)) {
      return <Image src={logo.url} previewable={false} />;
    }

    return logo;
  }, [logo]);
};

/**
 * @description in `Bench`, use `Menu` to show navigation items
 */
const toMenuItem = ({ path, children = [], ...item }: NavigationItem): MenuItem => ({
  key: path,
  children: children.map((item) => toMenuItem(item)),
  ...item,
});

/**
 * @description
 * menu
 */
export const useNavigations = ({
  navigations,
  onNavigate,
}: {
  navigations: NavigationItem[];
  onNavigate: BenchProps["onNavigate"];
}) => {
  // menu click handler => jump link
  const navigate = useEvent((path: Key) => {
    if (onNavigate) {
      onNavigate(path.toString());
      return;
    }

    window.open(path.toString(), "_self");
  });

  // convert navigations to menu items
  const menuItems = useMemo(() => navigations.map((item) => toMenuItem(item)), [navigations]);

  return {
    menuItems,
    navigate,
  };
};

/**
 * @description addPath
 */
const addPath = (
  keyWithParents: Map<Key, Key[]>,
  { key, children = [] }: MenuItem,
  parents: Key[] = [],
) => {
  keyWithParents.set(key, parents);
  children.forEach((child) => addPath(keyWithParents, child, [...parents, key]));
  return keyWithParents;
};

/**
 * @description get menu keys
 */
export const useMenuKeys = ({
  menuItems,
  location,
  defaultExpandedKeys,
}: {
  menuItems: MenuItem[];
  location?: string;
  defaultExpandedKeys?: Key[];
}) => {
  const keysWithParents = useMemo(() => {
    return menuItems.reduce((prev, item) => addPath(prev, item), new Map<Key, Key[]>());
  }, [menuItems]);

  const selectedKeys = useMemo<Key[]>(() => {
    if (isUndefined(location)) return [];
    return (keysWithParents.get(location) ?? []).concat(location);
  }, [keysWithParents, location]);

  const [expandedKeys, setExpandedKeys] = useState<Key[]>(() => {
    return Array.from(new Set([...selectedKeys, ...(defaultExpandedKeys ?? [])]));
  });

  const onExpandedKeysChange = useCallback(
    (expandingKeys: Key[]) => {
      setExpandedKeys(expandingKeys);
    },
    [setExpandedKeys],
  );

  return {
    selectedKeys,
    expandedKeys,
    onExpandedKeysChange,
  };
};

/**
 * @description menu items
 */
export const useMenuItems = ({
  menuItems,
  layout,
  selectedKeys,
  isCollapsed,
}: {
  menuItems: MenuItem[];
  layout: Layout;
  selectedKeys: Key[];
  isCollapsed: boolean;
}) => {
  const _menuItems = useMemo(() => {
    return menuItems.reduce((prev, item) => prev.set(item.key, item), new Map<Key, MenuItem>());
  }, [menuItems]);

  // split menu items to sidebar
  const _sidebar = useMemo<MenuItem[]>(() => {
    switch (layout) {
      case "side":
        return Array.from(_menuItems.values());
      case "mix":
        // when header menu is not located, just use first menu`s children
        const _root = first(selectedKeys);
        return (
          (isUndefined(_root)
            ? _menuItems.values().next().value?.children
            : _menuItems.get(_root)?.children) ?? []
        );
      default:
        return [];
    }
  }, [_menuItems, layout, selectedKeys]);

  // split menu items to header
  const header = useMemo(() => {
    switch (layout) {
      case "top":
        return Array.from(_menuItems.values());
      case "mix":
        return Array.from(_menuItems.values()).map((item) => ({ ...item, children: void 0 }));
      default:
        return [];
    }
  }, [_menuItems, layout]);

  // in `Bench`, sidebar could be collapsed
  // when collapsed, sidebar menu items should be flattened
  const sidebar = useMemo<MenuItem[]>(() => {
    if (!isCollapsed) return _sidebar;

    // if `item` has prefix, use prefix as label
    // if not, get label first char to show
    return _sidebar.map(({ prefix, label, ...item }) => {
      return {
        ...item,
        label: !!prefix ? prefix : toReactNodeText(label)?.charAt(0),
      };
    });
  }, [isCollapsed]);

  return {
    header,
    sidebar,
  };
};
