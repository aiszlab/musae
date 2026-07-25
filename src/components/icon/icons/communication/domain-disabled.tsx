import React from "react";
import { withIcon } from "../../hoc";

const DomainDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0758)">
        <path
          d="M1.41 0L0 1.41L2 3.41V19.31H17.9L20.9 22.31L22.31 20.9L1.41 0ZM6 17.31H4V15.31H6V17.31ZM6 13.31H4V11.31H6V13.31ZM4 9.31V7.31H6V9.31H4ZM10 17.31H8V15.31H10V17.31ZM8 13.31V11.31H10V13.31H8ZM12 17.31V15.31H13.9L15.9 17.31H12ZM8 3.31H10V5.31H9.55L12 7.76V7.31H20V15.76L22 17.76V5.31H12V1.31H5.55L8 3.76V3.31ZM16 9.31H18V11.31H16V9.31Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DomainDisabled;
