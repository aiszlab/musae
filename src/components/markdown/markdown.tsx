import React, { useEffect, useState } from "react";
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

const Markdown = ({
  value,
  className,
  style,
  dark = false,
}: MarkdownProps & {
  dark?: boolean;
}) => {
  const [_html, _setHtml] = useState("");

  useEffect(() => {
    toHtml(value).then((_v) => {
      _setHtml(_v);
    });
    _setHtml(_html);
  }, []);

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
