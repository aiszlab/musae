import React from "react";
import { withIcon } from "../../hoc";

const NightlightRound = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.5 22C16.55 22 17.55 21.84 18.5 21.54C14.44 20.27 11.5 16.48 11.5 12C11.5 7.52 14.44 3.73 18.5 2.46C17.55 2.16 16.55 2 15.5 2C9.98 2 5.5 6.48 5.5 12C5.5 17.52 9.98 22 15.5 22Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default NightlightRound;
