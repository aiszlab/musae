import { isDomUsable } from "@aiszlab/relax";
import { TRANSFORMERS } from "../rich-text-editor/plugins/markdown-shortcut";
import { usingEditor } from "../rich-text-editor/utils";
import { JSDOM } from "jsdom";

function using(virtual: JSDOM | null) {
  if (!virtual) {
    return null;
  }

  const _window = global.window;
  const _document = global.document;

  global.window = virtual.window as unknown as typeof global.window;
  global.document = virtual.window.document;

  return () => {
    global.window = _window;
    global.document = _document;
  };
}

/**
 * @description html 生成器
 *
 * @param {string} markdown
 */
export async function toHtml(markdown: string) {
  const {
    0: { $generateHtmlFromNodes },
    1: { createHeadlessEditor },
    2: { $convertFromMarkdownString },
    3: virtual,
  } = await Promise.all([
    import("@lexical/html"),
    import("@lexical/headless"),
    import("@lexical/markdown"),
    isDomUsable() ? null : import("jsdom").then(({ JSDOM }) => new JSDOM()),
  ]);

  const { promise, reject, resolve } = Promise.withResolvers<string>();

  const editor = createHeadlessEditor({
    ...usingEditor({ disabled: true }),
    onError: (error: unknown) => {
      // in any env not support dom api, use raw md
      // resolve(markdown);
      reject(error);
    },
  });

  editor.update(() => {
    const cleanup = using(virtual);
    $convertFromMarkdownString(markdown, TRANSFORMERS);
    const _html = $generateHtmlFromNodes(editor);
    cleanup?.();

    resolve(_html);
  });

  return promise;
}
