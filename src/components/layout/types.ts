import type { Dispatch, ReactNode, SetStateAction } from "react";
import { ComponentProps } from "../../types/element";

/**
 * @description
 * context value type for shell
 */
export type ContextValue = {
  /**
   * @description
   * main class name setter
   */
  setMainClassName: Dispatch<SetStateAction<ComponentProps["className"]>>;

  /**
   * @description
   * main style setter
   */
  setMainStyle: Dispatch<SetStateAction<ComponentProps["style"]>>;
};

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
export type MainProps = ComponentProps & {
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
