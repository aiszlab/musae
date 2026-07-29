import React from "react";
import { withIcon } from "../../hoc";

const IconFlashlightOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.52 2.50531L2.1 3.91531L8.71 10.5253V21.6953H16.71V18.5253L20.49 22.3053L21.9 20.8953L3.52 2.50531ZM14.71 19.6953H10.71V12.5253L14.71 16.5253V19.6953Z"
        fill="currentColor"
      />
      <path
        d="M16.71 3.69531V4.69531H8.54L10.54 6.69531H16.71V7.08531L14.71 10.0953V10.8653L16.71 12.8653V10.6953L18.71 7.69531V1.69531H6.71V2.86531L7.54 3.69531H16.71Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFlashlightOff;
