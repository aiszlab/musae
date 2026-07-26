import React from "react";
import { withIcon } from "../../hoc";

const IconFluorescent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5.004 15H19.004V9H5.004V15ZM7.004 11H17.004V13H7.004V11Z" fill="currentColor" />
      <path d="M13.004 2H11.004V5H13.004V2Z" fill="currentColor" />
      <path
        d="M19.08 4.596L17.29 6.399L18.709 7.808L20.499 6.006L19.08 4.596Z"
        fill="currentColor"
      />
      <path d="M13.004 19H11.004V22H13.004V19Z" fill="currentColor" />
      <path
        d="M17.294 17.71L19.084 19.51L20.504 18.09L18.704 16.3L17.294 17.71Z"
        fill="currentColor"
      />
      <path d="M4.906 4.602L3.499 6.009L5.288 7.798L6.695 6.391L4.906 4.602Z" fill="currentColor" />
      <path
        d="M5.298 16.287L3.496 18.076L4.905 19.495L6.708 17.706L5.298 16.287Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFluorescent;
