import { createElement, lazy, Suspense, useMemo } from "react";
import _Markdown from "./markdown";
import React from "react";
import type { MarkdownProps } from "../../types/markdown";

const Markdown = ({ value, className, style }: MarkdownProps) => {
  const __Markdown = useMemo(() => {
    return lazy(async () => {
      const _markdown = await _Markdown({ value, className, style });

      return {
        default: () => _markdown,
      };
    });
  }, [value, className, style]);

  return <Suspense>{createElement(__Markdown)}</Suspense>;
};

export { Markdown };
