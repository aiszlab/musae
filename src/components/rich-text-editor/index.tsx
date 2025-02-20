import React, { createElement, forwardRef, lazy, Suspense } from "react";
import type { RichTextEditorProps, RichTextEditorRef } from "../../types/rich-text-editor";
import { Skeleton } from "../skeleton";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { usingStyles } from "./utils";

const _RichTextEditor = lazy(() => import("./rich-text-editor"));

const styles = stylex.create({
  loading: {
    height: sizes.xxxxxxxlarge,
    width: sizes.full,
    borderRadius: sizes.xxxxxxsmall,
  },
});

export const CLASS_NAMES = {
  loading: "rich-text-editor__loading",
};

const RichTextEditor = forwardRef<
  RichTextEditorRef,
  RichTextEditorProps & { fallback?: React.ReactNode }
>(({ className, style, fallback, ...props }, ref) => {
  const styled = stylex.props(styles.loading);
  const classNames = useClassNames(CLASS_NAMES);

  return (
    <Suspense
      fallback={
        fallback ?? (
          <Skeleton
            className={stringify(classNames.loading, className, styled.className)}
            style={{
              ...styled.style,
              ...style,
            }}
          />
        )
      }
    >
      {createElement(_RichTextEditor, {
        ...props,
        className,
        style,
        ref,
      })}
    </Suspense>
  );
});

export { RichTextEditor, usingStyles };
