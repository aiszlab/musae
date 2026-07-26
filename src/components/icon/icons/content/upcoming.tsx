import React from "react";
import { withIcon } from "../../hoc";

const IconUpcoming = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.6 10.81L16.19 9.4L19.75 5.85L21.16 7.26C21.05 7.29 17.6 10.81 17.6 10.81ZM13 3H11V8H13V3ZM6.4 10.81L7.81 9.4L4.26 5.84L2.84 7.26C2.95 7.29 6.4 10.81 6.4 10.81ZM20 14H16.58C15.81 15.76 14.04 17 12 17C9.96 17 8.19 15.76 7.42 14H4V19H20V14ZM20 12C21.1 12 22 12.9 22 14V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V14C2 12.9 2.9 12 4 12H9C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12H20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconUpcoming;
