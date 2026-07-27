import React from "react";
import { withIcon } from "../../hoc";

const IconRestartAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 13.285C6 11.635 6.67 10.135 7.76 9.045L6.34 7.625C4.9 9.075 4 11.075 4 13.285C4 17.365 7.05 20.725 11 21.215V19.195C8.17 18.715 6 16.255 6 13.285ZM20 13.285C20 8.865 16.42 5.285 12 5.285C11.94 5.285 11.88 5.295 11.82 5.295L12.91 4.205L11.5 2.785L8 6.285L11.5 9.785L12.91 8.375L11.83 7.295C11.89 7.295 11.95 7.285 12 7.285C15.31 7.285 18 9.975 18 13.285C18 16.255 15.83 18.715 13 19.195V21.215C16.95 20.725 20 17.365 20 13.285Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRestartAlt;
