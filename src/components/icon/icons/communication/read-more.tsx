import React from "react";
import { withIcon } from "../../hoc";

const IconReadMore = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M22 7H13V9H22V7Z" fill="currentColor" />
      <path d="M22 15H13V17H22V15Z" fill="currentColor" />
      <path d="M22 11H16V13H22V11Z" fill="currentColor" />
      <path d="M13 12L8 7V11H2V13H8V17L13 12Z" fill="currentColor" />
    </svg>
  );
});

export default IconReadMore;
