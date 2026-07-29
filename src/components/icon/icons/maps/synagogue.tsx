import React from "react";
import { withIcon } from "../../hoc";

const IconSynagogue = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4C18.34 4 17 5.34 17 7V7.29L12 3L7 7.29V7C7 5.34 5.66 4 4 4C2.34 4 1 5.34 1 7V21H11V16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16V21H23V7C23 5.34 21.66 4 20 4ZM20 6C20.55 6 21 6.45 21 7V8H19V7C19 6.45 19.45 6 20 6ZM4 6C4.55 6 5 6.45 5 7V8H3V7C3 6.45 3.45 6 4 6ZM3 19V10H5V19H3ZM17 19H15V16C15 14.35 13.65 13 12 13C10.35 13 9 14.35 9 16V19H7V9.92L12 5.63L17 9.92V19ZM19 19V10H21V19H19Z"
        fill="currentColor"
      />
      <path
        d="M12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.1716 8.5 10.5 9.17157 10.5 10C10.5 10.8284 11.1716 11.5 12 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSynagogue;
