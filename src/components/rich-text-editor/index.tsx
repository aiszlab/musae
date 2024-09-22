import React, { createElement, forwardRef, lazy, Suspense } from "react";
import type { RichTextEditorProps, RichTextEditorRef } from "musae/types/rich-text-editor";

const _RichTextEditor = lazy(() => import("./rich-text-editor"));

const RichTextEditor = forwardRef<RichTextEditorRef, RichTextEditorProps>((props, ref) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {createElement(_RichTextEditor, {
        ...props,
        ref,
      })}
    </Suspense>
  );
});

export { RichTextEditor };
