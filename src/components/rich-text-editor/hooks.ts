import { CodeNode } from "@lexical/code";
import { EditorConfig } from "lexical";
import type stylex from "@stylexjs/stylex";
import { setStyle } from "@aiszlab/relax";
import clsx from "clsx";

export class StyledCodeNode extends CodeNode {
  #className?: string;
  #style: any;

  static getType() {
    return "styled-code";
  }

  static clone(node: StyledCodeNode): StyledCodeNode {
    console.log("clone=============");
    return new StyledCodeNode(node.__language, node.__key).style({
      className: node.#className,
      style: node.#style,
    });
  }

  createDOM(config: EditorConfig) {
    const element = super.createDOM(config);
    setStyle(element, this.#style);
    element.className = clsx(element.className, this.#className);
    return element;
  }

  public style(props: ReturnType<typeof stylex.props>) {
    this.#className = props.className;
    this.#style = props.style;
    return this;
  }
}
