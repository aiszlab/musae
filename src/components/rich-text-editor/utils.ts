import styles from "./styles";
import { props as $props } from "@stylexjs/stylex";
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

const usingStyles = () => {
  return {
    h1: $props($headline.large, styles.utils.heading.default, styles.utils.heading.h1),
    h2: $props($headline.medium, styles.utils.heading.default, styles.utils.heading.h2),
    h3: $props($headline.small, styles.utils.heading.default, styles.utils.heading.h3),
    h4: $props($title.large, styles.utils.heading.default, styles.utils.heading.h4),
    h5: $props($title.medium, styles.utils.heading.default, styles.utils.heading.h5),
    h6: $props($title.medium, styles.utils.heading.default, styles.utils.heading.h6),

    code: $props($label.medium, styles.utils.code.block),
    inlineCode: $props($label.medium, styles.utils.code.inline),

    link: $props(styles.utils.link.default),

    list: {
      unordered: $props(styles.utils.list.default.default, styles.utils.list.unordered.default),
      ordered: $props(styles.utils.list.default.default, styles.utils.list.ordered.default),
      checkable: $props(styles.utils.list.unordered.checkable),
      item: {
        default: $props(styles.utils.list.item.default),
        unchecked: $props(styles.utils.list.item.checkable),
        checked: $props(styles.utils.list.item.checkable, styles.utils.list.item.checked),
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
