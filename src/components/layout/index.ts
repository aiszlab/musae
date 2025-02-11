import _Layout from "./layout";
import type { TypedLayout } from "../../types/layout";
import Header from "./header";
import Sider from "./sider";
import Main from "./main";
import Footer from "./header";

export const Layout: TypedLayout = Object.assign(_Layout, {
  Header,
  Sider,
  Main,
  Footer,
});
