import { createElement, lazy, Suspense, useDeferredValue, useMemo } from "react";
import React from "react";
import type { MarkdownProps } from "../../types/markdown";
import Loading from "./loading";
import Context, { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import _Markdown from "./markdown";

const _SRC = import("./markdown");

const Markdown = ({ value, className, style }: MarkdownProps) => {
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
          }),
        )
        .then((rendered) => ({
          default: () => rendered,
        })),
    );
  }, [value, className, style]);

  // avoid fallback show when children updated
  const children = useDeferredValue(createElement(_Markdown));

  return (
    <Context.Provider value={{ classNames }}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Context.Provider>
  );
};

export { Markdown };
