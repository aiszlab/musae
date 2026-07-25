import React from "react";
import { withIcon } from "../../hoc";

const ViewCarousel = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M2 6H6V18H2V6ZM7 19H17V5H7V19ZM18 6H22V18H18V6Z" fill="currentColor" />
    </svg>
  );
});

export default ViewCarousel;
