import { create as $create } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { ThemeColorVariable } from "../../hooks/use-theme-color-vars";

const richTextEditor = $create({
  editor: {
    backgroundColor: "var(--color-surface-container)" satisfies ThemeColorVariable,
    borderRadius: sizes.xxxxxxxsmall,
  },

  disabled: {
    backgroundColor: null,
  },

  textarea: {
    outline: "none",
    paddingInline: spacing.large,
    paddingBlock: spacing.medium,
    minHeight: sizes.xxxxxxxxxxlarge,
  },
});

const root = $create({
  loading: {
    height: sizes.xxxxxxxxxxlarge,
    width: sizes.full,
    borderRadius: sizes.xxxxxxxsmall,
  },
});

const utils = {
  list: {
    base: $create({
      base: {
        padding: spacing.none,
        margin: spacing.none,
        listStylePosition: "outside",
      },
    }),

    unordered: $create({
      base: {
        listStyleType: "disc",
      },

      checkable: {
        listStyleType: "none",
      },
    }),

    ordered: $create({
      base: {
        listStyleType: "decimal",
      },
    }),

    item: $create({
      base: {
        outline: "none",
        position: "relative",
        marginInline: spacing.xxxlarge,
      },

      checkable: {
        marginInline: spacing.none,
        paddingInline: spacing.xxxlarge,
      },

      checked: {
        textDecoration: "line-through",
      },
    }),
  },

  code: $create({
    block: {
      backgroundColor: "var(--color-surface-container-highest)",
      display: "block",
      overflow: "auto",
      borderRadius: spacing.xxxsmall,
      paddingBlock: spacing.xxsmall,
      paddingInline: spacing.xxsmall,
      marginBlock: spacing.xxxsmall,
    },

    inline: {
      backgroundColor: "var(--color-surface-container-highest)",
      borderRadius: spacing.xxxxxsmall,
      paddingBlock: spacing.xxxxxxsmall,
      paddingInline: spacing.xxxxxsmall,
      marginInline: spacing.xxxxxsmall,
    },
  }),

  heading: $create({
    base: { fontWeight: 700 },

    h1: {
      marginBlockStart: spacing.xxxlarge,
      marginBlockEnd: spacing.xsmall,
    },

    h2: {
      marginBlockStart: spacing.xlarge,
      marginBlockEnd: spacing.xxxsmall,
    },

    h3: {
      marginBlockStart: spacing.large,
      marginBlockEnd: spacing.xxxsmall,
    },

    h4: {
      marginBlockStart: spacing.xsmall,
      marginBlockEnd: spacing.xxxsmall,
    },

    h5: {
      marginBlockStart: spacing.xxsmall,
      marginBlockEnd: spacing.xxxsmall,
    },

    h6: {
      marginBlockEnd: spacing.xxxsmall,
    },
  }),

  link: $create({
    base: {
      color: "var(--color-primary)",
      cursor: "pointer",
      textDecoration: {
        default: "none",
        ":hover": {
          "@media (hover: hover)": "underline",
        },
      },
    },
  }),
};

const dropdown = $create({
  label: {
    width: "var(--width)",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const checkbox = $create({
  base: {
    position: "absolute",
    insetInlineStart: sizes.none,
    insetBlockStart: sizes.none,
    display: "flex",
    padding: spacing.smallest,
  },
});

const floatingLinkEditor = $create({
  popper: {
    padding: spacing.xxsmall,
  },
});

const toolbar = $create({
  base: {
    minHeight: sizes.medium,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xxxxxsmall,
    borderBottomWidth: sizes.smallest,
    borderBottomColor: "var(--color-outline-variant)",
    borderBottomStyle: "solid",
    overflow: "auto",
    padding: spacing.xxxsmall,
  },
});

const styles = {
  richTextEditor,
  root,
  utils,
  dropdown,
  checkbox,
  floatingLinkEditor,
  toolbar,
};

export default styles;
