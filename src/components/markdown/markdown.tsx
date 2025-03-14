import React from "react";
import { toHtml } from "./utils";
import stylex from "@stylexjs/stylex";
import { typography } from "../theme/theme";
import type { MarkdownProps } from "../../types/markdown";
import { stringify } from "@aiszlab/relax/class-name";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
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

  const styled = stylex.props(styles.markdown, typography.body.medium);

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
