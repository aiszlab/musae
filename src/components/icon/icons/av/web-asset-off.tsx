import React from "react";
import { withIcon } from "../../hoc";

const IconWebAssetOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.485 3.29453H20.655C21.765 3.29453 22.655 4.19453 22.655 5.29453V17.2945C22.655 17.6345 22.565 17.9545 22.425 18.2345L20.655 16.4645V7.29453H11.485L7.485 3.29453ZM21.145 22.6045L17.825 19.2945H4.655C3.545 19.2945 2.655 18.3945 2.655 17.2945V5.29453C2.655 4.95453 2.735 4.63453 2.885 4.35453L1.345 2.80453L2.755 1.39453L22.555 21.1945L21.145 22.6045ZM15.825 17.2945L5.825 7.29453H4.655V17.2945H15.825Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWebAssetOff;
