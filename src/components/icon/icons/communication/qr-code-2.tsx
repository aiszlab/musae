import React from "react";
import { withIcon } from "../../hoc";

const QrCode2 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M12 18H10V16H12V18ZM10 11H8V16H10V11ZM18 9H16V13H18V9ZM16 7H14V9H16V7ZM4 9H2V11H4V9ZM2 7H0V9H2V7ZM9 2H11V0H9V2ZM1.5 1.5V4.5H4.5V1.5H1.5ZM6 6H0V0H6V6ZM1.5 13.5V16.5H4.5V13.5H1.5ZM6 18H0V12H6V18ZM13.5 1.5V4.5H16.5V1.5H13.5ZM18 6H12V0H18V6ZM16 16V13H12V15H14V18H18V16H16ZM14 9H10V11H14V9ZM10 7H4V9H6V11H8V9H10V7ZM11 6V4H9V2H7V6H11ZM3.75 2.25H2.25V3.75H3.75V2.25ZM3.75 14.25H2.25V15.75H3.75V14.25ZM15.75 2.25H14.25V3.75H15.75V2.25Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default QrCode2;
