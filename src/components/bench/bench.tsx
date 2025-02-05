import React, { type CSSProperties } from "react";
import { Layout } from "../layout";
import stylex from "@stylexjs/stylex";
import { elevations, ElevationToken, sizes, spacing } from "../theme/tokens.stylex";
import type { BenchProps } from "../../types/bench";
import { Divider } from "../divider";
import { useLogo, useNavigations } from "./hooks";
import { Menu } from "../menu";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";

const { Header, Main, Sider } = Layout;

const styles = {
  bench: stylex.create({
    default: {},

    sider: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
      borderRightWidth: sizes.smallest,
      borderRightStyle: "solid",
      borderRightColor: props.outlineColor,
      paddingInline: spacing.medium,
      paddingBlockEnd: spacing.xxsmall,

      position: "sticky",
      height: `calc(100vh - ${sizes.xxxlarge} - ${spacing.xxxlarge})`,
      top: `calc(${sizes.xxxlarge} + ${spacing.xxxlarge})`,

      overflowY: {
        default: "hidden",
        ":hover": "auto",
      },
    }),

    main: {},
  }),

  header: stylex.create({
    default: (props: { elevation: ElevationToken }) => ({
      gap: spacing.xxsmall,
      boxShadow: elevations[props.elevation],
    }),

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
  className,
  style,
  trailing,
  onNavigate,
  location,
  defaultExpandedKeys,
  classNames: { main: mainClassName } = {},
  elevation = "xsmall",
  layout = "mix",
}: BenchProps) => {
  const theme = useTheme();
  const _logo = useLogo(logo);
  const { navigate, topMenuItems, sideMenuItems, selectedKeys } = useNavigations({
    navigations,
    onNavigate,
    location,
    layout,
  });

  const styled = {
    bench: stylex.props(styles.bench.default),
    header: stylex.props(styles.header.default({ elevation })),
    main: stylex.props(styles.bench.main),
    sider: stylex.props(styles.bench.sider({ outlineColor: theme.colors["outline-variant"] })),
    title: stylex.props(typography.title.large),
    divider: stylex.props(styles.header.divider),
    headerNavigation: stylex.props(styles.header.navigation),
  };

  return (
    <Layout
      className={stringify(styled.bench.className, className)}
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
            <Divider orientation="vertical" />
          </div>
        )}

        {/* title */}
        <span className={styled.title.className} style={styled.title.style}>
          {title}
        </span>

        {/* top navigation */}
        <Menu
          items={topMenuItems}
          onClick={navigate}
          mode="horizontal"
          className={styled.headerNavigation.className}
          style={styled.headerNavigation.style}
          selectedKeys={selectedKeys[0]}
        />

        {/* trailing */}
        {trailing}
      </Header>
      {sideMenuItems.length > 0 && (
        <Sider className={styled.sider.className} style={styled.sider.style}>
          {/* side navigation */}
          <Menu
            items={sideMenuItems}
            onClick={navigate}
            defaultExpandedKeys={defaultExpandedKeys}
            selectedKeys={selectedKeys[1]}
          />
        </Sider>
      )}

      <Main className={stringify(mainClassName, styled.main.className)} style={styled.main.style}>
        {children}
      </Main>
    </Layout>
  );
};

export default Bench;
