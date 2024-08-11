import React, { CSSProperties } from "react";
import { Layout } from "../layout";
import stylex from "@stylexjs/stylex";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import type { BenchProps } from "./types";
import { Divider } from "../divider";
import { useLogo, useNavigations } from "./hooks";
import { Menu } from "../menu";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";
import clsx from "clsx";

const { Header, Main, Sider } = Layout;

const styles = {
  bench: stylex.create({
    default: {},

    sider: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
      borderRightWidth: sizes.smallest,
      borderRightStyle: "solid",
      borderRightColor: props.outlineColor,
      paddingInline: spacing.medium,
      height: `calc(100vh - ${sizes.xxxlarge} - ${spacing.xxlarge})`,
      position: "sticky",
      top: `calc(${sizes.xxxlarge} + ${spacing.xxlarge})`,
      overflowY: {
        default: "hidden",
        ":hover": "auto",
      },
    }),

    main: {
      paddingInline: spacing.xxlarge,
      paddingBottom: spacing.xxlarge,
    },
  }),

  header: stylex.create({
    default: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.small,
      boxShadow: elevations.small,
      marginBottom: spacing.xxlarge,
    },

    navigation: {
      marginLeft: spacing.medium,
      marginRight: "auto",
      height: sizes.full,
    },

    divider: {
      height: sizes.xsmall,
    },
  }),
};
const Bench = ({
  children,
  title,
  logo,
  navigations = [],
  layout = "vertical",
  className,
  style,
  trailing,
  onNavigate,
}: BenchProps) => {
  const theme = useTheme();
  const _logo = useLogo(logo);
  const { onSideNavigationClick, onTopNavigationClick, topMenuItems, sideMenuItems } =
    useNavigations({
      navigations,
      onNavigate,
    });

  const styled = {
    bench: stylex.props(styles.bench.default),
    header: stylex.props(styles.header.default),
    main: stylex.props(styles.bench.main),
    sider: stylex.props(
      styles.bench.sider({ outlineColor: theme.colors[ColorToken.OutlineVariant] }),
    ),
    title: stylex.props(typography.title.large),
    divider: stylex.props(styles.header.divider),
    headerNavigation: stylex.props(styles.header.navigation),
  };

  return (
    <Layout
      className={clsx(styled.bench.className, className)}
      style={{
        ...styled.bench.style,
        ...style,
      }}
    >
      <Header className={styled.header.className} style={styled.header.style}>
        {/* logo */}
        {!!_logo && <img src={_logo?.url} alt="logo" />}

        {/* divider */}
        {!!_logo && (
          <div className={styled.divider.className} style={styled.divider.style}>
            <Divider type="vertical" />
          </div>
        )}

        {/* title */}
        <span className={styled.title.className} style={styled.title.style}>
          {title}
        </span>

        {/* top navigation */}
        <Menu
          items={topMenuItems}
          onClick={onTopNavigationClick}
          mode="horizontal"
          className={styled.headerNavigation.className}
          style={styled.headerNavigation.style}
        />

        {/* trailing */}
        {trailing}
      </Header>

      {sideMenuItems.length > 0 && (
        <Sider className={styled.sider.className} style={styled.sider.style}>
          {/* side navigation */}
          <Menu items={sideMenuItems} onClick={onSideNavigationClick} />
        </Sider>
      )}

      <Main className={styled.main.className} style={styled.main.style}>
        {children}
      </Main>
    </Layout>
  );
};

export default Bench;
