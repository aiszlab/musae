import React, { createElement, forwardRef, lazy, Suspense } from "react";
import type { RichTextEditorProps, RichTextEditorRef } from "musae/types/rich-text-editor";
import { Skeleton } from "../skeleton";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";
import { clsx } from "@aiszlab/relax";
import { RichTextEditorClassToken } from "../../utils/class-name";

const _RichTextEditor = lazy(() => import("./rich-text-editor"));

const styles = stylex.create({
  loading: {
    height: sizes.xxxxxxlarge,
    width: sizes.full,
    borderRadius: sizes.xxxxsmall,
  },
});

const RichTextEditor = forwardRef<RichTextEditorRef, RichTextEditorProps>(
  ({ className, style, ...props }, ref) => {
    const styled = stylex.props(styles.loading);
    const classNames = useClassNames(ComponentToken.RichTextEditor);

    return (
      <Suspense
        fallback={
          <Skeleton
            className={clsx(
              classNames[RichTextEditorClassToken.Loading],
              className,
              styled.className,
            )}
            style={{
              ...styled.style,
              ...style,
            }}
          />
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
  },
);

export { RichTextEditor };
