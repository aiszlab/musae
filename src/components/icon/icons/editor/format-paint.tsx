import React from "react";
import { withIcon } from "../../hoc";

const FormatPaint = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.8, 0) scale(1.2)">
        <path
          d="M14 2V1C14 0.45 13.55 0 13 0H1C0.45 0 0 0.45 0 1V5C0 5.55 0.45 6 1 6H13C13.55 6 14 5.55 14 5V4H15V8H5V19C5 19.55 5.45 20 6 20H8C8.55 20 9 19.55 9 19V10H17V2H14ZM12 4H2V2H12V4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatPaint;
