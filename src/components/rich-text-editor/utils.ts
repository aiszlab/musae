import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type { EditorThemeClasses } from "lexical";
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
import { $headline, $label, $title } from "../theme/theme";
import { type InitialConfigType } from "@lexical/react/LexicalComposer";

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
    default: { fontWeight: 700 },

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

const usingStyles = () => {
  return {
    h1: $props($headline.large, _styles.heading.default, _styles.heading.h1),
    h2: $props($headline.medium, _styles.heading.default, _styles.heading.h2),
    h3: $props($headline.small, _styles.heading.default, _styles.heading.h3),
    h4: $props($title.large, _styles.heading.default, _styles.heading.h4),
    h5: $props($title.medium, _styles.heading.default, _styles.heading.h5),
    h6: $props($title.medium, _styles.heading.default, _styles.heading.h6),

    code: $props($label.medium, _styles.code.block),
    inlineCode: $props($label.medium, _styles.code.inline),

    link: $props(_styles.link.default),

    list: {
      unordered: $props(_styles.list.default.default, _styles.list.unordered.default),
      ordered: $props(_styles.list.default.default, _styles.list.ordered.default),
      checkable: $props(_styles.list.unordered.checkable),
      item: {
        default: $props(_styles.list.item.default),
        unchecked: $props(_styles.list.item.checkable),
        checked: $props(_styles.list.item.checkable, _styles.list.item.checked),
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
}: {
  disabled?: boolean;
}): Pick<InitialConfigType, "nodes" | "theme" | "editable"> => {
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
