import React from "react";
import { withIcon } from "../../hoc";

const IconLayers = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.99 19.0048L4.62 13.2748L3 14.5348L12 21.5348L21 14.5348L19.37 13.2648L11.99 19.0048ZM12 16.4648L19.36 10.7348L21 9.46484L12 2.46484L3 9.46484L4.63 10.7348L12 16.4648ZM12 4.99484L17.74 9.46484L12 13.9348L6.26 9.46484L12 4.99484Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLayers;
