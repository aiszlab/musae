import type { Placement } from "../../types/sheet";

/**
 * @zh 每个弹出方向的隐藏和显示变换值。供 Sheet 基座计算进入/退出动画使用。
 * @en Hidden and visible transform values for each placement direction.
 * Used by the Sheet base to compute enter/exit animations.
 *
 * [hidden, visible]
 */
export const PLACEMENTS: Record<Placement, [hidden: string, visible: string]> = {
  right: ["translateX(100%)", "translateX(0)"],
  left: ["translateX(-100%)", "translateX(0)"],
  bottom: ["translateY(100%)", "translateY(0)"],
  top: ["translateY(-100%)", "translateY(0)"],
};
