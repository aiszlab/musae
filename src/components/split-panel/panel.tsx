import React, {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import stylex from "@stylexjs/stylex";
import type { PanelProps, PanelRef } from "../../types/split-panel";
import Divider from "./divider";
import { useBoundingClientRect } from "./hooks";

const styles = stylex.create({
  default: {
    flexBasis: "calc(var(--item-space) + var(--offset))",
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
});

const Panel = forwardRef<PanelRef, PanelProps>(({ children, last, defaultSize, at }, ref) => {
  const { classNames, panelsRef, orientation } = useContext(Context);
  const isSized = !!defaultSize;
  const [offset, setOffset] = useState(0);
  const [offseted, setOffseted] = useState(0);
  const [containerRef, boundingClientRect] = useBoundingClientRect<HTMLDivElement>();

  useImperativeHandle(ref, () => {
    return {
      offset: (_offset) => {
        setOffset(_offset);
      },
      reset: () => {
        setOffseted((offseted) => offseted + offset);
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

  const styled = stylex.props(styles.default, !isSized && styles.unsized, last && styles.last);

  // drag move handler
  const onDragMove = useCallback((movement: number) => {
    const leading = panelsRef?.current[at];
    const trailing = panelsRef?.current[at + 1];

    // can not overflow any item
    const _offseted = Math.abs(offseted);
    const isNegative = movement < 0;
    const maxSize = Math.max((isNegative ? leading?.size() : trailing?.size()) ?? 0, _offseted);
    const validOffset = maxSize - _offseted;
    const _offset = Math.min(Math.abs(movement), validOffset);
    const offset = movement >= 0 ? _offset : _offset * -1;

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
        ref={containerRef}
        className={stringify(classNames.panel, styled.className)}
        style={{
          ...styled.style,
          // @ts-expect-error style vars
          "--item-space": defaultSize ?? "0%",
          "--offset": `${offset + offseted}px`,
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
