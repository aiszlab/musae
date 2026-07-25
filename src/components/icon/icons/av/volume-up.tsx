import React from "react";
import { withIcon } from "../../hoc";

const VolumeUp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.3067) scale(1.3333)">
        <path
          d="M0 5.77V11.77H4L9 16.77V0.77L4 5.77H0ZM7 5.6V11.94L4.83 9.77H2V7.77H4.83L7 5.6ZM13.5 8.77C13.5 7 12.48 5.48 11 4.74V12.79C12.48 12.06 13.5 10.54 13.5 8.77ZM11 0V2.06C13.89 2.92 16 5.6 16 8.77C16 11.94 13.89 14.62 11 15.48V17.54C15.01 16.63 18 13.05 18 8.77C18 4.49 15.01 0.91 11 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VolumeUp;
