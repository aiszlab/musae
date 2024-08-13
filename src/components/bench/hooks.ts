import { type Key, useMemo, useState } from "react";
import type { BenchProps, Logo, NavigationItem } from "./types";
import type { Partialable } from "@aiszlab/relax/types";
import { MenuItem } from "../menu";
import { isDomUsable, isUndefined, useDefault, useEvent } from "@aiszlab/relax";

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
  const navigate = useEvent((path: string) => {
    if (onNavigate) {
      onNavigate(path);
      return;
    }

    window.open(path, "_self");
  });

  const [topMenuItems, sideNavigations, paths] = useMemo(() => {
    return navigations.reduce<
      [Map<Key, MenuItem>, Map<Key, Partialable<MenuItem[]>>, Map<Key, Key[]>]
    >(
      ([topMenuItems, sideNavigations, paths], { children, ...item }) => {
        const [_menuItem, _paths] = toMenuItem(item, [], paths);
        topMenuItems.set(item.path, _menuItem);
        sideNavigations.set(item.path, _menuItem.children);
        return [topMenuItems, sideNavigations, _paths];
      },
      [new Map(), new Map(), new Map()],
    );
  }, [navigations]);

  const selectedKeys = useMemo<[Partialable<Key>, Partialable<Key>]>(() => {
    if (isUndefined(location)) return [void 0, void 0];

    const root = paths.get(location)?.at(0);
    if (isUndefined(root)) return [void 0, void 0];

    return [root, location];
  }, [location, paths]);

  const sideMenuItems = useMemo<MenuItem[]>(() => {
    if (!selectedKeys[0]) {
      return [];
    }
    return sideNavigations.get(selectedKeys[0]) ?? [];
  }, [sideNavigations, selectedKeys]);

  const onTopNavigationClick = (key: Key) => {
    navigate(key.toString());
  };

  const onSideNavigationClick = (key: Key) => {
    navigate(key.toString());
  };

  return {
    selectedKeys,
    topMenuItems: useMemo(() => Array.from(topMenuItems.values()), [topMenuItems]),
    sideMenuItems,
    onTopNavigationClick,
    onSideNavigationClick,
  };
};
