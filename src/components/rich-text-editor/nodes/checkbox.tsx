import { DecoratorNode, DOMExportOutput, LexicalEditor, type NodeKey } from "lexical";
import React, { type ReactNode } from "react";
import { Checkbox } from "../../checkbox";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";

const styles = stylex.create({
  checkbox: {
    position: "absolute",
    insetInlineStart: sizes.none,
    display: "flex",
    padding: spacing.smallest,
  },
});

class CheckboxNode extends DecoratorNode<ReactNode> {
  static getType(): string {
    return "checkbox";
  }

  static clone(node: CheckboxNode): CheckboxNode {
    return new CheckboxNode(node.__key);
  }

  constructor(key?: NodeKey) {
    super(key);
  }

  createDOM(): HTMLElement {
    const styled = stylex.attrs(styles.checkbox);
    const dom = document.createElement("span");

    dom.className = styled.class ?? "";
    dom.style.cssText = styled.style ?? "";

    return dom;
  }

  exportDOM(_editor: LexicalEditor): DOMExportOutput {
    return {
      element: null,
    };
  }

  updateDOM(): false {
    return false;
  }

  decorate(): ReactNode {
    return <Checkbox ripple={false} />;
  }
}

export { CheckboxNode };
