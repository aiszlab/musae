/**
 * @description get exceed index
 */
export const exceedAt = (
  value: string,
  {
    maxHeight,
    maxWidth,
    textOverflow,
    lineClamp,
    className,
    style,
  }: {
    className?: string;
    style?: string;
    maxWidth: number;
    maxHeight: number;
    textOverflow: string;
    lineClamp: number;
  },
) => {
  const _container = document.createElement("div");

  _container.className = className ?? "";
  _container.style.cssText = style ?? "";
  _container.innerText = value;

  document.body.appendChild(_container);

  const _overflowAt = overflowAt(_container, value, {
    lineClamp,
    textOverflow,
    maxWidth,
    maxHeight,
  });

  document.body.removeChild(_container);

  return Math.max(1, _overflowAt);
};

/**
 * @description _isOverflow
 */
const overflowAt = (
  element: HTMLElement,
  text: string,
  {
    textOverflow,
    lineClamp,
    maxHeight,
    maxWidth,
  }: { textOverflow: string; lineClamp: number; maxWidth: number; maxHeight: number },
) => {
  // record line height / char width
  let _lineClamp = 0;
  let _lineHeight = 0;
  let _charWidth = 0;
  let _maxHeight = 0;

  for (let _charAt = 0; _charAt < text.length; _charAt++) {
    element.innerText = text.substring(0, _charAt + 1).concat(textOverflow);

    // height should contain 1 line at least
    if (_charAt === 0) {
      _maxHeight = Math.max(element.scrollHeight, maxHeight);
    }

    if (element.scrollHeight > _lineHeight) {
      _lineHeight = element.scrollHeight;
      _lineClamp = _lineClamp + 1;
    }

    // width should contain 1 char at least
    if (_charWidth === 0) {
      _charWidth = element.scrollWidth;
    }

    const _isOverflow =
      _lineHeight > _maxHeight || element.scrollWidth > maxWidth || _lineClamp > lineClamp;

    if (_isOverflow) {
      return _charAt;
    }
  }

  return text.length;
};
