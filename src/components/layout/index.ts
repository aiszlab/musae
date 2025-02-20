import _Layout from "./layout";
import type { TypedLayout } from "../../types/layout";
import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";
import Footer from "./footer";
import Heading from "./heading";

export const Layout: TypedLayout = Object.assign(_Layout, {
  Header,
  Sidebar,
  Main,
  Footer,
  Heading,
});
