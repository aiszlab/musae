import React from "react";
import stylex from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import type { BenchProps } from "../../types/bench";
import { useLogo, useMenuItems, useNavigations, useMenuKeys } from "./hooks";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";
import { Menu } from "../menu";
import { MenuOpen as MenuOpenIcon, Menu as MenuIcon } from "../icon/icons";
import { first, last, useBoolean } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";

const styles = {
  bench: stylex.create({
    default: {
      width: "100vw",
      height: "100vh",
      display: "grid",
      gridTemplateAreas: "'heading header' 'sidebar main'",
      gridTemplateRows: `${sizes.xxxxlarge} ${sizes.fr}`,
      gridTemplateColumns: `${sizes.xxxxxxxxlarge} ${sizes.fr}`,

      transitionProperty: "grid-template-columns",
      transitionDuration: duration.medium,
    },

    collapsed: {
      gridTemplateAreas: "'heading header' 'sidebar main' 'expander main'",
      gridTemplateColumns: `${sizes.xxxxlarge} ${sizes.fr}`,
    },
  }),

  heading: stylex.create({
    default: {
      gridArea: "heading",
      paddingInline: spacing.xxxxlarge,
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
      gridArea: "header",
      display: "flex",
      alignItems: "center",

      paddingInline: spacing.xxxxxlarge,

      borderWidth: sizes.none,
      borderLeftWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",
    },
  }),

  sidebar: stylex.create({
    default: {
      gridArea: "sidebar",
      padding: spacing.xxxxlarge,
      overflow: "hidden",

      borderWidth: sizes.none,
      borderTopWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",

      ":focus": {
        overflow: "auto",
      },
    },

    collapsed: {
      padding: null,
      paddingBlockStart: spacing.xxxxlarge,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }),

  menu: stylex.create({
    default: {
      overflow: "hidden",
    },

    collapsed: {
      width: "fit-content",
    },
  }),

  expander: stylex.create({
    default: {
      gridArea: "expander",
      width: sizes.full,
      display: "flex",
      justifyContent: "center",
      paddingBlock: spacing.xxlarge,
      marginBlockStart: spacing.auto,

      borderWidth: sizes.none,
      borderTopWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",
    },
  }),

  main: stylex.create({
    default: {
      gridArea: "main",
      overflow: "auto",
      padding: spacing.xxxxxlarge,

      borderWidth: sizes.none,
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
  const classNames = useClassNames(CLASS_NAMES);
  const theme = useTheme();
  const [isCollapsed, { turnOn, turnOff }] = useBoolean();
  const _logo = useLogo(logo);

  const { navigate, menuItems } = useNavigations({
    navigations,
    onNavigate,
  });

  const { selectedKeys, expandedKeys, onExpandedKeysChange } = useMenuKeys({
    location,
    menuItems,
    defaultExpandedKeys,
  });

  const { header: headerMenuItems, sidebar: sidebarMenuItems } = useMenuItems({
    layout,
    menuItems,
    selectedKeys,
    isCollapsed,
  });

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
    sidebar: {
      default: stylex.props(styles.sidebar.default, isCollapsed && styles.sidebar.collapsed),
      menu: stylex.props(styles.menu.default, isCollapsed && styles.menu.collapsed),
    },
    expander: stylex.props(styles.expander.default),
    main: stylex.props(styles.main.default),
  };

  return (
    <div
      className={stringify(classNames.bench, styled.bench.className, className)}
      style={{
        ...styled.bench.style,
        ...style,
        // @ts-expect-error style vars
        "--color-outline-variant": theme.colors["outline-variant"],
      }}
    >
      <div
        className={stringify(classNames.benchHeading, styled.heading.default.className)}
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
        className={stringify(classNames.benchHeader, styled.header.default.className)}
        style={styled.header.default.style}
      >
        <Menu
          items={headerMenuItems}
          selectedKeys={first(selectedKeys)}
          onClick={navigate}
          mode="horizontal"
        />
      </header>

      <aside
        className={stringify(classNames.benchSidebar, styled.sidebar.default.className)}
        style={styled.sidebar.default.style}
      >
        <Menu
          mode={isCollapsed ? "vertical" : "inline"}
          items={sidebarMenuItems}
          selectedKeys={last(selectedKeys)}
          onClick={navigate}
          expandedKeys={expandedKeys}
          onExpandedKeysChange={onExpandedKeysChange}
          className={styled.sidebar.menu.className}
          style={styled.sidebar.menu.style}
        />
      </aside>

      {isCollapsed && (
        <div
          className={stringify(classNames.benchSidebarExpander, styled.expander.className)}
          style={styled.expander.style}
        >
          <MenuIcon size={24} onClick={turnOff} />
        </div>
      )}

      <main
        className={stringify(classNames.benchMain, mainClassName, styled.main.className)}
        style={styled.main.style}
      >
        {children}
      </main>
    </div>
  );
};

export default Bench;
