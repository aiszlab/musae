import React from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import type { BenchProps } from "../../types/bench";
import { useLogo, useMenuItems, useNavigations, useMenuKeys } from "./hooks";
import { typography } from "../theme/theme";
import { stringify } from "@aiszlab/relax/class-name";
import { Menu } from "../menu";
import { MenuOpen as MenuOpenIcon, Menu as MenuIcon } from "../icon/icons";
import { first, last } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES, useStore } from "./context";
import { Layout } from "../layout";

const styles = {
  bench: $create({
    default: {
      width: "100vw",
      height: "100vh",
      display: "grid",
      gridTemplateRows: `${sizes.xxxxlarge} ${sizes.fr} ${sizes.auto}`,
      gridTemplateColumns: `${sizes.xxxxxxxxlarge} ${sizes.fr}`,
      transitionProperty: "grid-template-columns",
      transitionDuration: duration.medium,
    },

    collapsed: {
      // gridTemplateAreas: "'heading header' 'sidebar main' 'expander main'",
      gridTemplateColumns: `${sizes.xxxxlarge} ${sizes.fr}`,
    },
  }),

  heading: $create({
    default: {},

    collapsed: {
      justifyContent: "center",
      paddingInline: spacing.none,
    },
  }),

  collapser: $create({
    default: {
      marginInlineStart: "auto",
    },
  }),

  header: $create({
    default: {},
  }),

  trailing: $create({
    default: {
      display: "flex",
      gap: spacing.xxsmall,
      marginInlineStart: spacing.auto,
    },
  }),

  sidebar: $create({
    default: {},

    collapsed: {
      paddingInline: spacing.none,
      paddingBlockEnd: spacing.none,
      paddingBlockStart: spacing.xxxxlarge,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }),

  menu: $create({
    default: {
      overflow: "hidden",
    },

    collapsed: {
      width: "fit-content",
    },
  }),

  expander: $create({
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

  main: $create({
    default: {},
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
  layout = "mix",
}: BenchProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const { collapse, expand, isCollapsed } = useStore();
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
    bench: $props(styles.bench.default, isCollapsed && styles.bench.collapsed),
    heading: $props(
      typography.title.large,
      styles.heading.default,
      isCollapsed && styles.heading.collapsed,
    ),
    header: $props(styles.header.default),
    sidebar: $props(styles.sidebar.default, isCollapsed && styles.sidebar.collapsed),
    menu: $props(styles.menu.default, isCollapsed && styles.menu.collapsed),
    trailing: $props(styles.trailing.default),
    main: $props(styles.main.default),
    collapser: $props(styles.collapser.default),
    expander: $props(styles.expander.default),
    title: $props(typography.title.large),
  };

  return (
    <Layout
      className={stringify(classNames.bench, styled.bench.className, className)}
      style={{
        ...styled.bench.style,
        ...style,
      }}
    >
      <Layout.Heading
        className={stringify(classNames.heading, styled.heading.className)}
        style={styled.heading.style}
      >
        {_logo}

        {!isCollapsed && (
          <>
            {title}

            <MenuOpenIcon
              size={24}
              onClick={collapse}
              className={styled.collapser.className}
              style={styled.collapser.style}
            />
          </>
        )}
      </Layout.Heading>

      <Layout.Header
        className={stringify(classNames.header, styled.header.className)}
        style={styled.header.style}
      >
        <Menu
          items={headerMenuItems}
          selectedKeys={first(selectedKeys)}
          onClick={navigate}
          mode="horizontal"
        />

        <div
          className={stringify(classNames.trailing, styled.trailing.className)}
          style={styled.trailing.style}
        >
          {trailing}
        </div>
      </Layout.Header>

      <Layout.Sidebar
        className={stringify(classNames.sidebar, styled.sidebar.className)}
        style={styled.sidebar.style}
      >
        <Menu
          mode={isCollapsed ? "vertical" : "inline"}
          items={sidebarMenuItems}
          selectedKeys={last(selectedKeys)}
          onClick={navigate}
          expandedKeys={expandedKeys}
          onExpandedKeysChange={onExpandedKeysChange}
          className={styled.menu.className}
          style={styled.menu.style}
        />

        {isCollapsed && (
          <div
            className={stringify(classNames.expander, styled.expander.className)}
            style={styled.expander.style}
          >
            <MenuIcon size={24} onClick={expand} />
          </div>
        )}
      </Layout.Sidebar>

      <Layout.Main
        className={stringify(classNames.main, mainClassName, styled.main.className)}
        style={styled.main.style}
      >
        {children}
      </Layout.Main>
    </Layout>
  );
};

export default Bench;
