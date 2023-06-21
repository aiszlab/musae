import { ReactNode } from "react";
import Layout from "./Layout";

export interface Props {
  sider?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

export default Layout;
