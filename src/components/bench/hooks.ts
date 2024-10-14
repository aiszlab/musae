import { type Key, useMemo } from "react";
import type { Partialable } from "@aiszlab/relax/types";
import { isUndefined, useEvent } from "@aiszlab/relax";
import type { BenchProps, Layout, Logo, NavigationItem } from "musae/types/bench";
import type { MenuItem } from "musae/types/menu";

/**
 * @description
 * logo
 */
export const useLogo = (logo?: string | Logo) => {
  return useMemo<Logo | null>(() => {
    if (!logo) return null;

    if (typeof logo === "string") {
      return {
        url: logo,
      };
    }

    return logo;
  }, [logo]);
};

const toMenuItem = (
  { path, children, ...item }: NavigationItem,
  parentKeys: string[],
): [MenuItem, Map<string, string[]>] => {
  // convert children
  const [_menuItems, _paths] = (children ?? []).reduce<[MenuItem[], Map<string, string[]>]>(
    ([_menuItems, _paths], child) => {
      const [menuItem, paths] = toMenuItem(child, [...parentKeys, path]);
      _menuItems.push(menuItem);
      return [_menuItems, new Map([..._paths, ...paths])];
    },
    [[], new Map([[path, parentKeys]])],
  );

  // return with paths
  return [
    {
      key: path,
      children: _menuItems,
      ...item,
    },
    _paths,
  ];
};

/**
 * @description
 * menu
 */
export const useNavigations = ({
  navigations,
  onNavigate,
  location,
  layout,
}: {
  navigations: NavigationItem[];
  onNavigate: BenchProps["onNavigate"];
  location?: string;
  layout: Layout;
}) => {
  // menu click handler => jump link
  const navigate = useEvent((path: Key) => {
    if (onNavigate) {
      onNavigate(path.toString());
      return;
    }

    window.open(path.toString(), "_self");
  });

  // convert navigations into diff menus
  const [topNavigations, sideNavigations, paths] = useMemo(() => {
    return navigations.reduce<
      [Map<string, MenuItem>, Map<string, Partialable<MenuItem[]>>, Map<string, string[]>]
    >(
      ([_topNavigations, _sideNavigations, _paths], item) => {
        const [{ children, ..._menuItem }, ___paths] = toMenuItem(item, []);
        const __paths = new Map([...___paths, ..._paths]);

        if (layout === "side") {
          _sideNavigations.set(item.path, [{ ..._menuItem, children }]);
          return [_topNavigations, _sideNavigations, __paths];
        }

        _topNavigations.set(item.path, _menuItem);
        _sideNavigations.set(item.path, children);
        return [_topNavigations, _sideNavigations, __paths];
      },
      [new Map(), new Map(), new Map()],
    );
  }, [layout, navigations]);

  // menu selected keys
  const selectedKeys = useMemo<[string?, string?]>(() => {
    if (isUndefined(location)) return [];
    return [paths.get(location)?.at(0) ?? location, location];
  }, [location, paths]);

  // side menu
  const sideMenuItems = useMemo<MenuItem[]>(() => {
    // top menu items is empty, show all in side menu
    if (topNavigations.size === 0) {
      return Array.from(sideNavigations.values()).flatMap((items = []) => items, []);
    }

    // top-side relation
    if (!selectedKeys[0]) return [];
    return sideNavigations.get(selectedKeys[0]) ?? [];
  }, [selectedKeys, sideNavigations, topNavigations]);

  // top menu items
  const topMenuItems = useMemo(() => {
    return Array.from(topNavigations.values());
  }, [topNavigations]);

  return {
    selectedKeys,
    topMenuItems,
    sideMenuItems,
    navigate,
  };
};
