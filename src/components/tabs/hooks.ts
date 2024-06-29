import { clamp, isUndefined, useControlledState, useEvent } from "@aiszlab/relax";
import { useLayoutEffect, useMemo, useRef, useState, useEffect, type Key, type RefObject, useContext } from "react";
import type { TabItem } from "./types";
import Context from "./context";

/**
 * @description
 * use tab context
 */
export const useTabsContext = () => {
  return useContext(Context) ?? { items: [], activeKey: void 0 };
};

/**
 * @description
 * tabs
 */
export const useTabs = ({
  activeKey: _activeKey,
  items,
  defaultActiveKey,
}: {
  activeKey?: Key;
  items: TabItem[];
  defaultActiveKey?: Key;
}) => {
  const [activeKey, setActiveKey] = useControlledState(_activeKey, {
    defaultState: defaultActiveKey ?? items.at(0)?.key,
  });

  const [activatedKeys, setActivatedKeys] = useState<Set<Key>>(() => {
    return new Set(isUndefined(activeKey) ? [] : [activeKey]);
  });

  const changeActiveKey = useEvent((key: Key) => {
    setActiveKey(key);
    setActivatedKeys((prev) => new Set(prev).add(key));
  });

  return {
    activeKey,
    activatedKeys,
    changeActiveKey,
  };
};

/**
 * @description
 * count dom ele size
 */
export const useNavigation = () => {
  const navigatorRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  // navigator size
  const [navigatorSize, setNavigatorSize] = useState(0);
  // tabs size
  const [tabsSize, setTabsSize] = useState(0);

  useLayoutEffect(() => {
    const _navigatorSize = navigatorRef.current?.getBoundingClientRect().width ?? 0;
    const _tabsSize = tabsRef.current?.getBoundingClientRect().width ?? 0;

    setNavigatorSize(_navigatorSize);
    setTabsSize(_tabsSize);
  }, []);

  const { maxOffset, minOffset } = useMemo(() => {
    return {
      maxOffset: Math.max(0, navigatorSize - tabsSize),
      minOffset: 0,
    };
  }, [navigatorSize, tabsSize]);

  const { isLeadingOverflow, isTrailingOverflow } = useMemo(() => {
    return {
      isLeadingOverflow: offset < minOffset,
      isTrailingOverflow: offset > maxOffset,
    };
  }, [minOffset, maxOffset, offset]);

  const scroll = useEvent((delta: number) => {
    setOffset((prev) => {
      return clamp(minOffset, maxOffset, prev + delta);
    });
  });

  return {
    navigatorRef,
    scroll,
    offset,
    isLeadingOverflow,
    isTrailingOverflow,
  };
};

/**
 * @description
 * use navigator scroll
 */
export const useNavigatorScroll = ({
  navigatorRef,
  scroll,
}: {
  navigatorRef: RefObject<HTMLDivElement>;
  scroll: (delta: number) => void;
}) => {
  // mouse wheel
  const wheel = useEvent(({ deltaX }: WheelEvent) => {
    scroll(deltaX);
  });

  useEffect(() => {
    const navigator = navigatorRef.current;

    navigator?.addEventListener("wheel", wheel);

    return () => {
      navigator?.removeEventListener("wheel", wheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
