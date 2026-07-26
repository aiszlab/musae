import React from "react";
import { withIcon } from "../../hoc";

const IconFlashAuto = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M1.5004 1.5004V13.5004H4.5004V22.5004L11.5004 10.5004H7.5004L11.5004 1.5004H1.5004ZM17.5004 1.5004H15.5004L12.3004 10.5004H14.2004L14.9004 8.5004H18.1004L18.8004 10.5004H20.7004L17.5004 1.5004ZM15.3504 7.1504L16.5004 3.5004L17.6504 7.1504H15.3504Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFlashAuto;
