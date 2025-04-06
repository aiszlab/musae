import { TRANSFORMERS } from "../rich-text-editor/plugins/markdown-shortcut";
import { usingEditor } from "../rich-text-editor/utils";

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
  } = await Promise.all([
    import("@lexical/html"),
    import("@lexical/headless"),
    import("@lexical/markdown"),
  ]);

  return await new Promise<string>((resolve, reject) => {
    const editor = createHeadlessEditor({
      ...usingEditor({ disabled: true }),
      onError: (error) => {
        // in any env not support dom api, use raw md
        // resolve(markdown);
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
