import React from "react";
import { withIcon } from "../../hoc";

const IconNetworkCell = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M2 22H22V2L2 22ZM20 20H17V9.83L20 6.83V20Z" fill="currentColor" />
    </svg>
  );
});

export default IconNetworkCell;
