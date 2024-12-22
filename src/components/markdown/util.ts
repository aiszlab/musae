import { unified } from "unified";
import { type Node } from "unist";
import { visit } from "unist-util-visit";
import { usingStyles } from "../rich-text-editor";
import type { Partialable } from "@aiszlab/relax/types";
import { toArray, unique } from "@aiszlab/relax";

interface HTMLElement {
  tagName: string;
  properties?: {
    className?: string[];
  };
}

/**
 * @description
 * to html
 */
const toHTML = async (markdown: string) => {
  const [remarkParse, remarkRehype, rehypeSanitize, rehypeStringify, remarkGfm] = await Promise.all(
    [
      import("remark-parse"),
      import("remark-rehype"),
      import("rehype-sanitize"),
      import("rehype-stringify"),
      import("remark-gfm"),
    ],
  );

  const styles = usingStyles();

  const _unified = await unified()
    .use(remarkParse.default)
    .use(remarkRehype.default)
    .use(rehypeSanitize.default)
    .use(remarkGfm.default)
    .use(rehypeStyled, {
      styles,
    })
    .use(rehypeStringify.default)
    .process(markdown);

  return String(_unified);
};

const rehypeStyled = ({ styles }: { styles: ReturnType<typeof usingStyles> }) => {
  return function (tree: Node) {
    visit(tree, "element", (node: HTMLElement) => {
      const classNames = toArray(
        (styles as Record<string, Partialable<{ className?: string }>>)[node.tagName]?.className ??
          "",
        { separator: " " },
      );

      node.properties ??= {};
      node.properties.className = unique(node.properties.className ?? [], classNames);
    });
  };
};

export { toHTML };
