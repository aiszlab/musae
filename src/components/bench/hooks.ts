import { type Key, useMemo, useState } from "react";
import type { BenchProps, Logo, NavigationItem } from "./types";
import type { Partialable } from "@aiszlab/relax/types";
import { MenuItem } from "../menu";
import { useDefault, useEvent } from "@aiszlab/relax";

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
  keyWithParents: Map<Key, Key[]>,
): MenuItem => {
  keyWithParents.set(path, parentKeys);

  return {
    key: path,
    children: children?.map((child) => toMenuItem(child, [...parentKeys, path], keyWithParents)),
    ...item,
  };
};

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
  const navigate = useEvent((path: string) => {
    if (onNavigate) {
      onNavigate(path);
      return;
    }

    window.open(path, "_self");
  });

  const [topMenuItems, sideNavigations, keyWithParents] = useMemo(() => {
    return navigations.reduce<
      [Map<Key, MenuItem>, Map<Key, Partialable<MenuItem[]>>, Map<Key, Key[]>]
    >(
      (prev, { children, ...item }) => {
        prev[0].set(item.path, toMenuItem(item, [], prev[2]));
        prev[1].set(
          item.path,
          children?.map((child) => toMenuItem(child, [item.path], prev[2])),
        );
        return prev;
      },
      [new Map(), new Map(), new Map()],
    );
  }, [navigations]);

  const defaultSelectedKeys = useDefault<[Partialable<Key>, Partialable<Key>]>(() => {
    const mapped = keyWithParents.get(window.location.pathname);
    return [mapped?.at(0), window.location.pathname];
  });

  const [selectedKeys, setSelectedKeys] =
    useState<[Partialable<Key>, Partialable<Key>]>(defaultSelectedKeys);

  const sideMenuItems = useMemo<MenuItem[]>(() => {
    if (!selectedKeys[0]) return [];
    return sideNavigations.get(selectedKeys[0]) ?? [];
  }, [sideNavigations, selectedKeys]);

  const onTopNavigationClick = (key: Key) => {
    setSelectedKeys((prev) => [key, prev[1]]);
    navigate(key.toString());
  };

  const onSideNavigationClick = (key: Key) => {
    setSelectedKeys((prev) => [prev[0], key]);
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
