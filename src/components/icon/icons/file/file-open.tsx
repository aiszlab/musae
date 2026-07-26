import React from "react";
import { withIcon } from "../../hoc";

const IconFileOpen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.32 21.8154H4.32001C3.22001 21.8154 2.32001 20.9154 2.32001 19.8154V3.81543C2.32001 2.71543 3.22001 1.81543 4.32001 1.81543H12.32L18.32 7.81543V13.8154H16.32V8.81543H11.32V3.81543H4.32001V19.8154H13.32V21.8154ZM17.32 21.4754V19.2354L20.27 22.1854L21.68 20.7754L18.73 17.8154H20.97V15.8154H15.32V21.4754H17.32Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFileOpen;
