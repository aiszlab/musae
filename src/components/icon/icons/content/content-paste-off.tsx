import React from "react";
import { withIcon } from "../../hoc";

const ContentPasteOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.0051, 0) scale(1.1106)">
        <path
          d="M19.8 20.19L1.42 1.81L0 3.22L1.61 4.83V18C1.61 19.1 2.51 20 3.61 20H16.78L18.39 21.61L19.8 20.19ZM3.61 18V6.83L14.78 18H3.61ZM15.61 7V4H17.61V15.17L19.61 17.17V4C19.61 2.9 18.71 2 17.61 2H13.43C13.01 0.84 11.91 0 10.61 0C9.31 0 8.21 0.84 7.79 2H4.44L9.44 7H15.61ZM10.61 2C11.16 2 11.61 2.45 11.61 3C11.61 3.55 11.16 4 10.61 4C10.06 4 9.61 3.55 9.61 3C9.61 2.45 10.06 2 10.61 2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ContentPasteOff;
