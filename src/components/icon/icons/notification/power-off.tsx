import React from "react";
import { withIcon } from "../../hoc";

const IconPowerOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.215 2.50488H8.21505V4.38488L10.215 6.38488V2.50488ZM16.215 8.50488V12.3849L18.015 14.1849L18.215 13.9849V8.50488C18.215 7.40488 17.315 6.50488 16.215 6.50488V2.50488H14.215V6.50488H10.335L12.335 8.50488H16.215ZM4.33505 3.34488L2.92505 4.75488L6.21505 8.04488V14.0049L9.71505 17.5049V20.5049H14.715V17.5049L15.195 17.0249L19.6651 21.4949L21.0751 20.0849L4.33505 3.34488ZM12.715 16.6749V18.5049H11.715V16.6749L8.21505 13.1549V10.0449L13.785 15.6149L12.715 16.6749Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPowerOff;
