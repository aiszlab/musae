import React, { useMemo } from "react";
import { Layout } from "../layout";
import stylex from "@stylexjs/stylex";
import { elevations, spacing } from "../theme/tokens.stylex";
import type { WorkbenchProps, Logo } from "./types";
import { Partialable } from "@aiszlab/relax/types";
import { Divider } from "../divider";

const { Header, Main } = Layout;

const styles = stylex.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xxsmall,
    boxShadow: elevations.small,
  },

  workbench: {
    height: "100vh",
  },
});
const Workbench = ({ children, title, logo }: WorkbenchProps) => {
  const _logo = useMemo<Partialable<Logo>>(() => {
    if (typeof logo === "string") {
      return {
        url: logo,
      };
    }

    return logo;
  }, [logo]);

  const styled = {
    workbench: stylex.props(styles.workbench),
  };

  return (
    <Layout className={styled.workbench.className} style={styled.workbench.style}>
      <Header>
        {!!_logo?.url && <img src={_logo?.url} />}
        <Divider type="vertical" />
        {title}
      </Header>

      <Main>{children}</Main>
    </Layout>
  );
};

export default Workbench;
