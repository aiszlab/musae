import React from "react";
import { withIcon } from "../../hoc";

const IconWifiFind = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5.5C16.14 5.5 19.88 7.18 22.59 9.89L24 8.48C20.93 5.4 16.69 3.5 12 3.5C7.31 3.5 3.07 5.4 0 8.48L12 20.5L13.41 19.08L2.93 8.58C5.45 6.66 8.59 5.5 12 5.5Z"
        fill="currentColor"
      />
      <path
        d="M21 13.5C21 11.26 19.24 9.5 17 9.5C14.76 9.5 13 11.26 13 13.5C13 15.74 14.76 17.5 17 17.5C17.75 17.5 18.44 17.29 19.03 16.94L21.59 19.5L23 18.09L20.44 15.53C20.79 14.94 21 14.25 21 13.5ZM17 15.5C15.88 15.5 15 14.62 15 13.5C15 12.38 15.88 11.5 17 11.5C18.12 11.5 19 12.38 19 13.5C19 14.62 18.12 15.5 17 15.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWifiFind;
