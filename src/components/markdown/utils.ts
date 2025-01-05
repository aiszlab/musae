import { unified } from "unified";

/**
 * @description
 * to html
 */
const toHTML = async (markdown: string, isDark: boolean) => {
  const {
    0: remarkParse,
    1: remarkRehype,
    2: remarkGfm,
    3: rehypeSanitize,
    4: rehypeStringify,
    5: rehypeShiki,
  } = await Promise.all([
    import("remark-parse"),
    import("remark-rehype"),
    import("remark-gfm"),
    import("rehype-sanitize"),
    import("rehype-stringify"),
    import("@shikijs/rehype"),
  ]);

  const processor = unified()
    .use(remarkParse.default)
    .use(remarkGfm.default)
    // mdast -> hast
    .use(remarkRehype.default)
    .use(rehypeSanitize.default)
    .use(rehypeShiki.default, {
      theme: isDark ? "vitesse-dark" : "vitesse-light",
    })
    .use(rehypeStringify.default);

  return String(await processor.process(markdown));
};

export { toHTML };
