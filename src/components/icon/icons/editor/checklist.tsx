import React from "react";
import { withIcon } from "../../hoc";

const Checklist = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 7.53484H13V9.53484H22V7.53484ZM22 15.5348H13V17.5348H22V15.5348ZM5.54 11.5348L2 7.99484L3.41 6.58484L5.53 8.70484L9.77 4.46484L11.18 5.87484L5.54 11.5348ZM5.54 19.5348L2 15.9948L3.41 14.5848L5.53 16.7048L9.77 12.4648L11.18 13.8748L5.54 19.5348Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Checklist;
