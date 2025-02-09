import { useMemo, useRef } from "react";
import type { PanelItem, PanelProps, PanelRef } from "../../types/split-panel";
import { useEvent } from "@aiszlab/relax";
import type { Nullable } from "@aiszlab/relax/types";

/**
 * @description panels hooks
 *
 * in split panel, every panel should be sized
 * if we dragged the bar, only change effected panels
 */
export const usePanels = ({ items }: { items: PanelItem[] }) => {
  const count = items.length;
  const ref = useRef(Array.from<Nullable<PanelRef>>({ length: count }).fill(null));

  const { panels, unsizedItemSpace, lastItemSpace } = useMemo(() => {
    // if default size, mean sized
    const {
      0: unsizedItems,
      1: sizes,
      2: panels,
    } = items.reduce<[PanelItem[], string[], PanelProps[]]>(
      (prev, { defaultSize = 0, defaultSizeUnit = "%", ...item }, index) => {
        const _item: PanelItem = {
          defaultSize,
          defaultSizeUnit,
          ...item,
        };

        const _panelProps: PanelProps = {
          children: null,
          defaultSize: defaultSize > 0 ? `${defaultSize}${defaultSizeUnit}` : void 0,
          last: items.length - 1 === index,
          at: index,
        };

        prev[2].push(_panelProps);
        if (!!_panelProps.defaultSize) {
          prev[1].push(_panelProps.defaultSize);
        } else {
          prev[0].push(_item);
        }

        return prev;
      },
      [[], [], []],
    );

    const sizedSpace = sizes.join(" + ") || "0%";
    const unsizedItemSpace = `(100% - (${sizedSpace})) / ${unsizedItems.length}`;
    const lastItemSpace = `100% - (${sizedSpace}) - ${unsizedItemSpace} * ${
      unsizedItems.length - 1
    }`;

    return {
      panels,
      unsizedItemSpace,
      lastItemSpace,
    };
  }, [items.length]);

  // when panel render, collect panel ref
  const collect = useEvent((reference: Nullable<PanelRef>, at: number) => {
    ref.current[at] = reference;
  });

  return {
    panels,
    unsizedItemSpace,
    lastItemSpace,
    count,
    collect,
    ref,
  };
};
