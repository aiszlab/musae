import { MarkdownShortcutPlugin as _MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { createElement } from "react";
import { TRANSFORMERS } from "@lexical/markdown";

const MarkdownShortcutPlugin = () => {
  return createElement(_MarkdownShortcutPlugin, {
    transformers: TRANSFORMERS,
  });
};

export default MarkdownShortcutPlugin;
export { TRANSFORMERS };
