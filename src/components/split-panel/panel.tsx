import React, { forwardRef, useCallback, useContext, useImperativeHandle, useState } from "react";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import stylex from "@stylexjs/stylex";
import type { PanelProps, PanelRef } from "../../types/split-panel";
import Divider from "./divider";
import { useBoundingClientRect } from "./hooks";

const styles = stylex.create({
  default: {
    flexGrow: 0,
    userSelect: "none",
    overflow: "hidden",
  },

  unsized: {
    flexBasis: "calc(var(--unsized-item-space) + var(--offset))",
  },

  last: {
    flexBasis: "calc(var(--last-item-space) + var(--offset))",
  },

  sized: {
    flexBasis: "calc(var(--item-space) + var(--offset))",
  },
});

const Panel = forwardRef<PanelRef, PanelProps>(({ children, last, defaultSize, at }, ref) => {
  const { classNames, panelsRef, orientation } = useContext(Context);
  const [offset, setOffset] = useState(0);
  const { ref: _ref, boundingClientRect, resize } = useBoundingClientRect<HTMLDivElement>();

  const [size, setSize] = useState(defaultSize);
  const isSized = !!size;

  useImperativeHandle(ref, () => {
    return {
      offset: (_offset) => {
        setOffset(_offset);
      },
      reset: () => {
        const rect = resize();
        const size = orientation === "horizontal" ? rect?.width : rect?.height;
        setSize(`${size ?? 0}px`);
        setOffset(0);
      },
      size: () => {
        return (
          (orientation === "horizontal"
            ? boundingClientRect.current?.width
            : boundingClientRect.current?.height) ?? 0
        );
      },
    };
  });

  const styled = stylex.props(
    styles.default,
    !isSized && styles.unsized,
    last && styles.last,
    isSized && styles.sized,
  );

  // drag move handler
  const onDragMove = useCallback((movement: number) => {
    const leading = panelsRef?.current[at];
    const trailing = panelsRef?.current[at + 1];

    // can not overflow any item
    const isNegative = movement < 0;
    const _offset = Math.min(
      Math.abs(movement),
      (isNegative ? leading?.size() : trailing?.size()) ?? 0,
    );
    const offset = isNegative ? _offset * -1 : _offset;

    leading?.offset(offset);
    trailing?.offset(offset * -1);
  }, []);

  // drag end handler
  const onDragEnd = useCallback(() => {
    const leading = panelsRef?.current[at];
    const trailing = panelsRef?.current[at + 1];

    leading?.reset();
    trailing?.reset();
  }, []);

  return (
    <>
      <div
        ref={_ref}
        className={stringify(classNames.panel, styled.className)}
        draggable={false}
        style={{
          ...styled.style,
          // @ts-expect-error style vars
          "--item-space": size,
          "--offset": `${offset}px`,
        }}
      >
        {children}
      </div>

      {/* split bar */}
      {!last && <Divider onDragMove={onDragMove} onDragEnd={onDragEnd} />}
    </>
  );
});

export default Panel;
