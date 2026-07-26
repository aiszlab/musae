import React from "react";
import { withIcon } from "../../hoc";

const IconRunCircle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 0 C 5.376 0 0 5.376 0 12 C 0 18.624 5.376 24 12 24 C 18.624 24 24 18.624 24 12 C 24 5.376 18.624 0 12 0ZM 12 21.6 C 6.696 21.6 2.4 17.304 2.4 12 C 2.4 6.696 6.696 2.4 12 2.4 C 17.304 2.4 21.6 6.696 21.6 12 C 21.6 17.304 17.304 21.6 12 21.6Z"
        fill="currentColor"
      />
      <path
        d="M 13.848 8.364 C 13.572 7.8 12.936 7.512 12.336 7.728 L 8.4 9.18 V 12 H 9.6 V 10.02 L 11.448 9.336 L 10.296 15.204 L 6.96 14.52 L 6.72 15.696 L 11.232 16.62 L 11.856 13.452 L 13.2 14.904 V 19.2 H 14.4 V 14.436 L 12.816 12.708 L 13.308 9.888 C 14.388 11.352 15.96 12 16.8 12 V 10.8 C 16.308 10.8 14.844 10.404 13.848 8.364Z"
        fill="currentColor"
      />
      <path
        d="M 13.8 7.2 C 14.4628 7.2 15 6.6627 15 6 C 15 5.3373 14.4628 4.8 13.8 4.8 C 13.1372 4.8 12.6 5.3373 12.6 6 C 12.6 6.6627 13.1372 7.2 13.8 7.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRunCircle;
