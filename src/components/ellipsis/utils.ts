import { isOverflow } from "@aiszlab/relax";

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
    textOverflow?: string;
  },
) => {
  const _container = document.createElement("div");

  _container.className = props.className ?? "";
  _container.style.cssText = props.style ?? "";
  _container.style.width = `${props.width}px`;
  _container.style.height = `${props.height}px`;
  _container.innerText = value;

  document.appendChild(_container);

  const _overflowAt = overflowAt(_container, value, props.textOverflow);
  _container.remove();
  document.removeChild(_container);

  return _overflowAt;
};

/**
 * @description _isOverflow
 */
const overflowAt = (element: HTMLElement, text: string, textOverflow?: string) => {
  element.innerText = text;

  if (!isOverflow(element)) {
    return text.length;
  }

  let visibleText = textOverflow ?? "";

  for (let _charAt = 0; _charAt < text.length; _charAt++) {
    visibleText = text[_charAt] + visibleText;
    element.innerText = visibleText;

    if (isOverflow(element)) {
      return _charAt;
    }
  }

  return text.length;
};
