import React from "react";
import { toHTML } from "./util";
import stylex from "@stylexjs/stylex";
import { typography } from "../theme/theme";
import type { MarkdownProps } from "../../types/markdown";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  markdown: {
    overflow: "auto",
  },
});

const Markdown = async ({ value, className, style }: MarkdownProps) => {
  const __html = await toHTML(value);

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
