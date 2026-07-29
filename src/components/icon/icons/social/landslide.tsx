import React from "react";
import { withIcon } from "../../hoc";

const IconLandslide = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.5 13L7.5 9H1.5V23H21.5L15.5 15L10.5 13ZM12.03 15.77L5.5 17.95L3.5 17.28V15.39L5.5 16.06L9.45 14.74L12.03 15.77ZM6.5 11L8.07 13.09L5.5 13.95L3.5 13.28V11H6.5ZM3.5 21V19.39L5.5 20.06L14.53 17.05L17.5 21H3.5Z"
        fill="currentColor"
      />
      <path
        d="M16.5 7V2L11.5 1L8.5 3V7L11.5 9L16.5 7ZM10.5 4.07L11.92 3.12L14.5 3.64V5.65L11.73 6.76L10.5 5.93V4.07Z"
        fill="currentColor"
      />
      <path
        d="M18 8L15.5 10V13L18 15L22.5 13V9L18 8ZM20.5 11.7L18.3 12.68L17.5 12.04V10.96L18.5 10.16L20.5 10.6V11.7Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLandslide;
