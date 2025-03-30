import { $create, $attrs } from "../../utils/styles";
import { spacing } from "../theme/tokens.stylex";
import { typography } from "../theme/theme";
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
import { CheckboxNode } from "./nodes/checkbox";

const _styles = {
  list: {
    default: $create({
      default: {
        padding: spacing.none,
        margin: spacing.none,
        listStylePosition: "outside",
      },
    }),

    unordered: $create({
      default: {
        listStyleType: "disc",
      },

      checkable: {
        listStyleType: "none",
      },
    }),

    ordered: $create({
      default: {
        listStyleType: "decimal",
      },
    }),

    item: $create({
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
    default: { fontWeight: 700 },

    h1: {
      marginBlockStart: spacing.xxlarge,
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
    default: {
      color: "var(--color-primary)",
      cursor: "pointer",
      textDecoration: {
        default: "none",
        ":hover": "underline",
      },
    },
  }),
};

export const usingStyles = () => {
  return {
    h1: $attrs(typography.headline.large, _styles.heading.default, _styles.heading.h1),
    h2: $attrs(typography.headline.medium, _styles.heading.default, _styles.heading.h2),
    h3: $attrs(typography.headline.small, _styles.heading.default, _styles.heading.h3),
    h4: $attrs(typography.title.large, _styles.heading.default, _styles.heading.h4),
    h5: $attrs(typography.title.medium, _styles.heading.default, _styles.heading.h5),
    h6: $attrs(typography.title.medium, _styles.heading.default, _styles.heading.h6),

    code: $attrs(typography.label.medium, _styles.code.block),
    inlineCode: $attrs(typography.label.medium, _styles.code.inline),

    link: $attrs(_styles.link.default),

    list: {
      unordered: $attrs(_styles.list.default.default, _styles.list.unordered.default),
      ordered: $attrs(_styles.list.default.default, _styles.list.ordered.default),
      checkable: $attrs(_styles.list.unordered.checkable),
      item: {
        default: $attrs(_styles.list.item.default),
        unchecked: $attrs(_styles.list.item.checkable),
        checked: $attrs(_styles.list.item.checkable, _styles.list.item.checked),
      },
    },
  };
};

/**
 * @description
 * in musae
 * rich text always use same configuration
 */
export const usingEditor = ({ disabled = false }: { disabled?: boolean }): CreateEditorArgs => {
  const styled = usingStyles();

  const theme: EditorThemeClasses = {
    heading: {
      h1: styled.h1.class,
      h2: styled.h2.class,
      h3: styled.h3.class,
      h4: styled.h4.class,
      h5: styled.h5.class,
      h6: styled.h6.class,
    },
    code: styled.code.class,
    text: {
      code: styled.inlineCode.class,
    },
    link: styled.link.class,
    list: {
      ul: styled.list.unordered.class,
      ol: styled.list.ordered.class,
      checklist: styled.list.checkable.class,
      listitem: styled.list.item.default.class,
      listitemUnchecked: styled.list.item.unchecked.class,
      listitemChecked: styled.list.item.checked.class,
    },
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
      CheckboxNode,
    ],
    theme,
    editable: !disabled,
  };
};
