import React from "react";
import { toHtml } from "./utils";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { typography } from "../theme/theme";
import type { MarkdownProps } from "../../types/markdown";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";

const styles = $create({
  markdown: {
    width: "fit-content",
    overflow: "auto",
    minWidth: "100%",

    // use higher selector
    ":not(#\\#) pre": {
      padding: spacing.medium,
    },
  },
});

interface Props extends MarkdownProps {
  /**
   * @description
   * is in client, render html
   */
  isInClient: boolean;
}

const Markdown = async ({ value, className, style, isInClient }: Props) => {
  const _html = isInClient ? await toHtml(value) : value;
  const styled = $props(styles.markdown, typography.body.medium);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: _html }}
      className={stringify(className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    />
  );
};

export default Markdown;
