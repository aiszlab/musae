import React from "react";
import { withIcon } from "../../hoc";

const Upcoming = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M15.6 7.81L14.19 6.4L17.75 2.85L19.16 4.26C19.05 4.29 15.6 7.81 15.6 7.81ZM11 0H9V5H11V0ZM4.4 7.81L5.81 6.4L2.26 2.84L0.84 4.26C0.95 4.29 4.4 7.81 4.4 7.81ZM18 11H14.58C13.81 12.76 12.04 14 10 14C7.96 14 6.19 12.76 5.42 11H2V16H18V11ZM18 9C19.1 9 20 9.9 20 11V16C20 17.1 19.1 18 18 18H2C0.9 18 0 17.1 0 16V11C0 9.9 0.9 9 2 9H7C7 10.66 8.34 12 10 12C11.66 12 13 10.66 13 9H18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Upcoming;
