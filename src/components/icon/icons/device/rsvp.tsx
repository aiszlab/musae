import React from "react";
import { withIcon } from "../../hoc";

const Rsvp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 8.7273) scale(1.0909)">
        <path
          d="M15 0H16.5L14.75 6H13.25L11.5 0H13L14 3.43L15 0ZM4.1 3.9L5 6H3.5L2.65 4H1.5V6H0V0H3.5C4.35 0 5 0.65 5 1.5V2.5C5 3.1 4.6 3.65 4.1 3.9ZM3.5 1.5H1.5V2.5H3.5V1.5ZM20.5 4H18.5V6H17V0H20.5C21.33 0 22 0.67 22 1.5V2.5C22 3.33 21.33 4 20.5 4ZM20.5 1.5H18.5V2.5H20.5V1.5ZM10.5 0V1.5H7.5V2.25H9.5C10.05 2.25 10.5 2.7 10.5 3.25V5C10.5 5.55 10.05 6 9.5 6H6V4.5H9V3.75H6.75C6.34 3.75 6 3.41 6 3V1C6 0.45 6.45 0 7 0H10.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Rsvp;
