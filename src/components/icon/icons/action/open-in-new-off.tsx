import React from "react";
import { withIcon } from "../../hoc";

const OpenInNewOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.79 5.8L14.79 3.8H19.79V8.79L17.79 6.79L10.79 13.79L9.38 12.38L16.38 5.38L16.79 5.8ZM19.79 10.5V18.8L21.79 20.8V5.8L19.79 3.8H18.29L19.79 5.3V10.5ZM19.78 22.61L17.08 19.91C16.71 19.96 16.35 20 15.99 20H3.78998V7.8C3.78998 7.44 3.82998 7.08 3.87998 6.71L1.38998 4.22L2.79998 2.81L21.19 21.2L19.78 22.61ZM15.79 18.62L5.16998 7.99C5.10998 8.29 5.08998 8.59 5.08998 8.9V17.7H13.89L15.79 18.62Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default OpenInNewOff;
