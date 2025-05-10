import { createElement, lazy, Suspense, useDeferredValue, useMemo } from "react";
import React from "react";
import type { MarkdownProps } from "../../types/markdown";
import Loading from "./loading";
import Context, { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import _Markdown from "./markdown";
import { useIsMounted } from "@aiszlab/relax";

const Markdown = ({ value, className, style }: MarkdownProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const isMounted = useIsMounted({ rerender: true })();

  // dynamically render
  const _Markdown = useMemo(() => {
    return lazy(() =>
      import("./markdown")
        .then(({ default: render }) =>
          render({
            value,
            className: stringify(classNames.markdown, className),
            style,
            isInClient: isMounted,
          }),
        )
        .then((rendered) => ({
          default: () => rendered,
        })),
    );
  }, [value, className, style, isMounted]);

  // avoid fallback show when children updated
  const children = useDeferredValue(createElement(_Markdown));

  return (
    <Context.Provider value={{ classNames }}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Context.Provider>
  );
};

export { Markdown };
