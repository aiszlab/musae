import { isUndefined } from "@aiszlab/relax";
import { useSyncExternalStore } from "react";
import { mediaQueries } from "../theme/tokens.stylex";
import type { Key } from "react";
import type { ResolvedSearchView, SearchItem, SearchView } from "../../types/search";

const subscribeToMobile = (listener: () => void) => {
  const media = window.matchMedia(mediaQueries.mobile);
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
};

const getMobileSnapshot = () => window.matchMedia(mediaQueries.mobile).matches;
const getServerMobileSnapshot = () => false;

/**
 * @zh 解析当前视口适用的 Search View 展示模式
 * @en Resolve the Search View display mode for the current viewport
 */
export const useResolvedSearchView = (view: SearchView): ResolvedSearchView => {
  const isMobile = useSyncExternalStore(
    subscribeToMobile,
    getMobileSnapshot,
    getServerMobileSnapshot,
  );

  return view === "auto" ? (isMobile ? "full-screen" : "modal") : view;
};

/**
 * @zh 获取下一个可用 Search 结果项的键值
 * @en Get the key of the next enabled Search result item
 */
export const getAdjacentEnabledKey = (
  items: SearchItem[],
  activeKey: Key | undefined,
  direction: 1 | -1,
): Key | undefined => {
  const enabledItems = items.filter((item) => !item.disabled);

  if (enabledItems.length === 0) {
    return undefined;
  }

  if (isUndefined(activeKey)) {
    return direction === 1 ? enabledItems[0].key : enabledItems[enabledItems.length - 1].key;
  }

  const activeIndex = enabledItems.findIndex((item) => item.key === activeKey);
  const nextIndex =
    activeIndex === -1
      ? direction === 1
        ? 0
        : enabledItems.length - 1
      : (activeIndex + direction + enabledItems.length) % enabledItems.length;

  return enabledItems[nextIndex].key;
};
