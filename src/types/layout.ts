import type { ReactNode } from "react";
import type { ComponentProps } from "./element";

/**
 * @description
 * header props
 */
export type HeaderProps = ComponentProps & {
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
   * @description heading
   */
  Heading: (props: HeadingProps) => ReactNode;

  /**
   * @description
   * header
   */
  Header: (props: HeaderProps) => ReactNode;

  /**
   * @description
   * sidebar
   */
  Sidebar: (props: SidebarProps) => ReactNode;

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
export type LayoutProps = ComponentProps & {
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
 * sidebar props
 */
export type SidebarProps = ComponentProps & {
  /**
   * @description
   * children
   */
  children: ReactNode;
};

/**
 * @description heading props
 */
export interface HeadingProps extends ComponentProps {
  /**
   * @description children
   */
  children: ReactNode;
}

/**
 * @description footer props
 */
export interface FooterProps extends ComponentProps {
  /**
   * @description children
   */
  children: ReactNode;
}
