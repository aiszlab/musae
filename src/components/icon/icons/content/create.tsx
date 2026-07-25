import React from "react";
import { withIcon } from "../../hoc";

const Create = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0017) scale(1.3331)">
        <path
          d="M0 14.25V18H3.75L14.81 6.94L11.06 3.19L0 14.25ZM2.92 16H2V15.08L11.06 6.02L11.98 6.94L2.92 16ZM17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0C14.4 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Create;
