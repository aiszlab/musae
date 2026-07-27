import React from "react";
import { withIcon } from "../../hoc";

const IconBluetoothDrive = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.5 17C7.328 17 8 16.328 8 15.5C8 14.672 7.328 14 6.5 14C5.672 14 5 14.672 5 15.5C5 16.328 5.672 17 6.5 17Z"
        fill="currentColor"
      />
      <path
        d="M15.5 17C16.328 17 17 16.328 17 15.5C17 14.672 16.328 14 15.5 14C14.672 14 14 14.672 14 15.5C14 16.328 14.672 17 15.5 17Z"
        fill="currentColor"
      />
      <path
        d="M18 18H4V13H15V11H4.81L5.85 8H15V6H5.5C4.84 6 4.29 6.42 4.08 7.01L2 13V21C2 21.55 2.45 22 3 22H4C4.55 22 5 21.55 5 21V20H17V21C17 21.55 17.45 22 18 22H19C19.55 22 20 21.55 20 21V13H18V18Z"
        fill="currentColor"
      />
      <path
        d="M22 4.85L19.15 2H18.65V5.79L16.35 3.5L15.65 4.2L18.44 7L15.65 9.79L16.35 10.5L18.65 8.2V12H19.15L22 9.14L19.85 7L22 4.85ZM19.65 3.91L20.59 4.85L19.65 5.79V3.91ZM20.59 9.14L19.65 10.08V8.2L20.59 9.14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBluetoothDrive;
