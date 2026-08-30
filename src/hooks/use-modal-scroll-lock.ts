import { isOverflow, setStyle } from "@aiszlab/relax";
import { useLayoutEffect } from "react";

let ownerCount = 0;
let savedBodyStyles: Partial<CSSStyleDeclaration> | undefined;

/**
 * @zh 获取一个 body 滚动锁 owner，并由首个 owner 保存和设置 body 样式
 * @en Acquire a body scroll-lock owner, saving and setting body styles for the first owner
 */
const acquireBodyScrollLock = () => {
  ownerCount += 1;
  if (ownerCount > 1 || !isOverflow(document.body)) return;

  const scrollbarWidth = Math.max(window.innerWidth - document.body.offsetWidth, 0);
  savedBodyStyles = setStyle(document.body, {
    overflow: "hidden",
    width: `calc(100% - ${scrollbarWidth}px)`,
  });
};

/**
 * @zh 释放一个 body 滚动锁 owner，并由最后一个 owner 恢复原始 body 样式
 * @en Release a body scroll-lock owner, restoring the original body styles for the final owner
 */
const releaseBodyScrollLock = () => {
  if (ownerCount === 0) return;

  ownerCount -= 1;
  if (ownerCount > 0 || !savedBodyStyles) return;

  setStyle(document.body, savedBodyStyles);
  savedBodyStyles = undefined;
};

/**
 * @zh 为当前 modal owner 管理引用计数安全的 body 滚动锁
 * @en Manage a reference-count-safe body scroll lock for the current modal owner
 */
export const useModalScrollLock = (locked: boolean) => {
  useLayoutEffect(() => {
    if (!locked) return;

    acquireBodyScrollLock();
    return releaseBodyScrollLock;
  }, [locked]);
};
