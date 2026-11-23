import { createContext } from "react";

/**
 * @zh 主题动画范围内的默认 Portal 容器
 * @en Default Portal container within a theme transition boundary
 */
export const PortalContainerContext = createContext<HTMLElement | null | undefined>(undefined);
