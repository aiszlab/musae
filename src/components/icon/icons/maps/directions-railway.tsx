import React from "react";
import { withIcon } from "../../hoc";

const IconDirectionsRailway = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C7.58 2 4 2.5 4 6V16.5C4 18.43 5.57 20 7.5 20L6 21.5V22H18V21.5L16.5 20C18.43 20 20 18.43 20 16.5V6C20 2.5 16.42 2 12 2ZM12 4C18 4 18 5.2 18 6H6C6 5.2 6 4 12 4ZM18 8V11H6V8H18ZM16.5 18H7.5C6.67 18 6 17.33 6 16.5V13H18V16.5C18 17.33 17.33 18 16.5 18ZM12 13.5C10.9 13.5 10 14.4 10 15.5C10 16.6 10.9 17.5 12 17.5C13.1 17.5 14 16.6 14 15.5C14 14.4 13.1 13.5 12 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDirectionsRailway;
