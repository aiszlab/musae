import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import React from "react";
import {
  ELEMENT_TRANSFORMERS,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS,
} from "@lexical/markdown";

const MarkdownShortcut = () => {
  return (
    <MarkdownShortcutPlugin
      transformers={[
        ...ELEMENT_TRANSFORMERS,
        ...TEXT_FORMAT_TRANSFORMERS,
        ...TEXT_MATCH_TRANSFORMERS,
      ]}
    />
  );
};

export default MarkdownShortcut;
