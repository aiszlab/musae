import { TRANSFORMERS } from "../rich-text-editor/plugins/markdown-shortcut";
import { usingEditor } from "../rich-text-editor/utils";

/**
 * @description 解析器
 *
 * 解析器本身是 worker 线程
 * 主要负责将 markdown 转换为 html
 *
 * @param {MessageEvent<string>} event
 */
self.onmessage = function (event) {
  toHtml(event.data)
    .then((html) => {
      self.postMessage(html);
    })
    .catch((error) => {
      self.reportError(error);
    });
};

/**
 * @description html 生成器
 *
 * @param {string} markdown
 */
async function toHtml(markdown) {
  if (!markdown) return null;

  const {
    0: { JSDOM },
    1: { $generateHtmlFromNodes },
    2: { createHeadlessEditor },
    3: { $convertFromMarkdownString },
  } = await Promise.all([
    import("jsdom"),
    import("@lexical/html"),
    import("@lexical/headless"),
    import("@lexical/markdown"),
  ]);

  return await new Promise((resolve, reject) => {
    const dom = new JSDOM();
    // @ts-expect-error use jsdom
    global.window = dom.window;
    global.document = dom.window.document;

    const editor = createHeadlessEditor({
      ...usingEditor({ disabled: true }),
      onError: (error) => {
        reject(error);
      },
    });

    editor.update(() => {
      $convertFromMarkdownString(markdown, TRANSFORMERS);
      const html = $generateHtmlFromNodes(editor);
      resolve(html);
    });
  });
}
