import { toArray } from "@aiszlab/relax";
import { useMemo } from "react";
import type { TriggerBy } from "../../types/popover";

/**
 * @description
 * used triggers
 */
export const useTriggerBy = (triggerBy: TriggerBy | TriggerBy[]) => {
  const _triggerBy = useMemo(() => new Set(toArray(triggerBy)), [triggerBy]);

  const isHoverable = useMemo(() => _triggerBy.has("hover"), [_triggerBy]);

  const isFocusable = useMemo(() => _triggerBy.has("focus"), [_triggerBy]);

  const isClickable = useMemo(() => _triggerBy.has("click"), [_triggerBy]);

  const isContextMenuable = useMemo(() => _triggerBy.has("contextMenu"), [_triggerBy]);

  return {
    isHoverable,
    isFocusable,
    isClickable,
    isContextMenuable,
  };
};
