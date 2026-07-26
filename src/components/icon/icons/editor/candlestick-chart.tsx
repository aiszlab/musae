import React from "react";
import { withIcon } from "../../hoc";

const IconCandlestickChart = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M9 4H7V6H5V18H7V20H9V18H11V6H9V4ZM9 16H7V8H9V16Z" fill="currentColor" />
      <path d="M19 8H17V4H15V8H13V15H15V20H17V15H19V8ZM17 13H15V10H17V13Z" fill="currentColor" />
    </svg>
  );
});

export default IconCandlestickChart;
