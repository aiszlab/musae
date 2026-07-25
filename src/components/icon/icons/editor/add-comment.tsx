import React from "react";
import { withIcon } from "../../hoc";

const AddComment = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20V2ZM18 15.17L16.83 14H2V2H18V15.17ZM11 3H9V7H5V9H9V13H11V9H15V7H11V3Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AddComment;
