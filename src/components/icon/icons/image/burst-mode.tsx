import React from "react";
import { withIcon } from "../../hoc";

const IconBurstMode = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M0.9999 0.9999H2.9999V14.9999H0.9999V0.9999ZM4.9999 0.9999H6.9999V14.9999H4.9999V0.9999ZM21.9999 0.9999H9.9999C9.4499 0.9999 8.9999 1.4499 8.9999 1.9999V13.9999C8.9999 14.5499 9.4499 14.9999 9.9999 14.9999H21.9999C22.5499 14.9999 22.9999 14.5499 22.9999 13.9999V1.9999C22.9999 1.4499 22.5499 0.9999 21.9999 0.9999ZM20.9999 12.9999H10.9999V2.9999H20.9999V12.9999ZM17.4299 8.6199L15.4299 11.1899L13.9999 9.4699L11.9999 11.9899H19.9999L17.4299 8.6199Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBurstMode;
