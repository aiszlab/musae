import { createElement, lazy, Suspense, useDeferredValue, useMemo, useRef } from "react";
import React from "react";
import type { MarkdownProps } from "../../types/markdown";
import { useTheme } from "../theme";
import Loading from "./loading";
import Context, { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import _Markdown from "./markdown";

const _SRC = import("./markdown");

const Markdown = ({ value, className, style }: MarkdownProps) => {
  const { mode } = useTheme();
  const classNames = useClassNames(CLASS_NAMES);

  return (
    <Context.Provider value={{ classNames }}>
      {createElement(_Markdown, {
        value,
        className: stringify(className, classNames.markdown),
        style,
      })}
    </Context.Provider>
  );
};

export { Markdown };
