import { MarkdownShortcutPlugin as _MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { createElement } from "react";
import {
  ELEMENT_TRANSFORMERS,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS,
  type Transformer,
} from "@lexical/markdown";

export const TRANSFORMERS: Transformer[] = [
  ...ELEMENT_TRANSFORMERS,
  ...TEXT_FORMAT_TRANSFORMERS,
  ...TEXT_MATCH_TRANSFORMERS,
];

const MarkdownShortcutPlugin = () => {
  return createElement(_MarkdownShortcutPlugin, {
    transformers: TRANSFORMERS,
  });
};

export default MarkdownShortcutPlugin;
