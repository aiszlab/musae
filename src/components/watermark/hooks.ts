import { useEvent } from "@aiszlab/relax";
import { useState } from "react";

/**
 * @description
 * marks for element
 */
export const useMarks = () => {};

/**
 * @description
 * watermarks
 */
export const useWatermarks = () => {
  const [watermarks, setWatermarks] = useState(() => new Map<HTMLElement, HTMLDivElement>());

  /// isWatermarkElement
  const isWatermarkElement = useEvent((element: Node) => {
    return Array.from<Node>(watermarks.values()).includes(element);
  });

  const isWatermarkRewritten = useEvent((mutation: MutationRecord) => {
    // check is watermark removed
    const isWatermarkRemoved =
      mutation.removedNodes.length > 0 && Array.from(mutation.removedNodes).some((node) => isWatermarkElement(node));
    if (isWatermarkRemoved) return true;

    // check is watermark changed
    const isWatermarkChanged = mutation.type === "attributes" && isWatermarkElement(mutation.target);
    return isWatermarkChanged;
  });

  /// add
  const add = useEvent((container: HTMLElement | null, dataURL: string, size: number) => {
    if (!container) return null;

    const watermarkElement = watermarks.get(container) ?? document.createElement("div");
    watermarkElement.style.backgroundImage = `url('${dataURL}')`;
    watermarkElement.style.backgroundSize = `${Math.floor(size)}px`;
    watermarkElement.style.width = "100%";
    watermarkElement.style.height = "100%";
    watermarkElement.style.visibility = "visible";

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

  /// remove
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
