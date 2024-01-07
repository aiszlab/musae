import _Layout from "./layout";
import { TypedLayout } from "./types";
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
