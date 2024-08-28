import { MarkdownShortcutPlugin as _MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { createElement } from "react";
import {
  ELEMENT_TRANSFORMERS,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS,
} from "@lexical/markdown";

const MarkdownShortcutPlugin = () => {
  return createElement(_MarkdownShortcutPlugin, {
    transformers: [
      ...ELEMENT_TRANSFORMERS,
      ...TEXT_FORMAT_TRANSFORMERS,
      ...TEXT_MATCH_TRANSFORMERS,
    ],
  });
};

export default MarkdownShortcutPlugin;
