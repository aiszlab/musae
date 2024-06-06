import React, { useRef } from "react";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { WatermarkProps } from "./types";
import { useMutateObserver } from "../../hooks/use-mutate-observer";

const styles = stylex.create({
  watermark: {
    position: "relative",
    overflow: "hidden",
  },

  marks: {
    width: sizes.full,
    height: sizes.full,
  },
});

const Watermark = ({ children }: WatermarkProps) => {
  const watermarkRef = useRef<HTMLDivElement>(null);
  const styled = {
    watermark: stylex.props(styles.watermark),
    marks: stylex.props(styles.marks),
  };

  useMutateObserver(watermarkRef.current, (mutations) => {
    mutations.forEach((mutation) => {
      // re-render watermark
      //   if (reRendering(mutation, isWatermarkEle)) {
      //     syncWatermark();
      //   } else if (mutation.target === container && mutation.attributeName === "style") {
      //     // We've only force container not modify.
      //     // Not consider nest case.
      //     const keyStyles = Object.keys(fixedStyle);
      //     for (let i = 0; i < keyStyles.length; i += 1) {
      //       const key = keyStyles[i];
      //       const oriValue = (mergedStyle as any)[key];
      //       const currentValue = (container.style as any)[key];
      //       if (oriValue && oriValue !== currentValue) {
      //         (container.style as any)[key] = oriValue;
      //       }
      //     }
      //   }
    });
  });

  return (
    <div className={styled.watermark.className} style={styled.watermark.style} ref={watermarkRef}>
      {children}
      <div className={styled.marks.className} style={styled.marks.style} />
    </div>
  );
};

export default Watermark;
