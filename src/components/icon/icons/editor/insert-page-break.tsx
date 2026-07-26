import React from "react";
import { withIcon } from "../../hoc";

const IconInsertPageBreak = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 20H6V17H4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V17H18V20Z"
        fill="currentColor"
      />
      <path d="M6 4H13V9H18V11H20V8L14 2H6C4.9 2 4 2.9 4 4V11H6V4Z" fill="currentColor" />
      <path d="M15 13H9V15H15V13Z" fill="currentColor" />
      <path d="M23 13H17V15H23V13Z" fill="currentColor" />
      <path d="M7 13H1V15H7V13Z" fill="currentColor" />
    </svg>
  );
});

export default IconInsertPageBreak;
