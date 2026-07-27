import React from "react";
import { withIcon } from "../../hoc";

const IconModeEditOutline = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.99875 21.0015H6.74875L17.8087 9.94152L14.0587 6.19152L2.99875 17.2515V21.0015ZM4.99875 18.0815L14.0587 9.02152L14.9787 9.94152L5.91875 19.0015H4.99875V18.0815Z"
        fill="currentColor"
      />
      <path
        d="M18.3687 3.29152C17.9787 2.90152 17.3487 2.90152 16.9587 3.29152L15.1287 5.12152L18.8787 8.87152L20.7087 7.04152C21.0987 6.65152 21.0987 6.02152 20.7087 5.63152L18.3687 3.29152Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconModeEditOutline;
