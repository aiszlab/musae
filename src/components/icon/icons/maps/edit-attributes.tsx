import React from "react";
import { withIcon } from "../../hoc";

const EditAttributes = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 6) scale(1.2)">
        <path
          d="M15.63 0H4.37C1.96 0 0 2.24 0 5C0 7.76 1.96 10 4.37 10H15.63C18.04 10 20 7.76 20 5C20 2.24 18.04 0 15.63 0ZM15.63 8H4.37C3.09 8 2 6.63 2 5C2 3.37 3.09 2 4.37 2H15.63C16.91 2 18 3.37 18 5C18 6.63 16.91 8 15.63 8ZM5.24 6.06L3.37 4.19L2.67 4.89L5.24 7.46L9.46 3.24L8.76 2.54L5.24 6.06Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default EditAttributes;
