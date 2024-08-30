import React from "react";
import { withIcon } from "../../hoc";

const Superscript = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.56 7H17.56V8H20.56V9H16.56V7C16.56 6.45 17.01 6 17.56 6H19.56V5H16.56V4H19.56C20.11 4 20.56 4.45 20.56 5V6C20.56 6.55 20.11 7 19.56 7ZM3.44 20H6.1L9.5 14.58H9.62L13.02 20H15.68L11.03 12.73L15.37 6H12.69L9.62 10.99H9.5L6.41 6H3.75L8.07 12.73L3.44 20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Superscript;
