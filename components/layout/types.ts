import type { ReactNode } from "react";
import { ComponentProps } from "../../types/element";

export enum Token {
  HeaderHeight = 64,
  RowGap = 40,
}

/**
 * @description
 * context value type for shell
 */
export type ContextValue = {};

/**
 * @description
 * shell header props
 */
export type HeaderProps = {
  /**
   * @description
   * children
   */
  children: ReactNode;
};

/**
 * @author murukal
 *
 * @description
 * typed layout, with header sider main footer
 */
export interface TypedLayout {
  /**
   * @description
   * component self
   */
  (props: LayoutProps): ReactNode;

  /**
   * @description
   * header
   */
  Header: (props: HeaderProps) => ReactNode;

  /**
   * @description
   * sider
   */
  Sider: (props: SiderProps) => ReactNode;

  /**
   * @description
   * main
   */
  Main: (props: MainProps) => ReactNode;

  /**
   * @description
   * footer
   */
  Footer: (props: HeaderProps) => ReactNode;
}

/**
 * @description
 * layout props
 */
export type LayoutProps = {
  /**
   * @description
   * children
   */
  children: ReactNode;
};

/**
 * @description
 * main props
 */
export type MainProps = {
  /**
   * @description
   * children
   */
  children: ReactNode;
};

/**
 * @description
 * sider props
 */
export type SiderProps = ComponentProps & {
  /**
   * @description
   * children
   */
  children: ReactNode;
};
