import { type Key, useMemo } from "react";
import type { BenchProps, Logo, NavigationItem } from "./types";
import type { Partialable } from "@aiszlab/relax/types";
import { MenuItem } from "../menu";
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
  paths: Map<Key, Key[]>,
): [MenuItem, Map<Key, Key[]>] => {
  // convert children
  const [_menuItems, _paths] = (children ?? []).reduce<[MenuItem[], Map<Key, Key[]>]>(
    ([_menuItems, _paths], child) => {
      const [menuItem, paths] = toMenuItem(child, [...parentKeys, path], _paths);
      _menuItems.push(menuItem);
      return [_menuItems, paths];
    },
    [[], new Map(paths.set(path, parentKeys))],
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
}: {
  navigations: NavigationItem[];
  onNavigate: BenchProps["onNavigate"];
  location?: string;
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
  const [topMenuItems, sideNavigations, paths] = useMemo(() => {
    return navigations.reduce<
      [Map<Key, MenuItem>, Map<Key, Partialable<MenuItem[]>>, Map<Key, Key[]>]
    >(
      ([topMenuItems, sideNavigations, paths], item) => {
        const [{ children, ..._menuItem }, _paths] = toMenuItem(item, [], paths);
        topMenuItems.set(item.path, _menuItem);
        sideNavigations.set(item.path, children);
        return [topMenuItems, sideNavigations, _paths];
      },
      [new Map(), new Map(), new Map()],
    );
  }, [navigations]);

  // menu selected keys
  const selectedKeys = useMemo<[Key?, Key?]>(() => {
    if (isUndefined(location)) return [];
    return [paths.get(location)?.at(0) ?? location, location];
  }, [location, paths]);

  const sideMenuItems = useMemo<MenuItem[]>(() => {
    if (!selectedKeys[0]) {
      return [];
    }
    return sideNavigations.get(selectedKeys[0]) ?? [];
  }, [sideNavigations, selectedKeys]);

  return {
    selectedKeys,
    topMenuItems: useMemo(() => Array.from(topMenuItems.values()), [topMenuItems]),
    sideMenuItems,
    navigate,
  };
};
