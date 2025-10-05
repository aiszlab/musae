import { createContext } from "react";

/**
 * class name
 */
export const CLASS_NAMES = {
  image: "image",
  img: "img",
  overlay: "overlay",
};

/**
 * image context
 * @description 图片上下文，提供图片额外定制的能力
 */
export default createContext<{
  /**
   * 移除图片
   */
  onRemove?: () => void;
}>({});
