import { MarkdownShortcutPlugin as _MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { createElement } from "react";
import { TRANSFORMERS as _TRANSFORMERS, CHECK_LIST } from "@lexical/markdown";

const TRANSFORMERS = [CHECK_LIST, ..._TRANSFORMERS];

const MarkdownShortcutPlugin = () => {
  return createElement(_MarkdownShortcutPlugin, {
    transformers: TRANSFORMERS,
  });
};

export default MarkdownShortcutPlugin;
export { TRANSFORMERS };
