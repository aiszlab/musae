import React from "react";
import { withIcon } from "../../hoc";

const AutoFixOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1106)">
        <path
          d="M18.61 6L19.55 3.94L21.61 3L19.55 2.06L18.61 0L17.67 2.06L15.61 3L17.67 3.94L18.61 6Z"
          fill="currentColor"
        />
        <path
          d="M12.78 7.42L14.19 8.83L12.73 10.29L14.14 11.7L16.31 9.53C16.7 9.14 16.7 8.51 16.31 8.12L13.48 5.29C13.29 5.1 13.04 5 12.78 5C12.52 5 12.27 5.1 12.07 5.29L9.9 7.46L11.31 8.87L12.78 7.42Z"
          fill="currentColor"
        />
        <path
          d="M0 3.22L7.07 10.29L0.9 16.46C0.51 16.85 0.51 17.48 0.9 17.87L3.73 20.7C3.93 20.9 4.18 21 4.44 21C4.7 21 4.95 20.9 5.15 20.71L11.32 14.54L18.39 21.61L19.8 20.2L1.42 1.81L0 3.22ZM9.9 13.12L4.44 18.58L3.03 17.17L8.49 11.71L9.9 13.12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AutoFixOff;
