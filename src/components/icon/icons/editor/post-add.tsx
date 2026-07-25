import React from "react";
import { withIcon } from "../../hoc";

const PostAdd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2632)">
        <path
          d="M14 17.22H2V5H9V3H2C0.9 3 0 3.9 0 5V17C0 18.1 0.9 19 2 19H14C15.1 19 16 18.1 16 17V10H14V17.22Z"
          fill="currentColor"
        />
        <path
          d="M16 0H14V3H11C11.01 3.01 11 5 11 5H14V7.99C14.01 8 16 7.99 16 7.99V5H19V3H16V0Z"
          fill="currentColor"
        />
        <path d="M12 7H4V9H12V7Z" fill="currentColor" />
        <path d="M4 10V12H12V10H4Z" fill="currentColor" />
        <path d="M12 13H4V15H12V13Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default PostAdd;
