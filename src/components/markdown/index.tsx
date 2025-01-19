import { createElement, lazy, Suspense, useDeferredValue, useMemo, useRef } from "react";
import React from "react";
import type { MarkdownProps } from "../../types/markdown";
import { useTheme } from "../theme";
import Loading from "./loading";
import Context, { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names.component";
import { stringify } from "@aiszlab/relax/class-name";

const _SRC = import("./markdown");

const Markdown = ({ value, className, style }: MarkdownProps) => {
  const { mode } = useTheme();
  const classNames = useClassNames(CLASS_NAMES);

  // dynamically render
  const _Markdown = useMemo(() => {
    return lazy(() =>
      _SRC
        .then(({ default: render }) =>
          render({
            value,
            className: stringify(classNames.markdown, className),
            style,
            dark: mode === "dark",
          }),
        )
        .then((rendered) => ({
          default: () => rendered,
        })),
    );
  }, [value, className, style, mode]);

  // avoid fallback show when children updated
  const children = useDeferredValue(createElement(_Markdown));

  return (
    <Context.Provider value={{ classNames }}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Context.Provider>
  );
};

export { Markdown };
