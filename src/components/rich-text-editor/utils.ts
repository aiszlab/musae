import stylex from "@stylexjs/stylex";
import { opacity, spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
import { styles as checkboxStyles } from "../checkbox";
import type { CreateEditorArgs, EditorThemeClasses } from "lexical";
/* nodes */
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { LinkNode } from "@lexical/link";
import { ListNode } from "@lexical/list";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { CodeNode } from "@lexical/code";
import {
  CheckableListItemNode,
  replacement as listItemNodeReplacement,
} from "./nodes/checkable-list-item";

const _styles = {
  list: {
    default: stylex.create({
      default: {
        padding: spacing.none,
        margin: spacing.none,
        listStylePosition: "outside",
      },
    }),

    unordered: stylex.create({
      default: {
        listStyleType: "disc",
      },

      checkable: {
        listStyleType: "none",
      },
    }),

    ordered: stylex.create({
      default: {
        listStyleType: "decimal",
      },
    }),

    item: stylex.create({
      default: {
        outline: "none",
        position: "relative",
        marginInline: spacing.xxlarge,
      },

      checkable: {
        marginInline: spacing.none,
        paddingInline: spacing.xxlarge,
      },

      checked: {
        textDecoration: "line-through",
      },
    }),
  },

  code: stylex.create({
    block: {
      backgroundColor: "var(--surface-container-highest)",
      display: "block",
      overflow: "auto",
      borderRadius: spacing.xxsmall,
      paddingBlock: spacing.xsmall,
      paddingInline: spacing.xsmall,
      marginBlock: spacing.xxsmall,
    },

    inline: {
      backgroundColor: "var(--surface-container-highest)",
      borderRadius: spacing.xxxsmall,
      paddingBlock: spacing.xxxxsmall,
      paddingInline: spacing.xxxsmall,
      marginInline: spacing.xxxsmall,
    },
  }),

  heading: stylex.create({
    default: { fontWeight: 700 },

    h1: {
      marginBlockStart: spacing.xxlarge,
      marginBlockEnd: spacing.small,
    },

    h2: {
      marginBlockStart: spacing.xlarge,
      marginBlockEnd: spacing.xxsmall,
    },

    h3: {
      marginBlockStart: spacing.large,
      marginBlockEnd: spacing.xxsmall,
    },

    h4: {
      marginBlockStart: spacing.small,
      marginBlockEnd: spacing.xxsmall,
    },

    h5: {
      marginBlockStart: spacing.xsmall,
      marginBlockEnd: spacing.xxsmall,
    },

    h6: {
      marginBlockEnd: spacing.xxsmall,
    },
  }),

  link: stylex.create({
    default: {
      color: "var(--primary)",
      cursor: "pointer",
      textDecoration: {
        default: "none",
        ":hover": "underline",
      },
    },
  }),

  checkbox: stylex.create({
    default: {
      position: "absolute",
      insetInlineStart: spacing.xxxsmall,
      insetBlockStart: spacing.xxxxsmall,

      // if node is disabled, show disabled style
      ':not([aria-disabled="false"])': {
        opacity: opacity.thicker,
        cursor: "not-allowed",
      },
    },
  }),
};

export const usingStyles = () => {
  return {
    h1: stylex.props(typography.headline.large, _styles.heading.default, _styles.heading.h1),
    h2: stylex.props(typography.headline.medium, _styles.heading.default, _styles.heading.h2),
    h3: stylex.props(typography.headline.small, _styles.heading.default, _styles.heading.h3),
    h4: stylex.props(typography.title.large, _styles.heading.default, _styles.heading.h4),
    h5: stylex.props(typography.title.medium, _styles.heading.default, _styles.heading.h5),
    h6: stylex.props(typography.title.medium, _styles.heading.default, _styles.heading.h6),

    code: stylex.props(typography.label.medium, _styles.code.block),
    inlineCode: stylex.props(typography.label.medium, _styles.code.inline),

    link: stylex.props(_styles.link.default),

    checkbox: stylex.props(checkboxStyles.input.default, _styles.checkbox.default),

    list: {
      unordered: stylex.props(_styles.list.default.default, _styles.list.unordered.default),
      ordered: stylex.props(_styles.list.default.default, _styles.list.ordered.default),
      checkable: stylex.props(_styles.list.unordered.checkable),
      item: {
        default: stylex.props(_styles.list.item.default),
        unchecked: stylex.props(_styles.list.item.checkable),
        checked: stylex.props(_styles.list.item.checkable, _styles.list.item.checked),
      },
    },
  };
};

/**
 * @description
 * in musae
 * rich text always use same configuration
 */
export const usingEditor = ({
  disabled = false,
}: { disabled?: boolean } = {}): CreateEditorArgs => {
  const styled = usingStyles();

  const theme: EditorThemeClasses = {
    heading: {
      h1: styled.h1.className,
      h2: styled.h2.className,
      h3: styled.h3.className,
      h4: styled.h4.className,
      h5: styled.h5.className,
      h6: styled.h6.className,
    },
    code: styled.code.className,
    text: {
      code: styled.inlineCode.className,
    },
    link: styled.link.className,
    list: {
      ul: styled.list.unordered.className,
      ol: styled.list.ordered.className,
      checklist: styled.list.checkable.className,
      listitem: styled.list.item.default.className,
      listitemUnchecked: styled.list.item.unchecked.className,
      listitemChecked: styled.list.item.checked.className,
    },
    checkbox: styled.checkbox.className,
  };

  return {
    nodes: [
      HeadingNode,
      QuoteNode,
      CodeNode,
      LinkNode,
      ListNode,
      CheckableListItemNode,
      listItemNodeReplacement(disabled),
      HorizontalRuleNode,
    ],
    theme,
    editable: !disabled,
  };
};
