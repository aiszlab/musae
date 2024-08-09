import React from "react";
import { Layout } from "../layout";
import stylex from "@stylexjs/stylex";
import { elevations, spacing } from "../theme/tokens.stylex";
import type { WorkbenchProps } from "./types";
import { Divider } from "../divider";
import { useLogo } from "./hooks";

const { Header, Main, Sider } = Layout;

const styles = stylex.create({
  workbench: {
    height: "100vh",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xxsmall,
    boxShadow: elevations.small,
  },
});
const Workbench = ({ children, title, logo }: WorkbenchProps) => {
  const _logo = useLogo(logo);

  const styled = {
    workbench: stylex.props(styles.workbench),
    header: stylex.props(styles.header),
  };

  return (
    <Layout className={styled.workbench.className} style={styled.workbench.style}>
      <Header className={styled.header.className} style={styled.header.style}>
        {/* logo */}
        {!!_logo && <img src={_logo?.url} alt="logo" />}

        {/* divider */}
        <Divider type="vertical" />

        {/* title */}
        {title}
      </Header>

      <Main>{children}</Main>
    </Layout>
  );
};

export default Workbench;
