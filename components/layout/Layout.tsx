import React, { forwardRef } from "react";
import { Props } from "./";
import _Layout from "./_Layout";

/**
 * @author murukal
 * @description 布局组件
 */
const Layout = forwardRef<null, Props>((props, ref) => {
  return <_Layout {...props} ref={ref} />;
});

export default Layout;
