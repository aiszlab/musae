import React from "react";
import { withIcon } from "../../hoc";

const BrightnessAuto = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.061)">
        <path
          d="M10.31 6.31L7.11 15.31H9.01L9.71 13.31H12.91L13.61 15.31H15.51L12.31 6.31H10.31ZM10.16 11.96L11.31 8.31L12.46 11.96H10.16ZM19.31 8V3.31H14.62L11.31 0L8 3.31H3.31V8L0 11.31L3.31 14.62V19.31H8L11.31 22.62L14.62 19.31H19.31V14.62L22.62 11.31L19.31 8ZM17.31 13.79V17.31H13.79L11.31 19.79L8.83 17.31H5.31V13.79L2.83 11.31L5.31 8.83V5.31H8.83L11.31 2.83L13.79 5.31H17.31V8.83L19.79 11.31L17.31 13.79Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BrightnessAuto;
