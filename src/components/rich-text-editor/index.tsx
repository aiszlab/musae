import React, { createElement, lazy, Suspense } from "react";
import type { RichTextEditorProps } from "./types";

const _RichTextEditor = lazy(() => import("./rich-text-editor"));

const RichTextEditor = (props: RichTextEditorProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>{createElement(_RichTextEditor, props)}</Suspense>
  );
};

export { RichTextEditor };
