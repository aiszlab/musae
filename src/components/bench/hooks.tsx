import { isValidElement, type Key, type ReactNode, useMemo } from "react";
import type { Partialable } from "@aiszlab/relax/types";
import { isObject, isUndefined, useEvent } from "@aiszlab/relax";
import type { BenchProps, Layout, Logo, NavigationItem } from "../../types/bench";
import type { MenuItem } from "../../types/menu";
import { Image } from "../image";
import type { Voidable } from "@aiszlab/relax/types";
import React from "react";

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
 * @description get selected keys
 */
export const useSelectedKeys = ({
  menuItems,
  location,
}: {
  menuItems: MenuItem[];
  location?: string;
}) => {
  const keyWithParents = useMemo(() => {
    return menuItems.reduce((prev, item) => addPath(prev, item), new Map<Key, Key[]>());
  }, [menuItems]);

  return useMemo<{
    header: Key[];
    sidebar: Key[];
  }>(() => {
    if (isUndefined(location)) {
      return {
        header: [],
        sidebar: [],
      };
    }

    const paths = keyWithParents.get(location);
    return {
      header: [paths?.[0] ?? location],
      sidebar: [location],
    };
  }, [keyWithParents, location]);
};

/**
 * @description menu items
 */
export const useMenuItems = ({
  menuItems,
  layout,
  headerSelectedKeys,
}: {
  menuItems: MenuItem[];
  layout: Layout;
  headerSelectedKeys: Key[];
}) => {
  const {
    header,
    sidebar: _sidebar,
    sidebars,
  } = useMemo(() => {
    if (layout === "side") {
      return {
        header: [] as MenuItem[],
        sidebar: menuItems,
      };
    }

    const { header, sidebars } = menuItems.reduce(
      (prev, { children, ...item }) => {
        prev.header.push(item);
        prev.sidebars.set(item.key, children);
        return prev;
      },
      { header: [] as MenuItem[], sidebars: new Map<Key, Partialable<MenuItem[]>>() },
    );

    return {
      header,
      sidebars,
    };
  }, [menuItems, layout]);

  const sidebar = useMemo(() => {
    const _key = headerSelectedKeys[0];
    if (_key) return _sidebar ?? [];

    return sidebars?.get(_key) ?? _sidebar ?? [];
  }, [headerSelectedKeys, sidebars, _sidebar]);

  return {
    header,
    sidebar,
  };
};
