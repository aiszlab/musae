import React, { useRef } from "react";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { WatermarkProps } from "./types";
import { useMutateObserver } from "../../hooks/use-mutate-observer";
import { useWatermarks } from "./hooks";

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
  const { add, remove, isWatermarkElement, isWatermarkRewritten } = useWatermarks();
  const styled = {
    watermark: stylex.props(styles.watermark),
    marks: stylex.props(styles.marks),
  };

  useMutateObserver(watermarkRef.current, (mutations) => {
    mutations.forEach((mutation) => {
      if (!isWatermarkRewritten(mutation)) return;
      //     syncWatermark();
    });
  });

  return (
    <div className={styled.watermark.className} style={styled.watermark.style} ref={watermarkRef}>
      {children}
    </div>
  );
};

export default Watermark;
