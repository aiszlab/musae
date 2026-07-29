import React from "react";
import { withIcon } from "../../hoc";

const IconOpacity = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.66 7.99473L12 2.34473L6.34 7.99473C4.78 9.55473 4 11.6347 4 13.6347C4 15.6347 4.78 17.7447 6.34 19.3047C7.9 20.8647 9.95 21.6547 12 21.6547C14.05 21.6547 16.1 20.8647 17.66 19.3047C19.22 17.7447 20 15.6347 20 13.6347C20 11.6347 19.22 9.55473 17.66 7.99473ZM6 13.9947C6.01 11.9947 6.62 10.7247 7.76 9.59473L12 5.26473L16.24 9.64473C17.38 10.7647 17.99 11.9947 18 13.9947H6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOpacity;
