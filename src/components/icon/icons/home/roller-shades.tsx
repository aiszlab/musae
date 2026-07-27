import React from "react";
import { withIcon } from "../../hoc";

const IconRollerShades = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 19V3H4V19H2V21H22V19H20ZM18 5V11H6V5H18ZM6 19V13H11V14.82C10.55 15.14 10.25 15.66 10.25 16.25C10.25 17.22 11.03 18 12 18C12.97 18 13.75 17.22 13.75 16.25C13.75 15.66 13.45 15.13 13 14.82V13H18V19H6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRollerShades;
