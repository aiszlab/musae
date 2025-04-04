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

const Markdown = async ({
  value,
  className,
  style,
  dark = false,
}: MarkdownProps & {
  dark?: boolean;
}) => {
  const __html = await toHtml(value);

  console.log("__html===", __html);

  const styled = $props(styles.markdown, typography.body.medium);

  return (
    <div
      dangerouslySetInnerHTML={{ __html }}
      className={stringify(className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    />
  );
};

export default Markdown;
