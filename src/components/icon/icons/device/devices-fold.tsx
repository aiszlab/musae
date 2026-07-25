import React from "react";
import { withIcon } from "../../hoc";

const DevicesFold = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.0011, 0) scale(1.1999)">
        <path
          d="M18 2.00194H15C15 0.561943 13.53 -0.398057 12.21 0.161943L9.21 1.45194C8.48 1.76194 8 2.49194 8 3.29194V18.0019C8 19.1019 8.9 20.0019 10 20.0019H18C19.1 20.0019 20 19.1019 20 18.0019V4.00194C20 2.90194 19.1 2.00194 18 2.00194ZM13 15.6819L10 16.9719V3.29194L13 2.00194V15.6819ZM18 18.0019H12.67L13.79 17.5219C14.52 17.2019 15 16.4819 15 15.6819V4.00194H18V18.0019Z"
          fill="currentColor"
        />
        <path d="M2 2.00194H0V4.00194H2V2.00194Z" fill="currentColor" />
        <path d="M2 18.0019H0V20.0019H2V18.0019Z" fill="currentColor" />
        <path d="M2 14.0019H0V16.0019H2V14.0019Z" fill="currentColor" />
        <path d="M2 10.0019H0V12.0019H2V10.0019Z" fill="currentColor" />
        <path d="M2 6.00194H0V8.00194H2V6.00194Z" fill="currentColor" />
        <path d="M6 2.00194H4V4.00194H6V2.00194Z" fill="currentColor" />
        <path d="M6 18.0019H4V20.0019H6V18.0019Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default DevicesFold;
