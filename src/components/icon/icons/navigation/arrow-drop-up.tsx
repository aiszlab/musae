import React from "react";
import { withIcon } from "../../hoc";

const IconArrowDropUp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M7 14.5L12 9.5L17 14.5H7Z" fill="currentColor" />
    </svg>
  );
});

export default IconArrowDropUp;
