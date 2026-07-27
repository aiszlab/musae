import React from "react";
import { withIcon } from "../../hoc";

const IconCarRepair = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z"
        fill="currentColor"
      />
      <path
        d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
        fill="currentColor"
      />
      <path
        d="M5.78 15.5H6.22C6.65 15.5 7 15.14 7 14.69V13.5H17V14.69C17 15.14 17.34 15.5 17.78 15.5H18.22C18.65 15.5 19 15.14 19 14.69V8.19C19 8.19 17.66 4.16 17.44 3.5C17.39 3.34 17.32 3.21 17.25 3.1C17.23 3.08 17.22 3.06 17.2 3.03C16.82 2.51 16.28 2.5 16.28 2.5H7.72C7.72 2.5 7.18 2.51 6.8 3.04C6.78 3.06 6.77 3.08 6.75 3.1C6.68 3.21 6.61 3.34 6.56 3.5C6.34 4.16 5 8.19 5 8.19V14.69C5 15.14 5.35 15.5 5.78 15.5ZM8.33 4.5H15.67L15.9 5.19L16.33 6.5H7.67L8.33 4.5ZM7 8.5H17V11.5H7V8.5Z"
        fill="currentColor"
      />
      <path d="M4 16.51V18.5H11V21.5H13V18.5H20V16.51H4Z" fill="currentColor" />
    </svg>
  );
});

export default IconCarRepair;
