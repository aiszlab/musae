import { ReactNode } from "react";
import { ComponentProps } from "./element";

/**
 * @description split panel props
 */
export interface SplitPanelProps extends ComponentProps {
    /**
     * @description items
     */
    items: ReactNode[]
}