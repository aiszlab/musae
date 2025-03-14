/**
 * @description
 * to html
 */
const toHtml = async (markdown: string) => {
  const worker = new Worker("./parser.ts");

  return await new Promise<string>((resolve, reject) => {
    worker.postMessage(markdown);
    worker.onmessage = function (event) {
      console.log("event=====", event);
      resolve(event.data);
    };
    worker.onerror = function (error) {
      reject(error);
    };
  });
};

export { toHtml };
