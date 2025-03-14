/**
 * @description 解析器
 *
 * 解析器本身是 worker 线程
 * 主要负责将 markdown 转换为 html
 */
self.onmessage = function (e: MessageEvent<string>) {};

/**
 * @description html 生成器
 */
async function generater() {
  const {
    0: { JSDOM },
  } = await Promise.all([import("jsdom")]);

  //   $generateHtmlFromNodes
}
