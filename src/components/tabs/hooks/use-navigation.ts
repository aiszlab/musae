import { clamp, useEvent, useMount, useMounted, useResize } from "@aiszlab/relax";
import { useMemo, useRef, useState } from "react";

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

  const { maxOffset, minOffset } = useMemo(() => {
    return {
      maxOffset: Math.max(0, tabsSize - navigatorSize),
      minOffset: 0,
    };
  }, [navigatorSize, tabsSize]);

  // handle scroll
  const scrollNavigation = useEvent((delta: number) => {
    setOffset(clamp(delta, minOffset, maxOffset));
  });

  const resize = useEvent(() => {
    const _navigatorSize = navigatorRef.current?.getBoundingClientRect().width ?? 0;
    const _tabsSize = tabsRef.current?.getBoundingClientRect().width ?? 0;

    setNavigatorSize(_navigatorSize);
    setTabsSize(_tabsSize);
    scrollNavigation(0);
  });

  const { isLeadingOverflow, isTrailingOverflow } = useMemo(() => {
    return {
      isLeadingOverflow: offset > minOffset,
      isTrailingOverflow: offset < maxOffset,
    };
  }, [minOffset, maxOffset, offset]);

  // if window resize
  // re-calculate offsets range
  useResize(resize);

  // mouse wheel
  const scrollByWheel = useEvent((event: WheelEvent) => {
    event.preventDefault();
    const { deltaY } = event;
    scrollNavigation(offset + deltaY);
  });

  // calculate size once at mounting step
  useMount(() => {
    resize();
  });

  useMounted(() => {
    navigatorRef.current?.addEventListener("wheel", scrollByWheel);

    return () => {
      navigatorRef.current?.removeEventListener("wheel", scrollByWheel);
    };
  });

  return {
    navigatorRef,
    tabsRef,
    offset,
    isLeadingOverflow,
    isTrailingOverflow,
    scrollNavigation,
  };
};
