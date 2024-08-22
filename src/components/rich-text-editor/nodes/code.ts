import { CodeNode as _CodeNode } from "@lexical/code";
import { EditorConfig } from "lexical";

class CodeNode extends _CodeNode {
  static getType(): string {
    return super.getType();
  }

  createDOM(config: EditorConfig) {
    const element = super.createDOM(config);

    element.classList.add("code");

    return element;
  }
}

export default CodeNode;
