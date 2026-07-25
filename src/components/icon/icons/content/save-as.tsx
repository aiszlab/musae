import React from "react";
import { withIcon } from "../../hoc";

const SaveAs = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.2353) scale(1.1765)">
        <path
          d="M18 9.4V4L14 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H9.4L11.4 16H2V2H13.17L16 4.83V11.4L18 9.4ZM12 12C12 13.66 10.66 15 9 15C7.34 15 6 13.66 6 12C6 10.34 7.34 9 9 9C10.66 9 12 10.34 12 12ZM3 3H12V7H3V3ZM16.99 13.25L18.76 15.02L13.77 20H12V18.23L16.99 13.25ZM20.25 13.51L19.4 14.36L17.63 12.59L18.48 11.74C18.68 11.54 18.99 11.54 19.19 11.74L20.25 12.8C20.45 13 20.45 13.32 20.25 13.51Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SaveAs;
