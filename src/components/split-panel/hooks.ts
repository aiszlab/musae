import { useMemo } from "react";
import { PanelItem, PanelProps, SplitPanelProps } from "../../types/split-panel";
import { last } from "@aiszlab/relax";
import { Partialable } from "@aiszlab/relax/types";

/**
 * @description panels hooks
 *
 * in split panel, every panel should be sized
 * if we dragged the bar, only change effected panels
 */
export const usePanels = ({ items }: { items: PanelItem[] }) => {
  const count = items.length;

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

  return {
    panels,
    unsizedItemSpace,
    lastItemSpace,
    count,
  };
};
