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
import { clamp } from "@aiszlab/relax";

const styles = stylex.create({
  default: {
    flexBasis: "calc(var(--item-space) + var(--offset))",
    flexGrow: 0,
    userSelect: "none",
    overflow: "hidden",
  },
});

const Panel = forwardRef<PanelRef, PanelProps>(({ children, last, defaultSize, at }, ref) => {
  const { classNames, panelsRef, orientation } = useContext(Context);
  const containerRef = useRef<HTMLDivElement>(null);
  const isSized = !!defaultSize;
  const [offset, setOffset] = useState(0);
  const [offseted, setOffseted] = useState(0);

  const getSize = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    return (orientation === "horizontal" ? rect?.width : rect?.height) ?? 0;
  }, [orientation]);

  useImperativeHandle(ref, () => {
    return {
      offset: (_offset) => {
        setOffset(_offset);
      },
      reset: () => {
        setOffseted((offseted) => offseted + offset);
        setOffset(0);
      },
      size: getSize,
    };
  });

  const styled = stylex.props(styles.default);

  // drag move handler
  const onDragMove = useCallback((offset: number) => {
    const leading = panelsRef?.current[at];
    const trailing = panelsRef?.current[at + 1];

    // can not overflow any item
    let _offset = 0;
    if (offset > 0) {
      _offset = Math.min(offset, trailing?.size() ?? 0);
    } else {
      _offset = Math.min(Math.abs(offset), leading?.size() ?? 0);
    }

    leading?.offset(_offset);
    trailing?.offset(_offset * -1);
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
          // @ts-expect-error
          "--item-space": isSized
            ? defaultSize
            : last
            ? "var(--last-item-space)"
            : "var(--unsized-item-space)",
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
