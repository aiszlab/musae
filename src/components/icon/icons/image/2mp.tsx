import React from "react";
import { withIcon } from "../../hoc";

const Icon2mp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.5 14H8.5V17H10V14H11V18.5H12.5V13.5C12.5 12.95 12.05 12.5 11.5 12.5H7C6.45 12.5 6 12.95 6 13.5V18.5H7.5V14Z"
        fill="currentColor"
      />
      <path
        d="M13.5 18.5H15V17H17C17.55 17 18 16.55 18 16V13.5C18 12.95 17.55 12.5 17 12.5H13.5V18.5ZM15 14H16.5V15.5H15V14Z"
        fill="currentColor"
      />
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
        fill="currentColor"
      />
      <path
        d="M14.5 10H11.5V9H13.5C14.05 9 14.5 8.55 14.5 8V6.5C14.5 5.95 14.05 5.5 13.5 5.5H10V7H13V8H11C10.45 8 10 8.45 10 9V11.5H14.5V10Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon2mp;
