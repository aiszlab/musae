import React from "react";
import { withIcon } from "../../hoc";

const AutoFixNormal = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0014) scale(1.1427)">
        <path
          d="M18.0025 6L18.9425 3.94L21.0025 3L18.9425 2.06L18.0025 0L17.0625 2.06L15.0025 3L17.0625 3.94L18.0025 6Z"
          fill="currentColor"
        />
        <path
          d="M15.7125 8.12L12.8825 5.29C12.6825 5.1 12.4325 5 12.1725 5C11.9125 5 11.6625 5.1 11.4625 5.29L0.2925 16.46C-0.0975 16.85 -0.0975 17.48 0.2925 17.87L3.1225 20.7C3.3225 20.9 3.5725 21 3.8325 21C4.0925 21 4.3425 20.9 4.5425 20.71L15.7125 9.54C16.1025 9.15 16.1025 8.51 15.7125 8.12ZM12.1725 7.42L13.5825 8.83L12.4125 10L11.0025 8.59L12.1725 7.42ZM3.8325 18.59L2.4225 17.18L9.5925 10L11.0025 11.41L3.8325 18.59Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AutoFixNormal;
