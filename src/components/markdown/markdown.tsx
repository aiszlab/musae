import styles from "./styles";
import React from "react";
import { toHtml } from "./utils";
import { props as $props } from "@stylexjs/stylex";
import { $body } from "../theme/theme";
import type { MarkdownProps } from "../../types/markdown";
import { stringify } from "@aiszlab/relax/class-name";

interface Props extends MarkdownProps {
  /**
   * @description
   * is in client, render html
   */
  isInClient: boolean;
}

const Markdown = async ({ value, className, style, isInClient }: Props) => {
  const _html = isInClient ? await toHtml(value) : value;
  const styled = $props(styles.markdown.default, $body.medium);

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
