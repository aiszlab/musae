import { ReactNode } from "react";
import Layout from "./Layout";

interface Props {
  sider?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

export { Props, Layout };
