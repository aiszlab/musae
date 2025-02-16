import React from "react";
import stylex from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import type { BenchProps } from "../../types/bench";
import { useLogo, useMenuItems, useNavigations, useSelectedKeys } from "./hooks";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";
import { Menu } from "../menu";
import { MenuOpen as MenuOpenIcon, Menu as MenuIcon } from "../icon/icons";
import { useBoolean } from "@aiszlab/relax";

const styles = {
  bench: stylex.create({
    default: {
      width: "100vw",
      height: "100vh",
      display: "grid",
      gridTemplateAreas: "'heading header' 'sider main'",
      gridTemplateRows: `${sizes.xxxxlarge} ${sizes.fr}`,
      gridTemplateColumns: `${sizes.xxxxxxxxlarge} ${sizes.fr}`,

      transitionProperty: "grid-template-columns",
      transitionDuration: duration.medium,
    },

    collapsed: {
      gridTemplateColumns: `${sizes.xxxxlarge} ${sizes.fr}`,
    },
  }),

  heading: stylex.create({
    default: {
      paddingInline: spacing.xxxxlarge,
      gridArea: "heading",
      fontWeight: 700,

      display: "flex",
      alignItems: "center",
      gap: spacing.xxsmall,
      overflow: "hidden",
      whiteSpace: "nowrap",
    },

    collapsed: {
      justifyContent: "center",
      paddingInline: spacing.none,
    },

    collapser: {
      marginInlineStart: "auto",
    },
  }),

  header: stylex.create({
    default: {
      display: "flex",
      alignItems: "center",

      paddingInline: spacing.xxxxxlarge,

      borderLeftWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",
    },
  }),

  sidebar: stylex.create({
    default: {
      padding: spacing.xxxxlarge,

      borderTopWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",
    },
  }),

  main: stylex.create({
    default: {
      overflow: "auto",
      padding: spacing.xxxxxlarge,

      borderTopWidth: sizes.smallest,
      borderLeftWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",
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
  // TODO
  trailing,
  onNavigate,
  location = window.location.pathname,
  defaultExpandedKeys,
  classNames: { main: mainClassName } = {},
  layout = "mix",
}: BenchProps) => {
  const theme = useTheme();
  const [isCollapsed, { turnOn, turnOff }] = useBoolean();
  const _logo = useLogo(logo);

  const { navigate, menuItems } = useNavigations({
    navigations,
    onNavigate,
  });
  const { header: headerSelectedKeys, sidebar: sidebarSelectedKeys } = useSelectedKeys({
    location,
    menuItems,
  });
  const { header: headerMenuItems, sidebar: sidebarMenuItems } = useMenuItems({
    layout,
    menuItems,
    headerSelectedKeys,
  });

  console.log("headerMenuItems===", headerMenuItems);
  console.log("sidebarMenuItems===", sidebarMenuItems);
  console.log("headerSelectedKeys===", headerSelectedKeys);
  console.log("sidebarSelectedKeys===", sidebarSelectedKeys);

  const styled = {
    bench: stylex.props(styles.bench.default, isCollapsed && styles.bench.collapsed),
    heading: {
      default: stylex.props(
        typography.title.large,
        styles.heading.default,
        isCollapsed && styles.heading.collapsed,
      ),
      title: stylex.props(typography.title.large),
      collapser: stylex.props(styles.heading.collapser),
    },
    header: {
      default: stylex.props(styles.header.default),
    },
    sidebar: stylex.props(styles.sidebar.default),
    main: stylex.props(styles.main.default),
  };

  return (
    <div
      className={stringify(styled.bench.className, className)}
      style={{
        ...styled.bench.style,
        ...style,
        // @ts-expect-error style vars
        "--color-outline-variant": theme.colors["outline-variant"],
      }}
    >
      <div
        className={stringify(styled.heading.default.className)}
        style={styled.heading.default.style}
      >
        {_logo}

        {!isCollapsed && (
          <>
            {title}

            <MenuOpenIcon
              size={24}
              onClick={turnOn}
              className={styled.heading.collapser.className}
              style={styled.heading.collapser.style}
            />
          </>
        )}
      </div>

      <header
        className={stringify(styled.header.default.className)}
        style={styled.header.default.style}
      >
        <Menu items={headerMenuItems} selectedKeys={headerSelectedKeys} onClick={navigate} />
      </header>

      <aside className={stringify(styled.sidebar.className)} style={styled.sidebar.style}>
        {isCollapsed && <MenuIcon size={24} onClick={turnOff} />}
        <Menu
          items={sidebarMenuItems}
          selectedKeys={sidebarSelectedKeys}
          onClick={navigate}
          defaultExpandedKeys={defaultExpandedKeys}
        />
      </aside>

      <main className={stringify(mainClassName, styled.main.className)} style={styled.main.style}>
        {children}
      </main>
    </div>
  );
};

export default Bench;
