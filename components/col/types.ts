import { ReactNode } from "react";

export interface ColProps {
  /* span */
  span?: number;

  /* children */
  children: ReactNode;
}

export type ColRenderProps = Required<Pick<ColProps, "span">>;
