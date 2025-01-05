import { createElement, lazy, Suspense, useDeferredValue, useMemo, useRef } from "react";
import React from "react";
import type { MarkdownProps } from "../../types/markdown";
import { useTheme } from "../theme";
import Loading from "./loading";

const _SRC = import("./markdown");

const Markdown = ({ value, className, style }: MarkdownProps) => {
  const { mode } = useTheme();

  // dynamically render
  const _Markdown = useMemo(() => {
    return lazy(() =>
      _SRC
        .then(({ default: render }) => render({ value, className, style, dark: mode === "dark" }))
        .then((rendered) => ({
          default: () => rendered,
        })),
    );
  }, [value, className, style, mode]);

  // avoid fallback show when children updated
  const children = useDeferredValue(createElement(_Markdown));

  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export { Markdown };
