// TODO replace into relax package

import { isDomUsable, useEvent } from "@aiszlab/relax";
import { toArray } from "@aiszlab/relax";
import { useEffect } from "react";
export const useMutateObserver = (_elements: HTMLElement | HTMLElement[] | null, _callback: MutationCallback) => {
  const callback = useEvent(_callback);

  useEffect(() => {
    if (!isDomUsable() || !_elements) {
      return;
    }

    const elements = toArray(_elements);
    const listener = new MutationObserver(callback);

    elements.forEach((element) => {
      listener.observe(element, { subtree: true, childList: true, attributeFilter: ["style", "class"] });
    });

    return () => {
      listener.takeRecords();
      listener.disconnect();
    };
  }, [_elements, callback]);
};
