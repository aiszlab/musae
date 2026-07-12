import React, { useState, useRef, useCallback, useMemo, type ReactNode } from "react";
import { useEvent, isDomUsable } from "@aiszlab/relax";
import ActionSheet from "./action-sheet";
import type { ActionSheetShowConfig, ActionSheetTrigger } from "../../types/action-sheet";

/**
 * @zh useActionSheet hook。返回 show 函数和 holder 元素。
 * 需要在组件树中渲染 holder，然后通过 show 函数调用。
 * @en useActionSheet hook. Returns a show function and a holder element.
 * Render the holder in the component tree, then call via the show function.
 */
export const useActionSheet = (): [ActionSheetTrigger, ReactNode] => {
  const [config, setConfig] = useState<ActionSheetShowConfig | null>(null);
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const show = useEvent(async (nextConfig: ActionSheetShowConfig): Promise<void> => {
    setConfig(nextConfig);
    setOpen(true);
  });

  const trigger = useMemo<ActionSheetTrigger>(() => ({ show }), [show]);

  const holder = useMemo<ReactNode>(() => {
    if (!config) return null;
    return <ActionSheet open={open} onClose={handleClose} {...config} />;
  }, [config, open, handleClose]);

  return [trigger, holder];
};
