/**
 * @description get exceed index
 */
export const exceedAt = (
  value: string,
  props: {
    className?: string;
    style?: string;
    width: number;
    height: number;
    textOverflow: string;
  },
) => {
  const _container = document.createElement("div");

  _container.className = props.className ?? "";
  _container.style.cssText = props.style ?? "";
  _container.style.width = `${props.width}px`;
  _container.style.height = `${props.height}px`;
  _container.innerText = value;

  document.body.appendChild(_container);
  const _overflowAt = overflowAt(_container, value, props.textOverflow);
  document.body.removeChild(_container);

  return Math.max(1, _overflowAt);
};

/**
 * @description
 * is overflow
 */
const isOverflow = (
  element: HTMLElement,
  {
    height = element.clientHeight,
    width = element.clientWidth,
  }: { height?: number; width?: number } = {},
) => {
  return element.scrollHeight > height || element.scrollWidth > width;
};

/**
 * @description _isOverflow
 */
const overflowAt = (element: HTMLElement, text: string, textOverflow: string) => {
  element.innerText = text;

  if (!isOverflow(element)) {
    return text.length;
  }

  // record line height / char width
  let lineHeight = 0;
  let charWidth = 0;

  for (let _charAt = 0; _charAt < text.length; _charAt++) {
    element.innerText = text.substring(0, _charAt + 1).concat(textOverflow);

    // height should contain 1 line at least
    if (lineHeight === 0) {
      lineHeight = element.scrollHeight;
    }
    // width should contain 1 char at least
    if (charWidth === 0) {
      charWidth = element.scrollWidth;
    }

    const _isOverflow = isOverflow(element, { height: lineHeight, width: charWidth });

    if (_isOverflow) {
      return _charAt;
    }
  }

  return text.length;
};
