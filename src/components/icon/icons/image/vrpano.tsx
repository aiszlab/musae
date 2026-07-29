import React from "react";
import { withIcon } from "../../hoc";

const IconVrpano = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.01 4C20.45 4 17.4 5.5 12 5.5C6.69 5.5 3.51 4.01 2.99 4.01C2.46 4.01 2 4.45 2 5.02V19C2 19.57 2.46 20 2.99 20C3.56 20 6.54 18.5 12 18.5C17.42 18.5 20.44 20 21.01 20C21.54 20 22 19.57 22 19V5C22 4.43 21.54 4 21.01 4ZM20 17.63C17.99 17.04 15.38 16.5 12 16.5C8.61 16.5 6.01 17.04 4 17.63V6.38C6.58 7.11 9.32 7.5 12 7.5C15.38 7.5 17.99 6.96 20 6.37V17.63Z"
        fill="currentColor"
      />
      <path
        d="M9.17 10.99L5.48 15.41C7.48 15.15 9.66 15 12 15C14.3 15 16.52 15.15 18.51 15.4L14 10L11.17 13.39L9.17 10.99Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVrpano;
