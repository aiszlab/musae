import React from "react";
import { withIcon } from "../../hoc";

const IconBrightness3 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.2 4.91C14.75 6.24 16.5 8.92 16.5 12C16.5 15.08 14.75 17.76 12.2 19.09C13.66 17.09 14.5 14.63 14.5 12C14.5 9.37 13.66 6.91 12.2 4.91ZM8.5 2C7.45 2 6.45 2.16 5.5 2.46C9.56 3.73 12.5 7.52 12.5 12C12.5 16.48 9.56 20.27 5.5 21.54C6.45 21.84 7.45 22 8.5 22C14.02 22 18.5 17.52 18.5 12C18.5 6.48 14.02 2 8.5 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBrightness3;
