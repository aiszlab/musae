import React from "react";
import { withIcon } from "../../hoc";

const Fluorescent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.7953, 0) scale(1.2)">
        <path
          d="M1.50784 13H15.5078V7H1.50784V13ZM3.50784 9H13.5078V11H3.50784V9Z"
          fill="currentColor"
        />
        <path d="M9.50784 0H7.50784V3H9.50784V0Z" fill="currentColor" />
        <path
          d="M15.5839 2.59648L13.7942 4.39887L15.2134 5.80807L17.0031 4.00568L15.5839 2.59648Z"
          fill="currentColor"
        />
        <path d="M9.50784 17H7.50784V20H9.50784V17Z" fill="currentColor" />
        <path
          d="M13.7978 15.71L15.5878 17.51L17.0078 16.09L15.2078 14.3L13.7978 15.71Z"
          fill="currentColor"
        />
        <path
          d="M1.40968 2.60196L0.00255132 4.00909L1.79151 5.79806L3.19864 4.39093L1.40968 2.60196Z"
          fill="currentColor"
        />
        <path
          d="M1.80238 14.2865L0 16.0762L1.4092 17.4954L3.21158 15.7057L1.80238 14.2865Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Fluorescent;
