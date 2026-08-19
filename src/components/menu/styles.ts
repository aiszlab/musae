import { create as $create } from "@stylexjs/stylex";
import { duration, sizes, spacing } from "../theme/tokens.stylex";
import { type ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const item = {
  default: $create({
    item: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
      whiteSpace: "nowrap",

      willChange: "background-color, border, color",
      transitionProperty: "background-color, border, color",
      transitionDuration: duration.short,

      // reset item
      boxSizing: "border-box",
    },
  }),

  mode: {
    menuitem: $create({
      horizontal: {},

      vertical: {
        marginBlockStart: {
          default: spacing.xxxxxsmall,
          ":first-of-type": spacing.none,
        },
      },

      inline: {
        marginBlockStart: {
          default: spacing.xxxxxsmall,
          ":first-of-type": spacing.none,
        },
      },
    }),

    item: $create({
      horizontal: {
        height: sizes.full,
        position: "relative",

        "::after": {
          content: "",
          position: "absolute",
          insetInline: 0,
          insetBlockEnd: 0,
          borderBottomWidth: sizes.xxxxxxxxxxsmall,
          borderBottomStyle: "solid",
          willChange: "border-color",
          transitionProperty: "border-color",
          transitionDuration: duration.short,
        },

        ":not(:hover)::after": {
          borderBottomColor: "transparent",
        },

        ":hover::after": {
          "@media (hover: hover)": {
            borderBottomColor: "var(--color-primary)" satisfies ThemeColorVariable,
          },
        },
      },

      vertical: {
        backgroundColor: {
          default: null,
          ":hover": {
            "@media (hover: hover)":
              "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
          },
        },
      },

      inline: {
        backgroundColor: {
          default: null,
          ":hover": {
            "@media (hover: hover)":
              "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
          },
        },
      },
    }),
  },

  size: $create({
    small: {
      paddingBlock: spacing.xxxxxsmall,
      paddingRight: spacing.xxsmall,
      paddingLeft: `calc(${spacing.xxsmall} + var(--level) * ${spacing.large})`,
      borderRadius: sizes.xxxxxxxxxsmall,
    },

    medium: {
      paddingBlock: spacing.xxsmall,
      paddingRight: spacing.medium,
      paddingLeft: `calc(${spacing.medium} + var(--level) * ${spacing.xxxlarge})`,
      borderRadius: sizes.xxxxxxxsmall,
    },

    large: {
      paddingBlock: spacing.medium,
      paddingRight: spacing.large,
      paddingLeft: `calc(${spacing.large} + var(--level) * ${spacing.xxxxxxlarge})`,
      borderRadius: sizes.xxxxsmall,
    },
  }),

  selected: $create({
    inline: {
      backgroundColor: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
      color: "var(--color-primary)" satisfies ThemeColorVariable,
    },

    vertical: {
      backgroundColor: "var(--color-surface-container-highest)" satisfies ThemeColorVariable,
      color: "var(--color-primary)" satisfies ThemeColorVariable,
    },

    horizontal: {
      color: "var(--color-primary)" satisfies ThemeColorVariable,

      "::after": {
        borderBottomColor: "var(--color-primary)" satisfies ThemeColorVariable,
      },
    },
  }),

  popper: $create({
    default: {
      padding: spacing.xxxxxsmall,
    },
  }),
};
const group = $create({
  default: {
    // reset ul group
    margin: spacing.none,
    padding: spacing.none,
    listStyleType: "none",
    color: "var(--color-on-surface)",
    overflow: "auto",
  },

  horizontal: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.xxsmall,
  },

  vertical: {},

  inline: {},

  hidden: {
    display: "none",
  },
});

const subgroup = $create({
  inline: {
    marginBlockStart: spacing.xxxxxsmall,
  },

  vertical: {},

  horizontal: {},
});

const menu = $create({
  default: {
    // add position reason: when read li offsetTop, if parent is not relative, then it will read wrong value
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
    position: "relative",
  },
});
const prefix = $create({
  default: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.xxxxxsmall,
  },
});

const suffix = $create({
  default: {
    marginInlineStart: spacing.auto,
  },
});

const collapser = $create({
  default: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotateX(180deg)",
    transitionProperty: "transform",
    transitionDuration: duration.short,
  },

  expanded: {
    transform: "rotateX(0)",
  },
});

const styles = {
  item,
  group,
  subgroup,
  menu,
  prefix,
  suffix,
  collapser,
};

export default styles;
