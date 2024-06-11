import React, { useEffect, useRef } from "react";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { WatermarkProps } from "./types";
import { useMutateObserver, useRaf, useDevicePixelRatio } from "@aiszlab/relax";
import { useClips, useWatermarks } from "./hooks";
import type { Nullable } from "@aiszlab/relax/types";

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

const Watermark = ({
  children,
  mark: _mark,
  width = 120,
  height = 64,
  font: {
    color = "rgba(0,0,0,.15)",
    fontSize = 16,
    fontFamily = "sans-serif",
    fontStyle = "normal",
    fontWeight = "normal",
    textAlign = "start",
  } = {},
}: WatermarkProps) => {
  const watermarkRef = useRef<HTMLDivElement>(null);
  const { add, isWatermarkRewritten } = useWatermarks();
  const styled = {
    watermark: stylex.props(styles.watermark),
    marks: stylex.props(styles.marks),
  };
  const { draw } = useClips();
  const [mark, setMark] = React.useState<
    Nullable<{
      dataURL: string;
      size: number;
    }>
  >(null);
  const ratio = useDevicePixelRatio();

  const sync = useRaf(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return;
    setMark(draw(_mark, { ratio, width, height, color, fontFamily, fontSize, fontStyle, fontWeight, textAlign }));
  });

  useMutateObserver(watermarkRef.current, (mutations) => {
    mutations.forEach((mutation) => {
      if (!isWatermarkRewritten(mutation)) return;
      sync();
    });
  });

  useEffect(() => {
    if (!mark) return;
    add(watermarkRef.current, mark.dataURL, mark.size);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mark]);

  useEffect(() => {
    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_mark, width, height, ratio, color, fontFamily, fontSize, fontStyle, fontWeight, textAlign]);

  return (
    <div className={styled.watermark.className} style={styled.watermark.style} ref={watermarkRef}>
      {children}
    </div>
  );
};

export default Watermark;
