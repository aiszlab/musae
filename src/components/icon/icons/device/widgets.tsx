import React from "react";
import { withIcon } from "../../hoc";

const Widgets = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0062) scale(1.2422)">
        <path
          d="M13.66 2.83L16.49 5.66L13.66 8.49L10.83 5.66L13.66 2.83ZM6 3.31V7.31H2V3.31H6ZM16 13.31V17.31H12V13.31H16ZM6 13.31V17.31H2V13.31H6ZM13.66 0L8 5.65L13.66 11.31L19.32 5.65L13.66 0ZM8 1.31H0V9.31H8V1.31ZM18 11.31H10V19.31H18V11.31ZM8 11.31H0V19.31H8V11.31Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Widgets;
