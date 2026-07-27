import React from "react";
import { withIcon } from "../../hoc";

const IconPinDrop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 2.4 C 14.316 2.4 18 4.08 18 8.58 C 18 11.172 15.936 14.184 12 17.364 C 8.064 14.184 6 11.16 6 8.58 C 6 4.08 9.684 2.4 12 2.4ZM 12 0 C 8.076 0 3.6 2.952 3.6 8.58 C 3.6 12.324 6.396 16.272 12 20.4 C 17.604 16.272 20.4 12.324 20.4 8.58 C 20.4 2.952 15.924 0 12 0Z"
        fill="currentColor"
      />
      <path
        d="M 12 6 C 10.68 6 9.6 7.08 9.6 8.4 C 9.6 9.72 10.68 10.8 12 10.8 C 12.6365 10.8 13.247 10.5471 13.6971 10.0971 C 14.1471 9.647 14.4 9.0365 14.4 8.4 C 14.4 7.7635 14.1471 7.153 13.6971 6.7029 C 13.247 6.2529 12.6365 6 12 6ZM 3.6 21.6 H 20.4 V 24 H 3.6 V 21.6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPinDrop;
