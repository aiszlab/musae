import { toArray, useEvent } from "@aiszlab/relax";
import { useState } from "react";
import type { WatermarkProps } from "../../types/watermark";

const painter = ({
  width: _width,
  height: _height,
  ratio = 1,
}: {
  width: number;
  height: number;
  ratio: number;
}) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  const width = _width * ratio;
  const height = _height * ratio;

  canvas.setAttribute("width", `${width}px`);
  canvas.setAttribute("height", `${height}px`);
  ctx.save();

  return {
    ctx,
    canvas,
    width,
    height,
  };
};

/**
 * @description
 * watermarks
 */
export const useWatermarks = () => {
  const [watermarks, setWatermarks] = useState(() => new Map<HTMLElement, HTMLDivElement>());

  // isWatermarkElement
  const isWatermarkElement = useEvent((element: Node) => {
    return Array.from<Node>(watermarks.values()).includes(element);
  });

  const isWatermarkRewritten = useEvent((mutation: MutationRecord) => {
    // check is watermark removed
    const isWatermarkRemoved =
      mutation.removedNodes.length > 0 &&
      Array.from(mutation.removedNodes).some((node) => isWatermarkElement(node));
    if (isWatermarkRemoved) return true;

    // check is watermark changed
    const isWatermarkChanged =
      mutation.type === "attributes" && isWatermarkElement(mutation.target);
    return isWatermarkChanged;
  });

  // add
  const add = useEvent((container: HTMLElement | null, dataURL: string, size: number) => {
    if (!container) return null;

    const watermarkElement = watermarks.get(container) ?? document.createElement("div");
    watermarkElement.style.backgroundImage = `url('${dataURL}')`;
    watermarkElement.style.backgroundSize = `${Math.floor(size)}px`;
    watermarkElement.style.width = "100%";
    watermarkElement.style.height = "100%";
    watermarkElement.style.visibility = "visible";
    watermarkElement.style.position = "absolute";
    watermarkElement.style.insetInlineStart = "0";
    watermarkElement.style.insetBlockStart = "0";
    // Prevents using the browser `Hide Element` to hide watermarks
    watermarkElement.removeAttribute("class");

    // add as a child
    if (watermarkElement.parentElement !== container) {
      container.append(watermarkElement);
    }
    // add into state
    if (!watermarks.has(container)) {
      setWatermarks((prev) => new Map(prev).set(container, watermarkElement));
    }

    return watermarkElement;
  });

  // remove
  const remove = (container: HTMLElement) => {
    const watermarkElement = watermarks.get(container);
    if (!watermarkElement) return;

    // remove child
    container.removeChild(watermarkElement);
    // remove from state
    setWatermarks((prev) => {
      const next = new Map(prev);
      next.delete(container);
      return next;
    });
  };

  return { isWatermarkElement, add, remove, isWatermarkRewritten };
};

/**
 * @description
 * create clips
 */
export const useClips = () => {
  const draw = useEvent(
    (
      mark: WatermarkProps["mark"],
      {
        width,
        height,
        ratio,
        fontStyle,
        fontWeight,
        fontSize: _fontSize,
        fontFamily,
        textAlign,
        color,
      }: { width: number; height: number; ratio: number } & Required<WatermarkProps["font"]>,
    ) => {
      const marked = painter({ width, height, ratio });

      if (mark instanceof HTMLImageElement) {
        marked.ctx.drawImage(mark, 0, 0, marked.width, marked.height);
      } else {
        const marks = toArray(mark);
        const fontSize = Number(_fontSize) * ratio;

        marked.ctx.font = `${fontStyle} normal ${fontWeight} ${fontSize}px/${height}px ${fontFamily}`;
        marked.ctx.fillStyle = color;
        marked.ctx.textBaseline = "top";
        marked.ctx.textAlign = textAlign;
        marks.forEach((_mark, index) => {
          marked.ctx.fillText(_mark, marked.width / 2, index * fontSize);
        });
      }

      // ==================== Rotate ====================
      const angle = (Math.PI / 180) * Number(-30);
      const maxSize = Math.max(width, height);
      const squareMark = painter({ height: maxSize, width: maxSize, ratio });

      // Copy from `ctx` and rotate
      squareMark.ctx.translate(squareMark.width / 2, squareMark.height / 2);
      squareMark.ctx.rotate(angle);
      if (marked.width > 0 && marked.height > 0) {
        squareMark.ctx.drawImage(marked.canvas, -marked.width / 2, -marked.height / 2);
      }

      return {
        dataURL: squareMark.canvas.toDataURL(),
        size: Math.max(squareMark.width / ratio, squareMark.height / ratio),
      };
    },
  );

  return {
    draw,
  };
};
