import React from "react";
import { withIcon } from "../../hoc";

const IconBedtime = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.275 4.485C7.645 12.025 13.025 16.895 16.935 18.285C15.545 19.375 13.815 19.995 12.005 19.995C7.595 19.995 4.005 16.405 4.005 11.995C4.005 8.545 6.205 5.595 9.275 4.485ZM11.995 2.005C6.405 2.005 2.005 6.535 2.005 11.995C2.005 17.515 6.485 21.995 12.005 21.995C15.715 21.995 18.935 19.975 20.665 16.975C13.155 16.725 8.575 8.545 12.345 2.005H11.995Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBedtime;
