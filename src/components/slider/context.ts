import { createContext } from "react";

/**
 * @description 滑块组件类名
 */
export const CLASS_NAMES = {
  handle: "slider__handle",
  track: "slider__track",
  active: "slider__track--active",
  inactive: "slider__track--inactive",
};

/**
 * @description 滑块组件上下文
 */
const Context = createContext<{ classNames: typeof CLASS_NAMES }>({
  classNames: CLASS_NAMES,
});

export default Context;
