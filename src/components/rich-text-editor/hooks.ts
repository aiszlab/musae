import { CodeNode } from "@lexical/code";
import { EditorConfig } from "lexical";

export class CodeNode2 extends CodeNode {
  createDOM(config: EditorConfig) {
    console.log("1111111");
    const element = super.createDOM(config);
    console.log("element=====", element);
    return element;
  }
}
