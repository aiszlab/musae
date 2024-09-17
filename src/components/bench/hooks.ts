import { type Key, useMemo } from "react";
import type { BenchProps, Guidance, Logo, NavigationItem } from "./types";
import type { Partialable } from "@aiszlab/relax/types";
import type { MenuItem } from "../menu";
import { isUndefined, useEvent } from "@aiszlab/relax";

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
  parentKeys: Key[],
): [MenuItem, Map<Key, Key[]>] => {
  // convert children
  const [_menuItems, _paths] = (children ?? []).reduce<[MenuItem[], Map<Key, Key[]>]>(
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
  guidance,
}: {
  navigations: NavigationItem[];
  onNavigate: BenchProps["onNavigate"];
  location?: string;
  guidance: Guidance;
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
      [Map<Key, MenuItem>, Map<Key, Partialable<MenuItem[]>>, Map<Key, Key[]>]
    >(
      ([_topNavigations, _sideNavigations, _paths], item) => {
        const [{ children, ..._menuItem }, ___paths] = toMenuItem(item, []);
        const __paths = new Map([...___paths, ..._paths]);

        if (guidance === "side") {
          _sideNavigations.set(item.path, [{ ..._menuItem, children }]);
          return [_topNavigations, _sideNavigations, __paths];
        }

        _topNavigations.set(item.path, _menuItem);
        _sideNavigations.set(item.path, children);
        return [_topNavigations, _sideNavigations, __paths];
      },
      [new Map(), new Map(), new Map()],
    );
  }, [guidance, navigations]);

  // menu selected keys
  const selectedKeys = useMemo<[Key?, Key?]>(() => {
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
