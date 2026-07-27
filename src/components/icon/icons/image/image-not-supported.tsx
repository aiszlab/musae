import React from "react";
import { withIcon } from "../../hoc";

const IconImageNotSupported = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22.6046 21.1946L2.8046 1.3946L1.3946 2.8046L3.7046 5.1246V18.2946C3.7046 19.3946 4.6046 20.2946 5.7046 20.2946H18.8746L21.1846 22.6046L22.6046 21.1946ZM5.7046 18.2946V7.1246L12.5446 13.9646L11.7046 15.0146L9.7046 12.2946L6.7046 16.2946H14.8746L16.8746 18.2946H5.7046ZM8.5346 4.2946L6.5346 2.2946H19.7046C20.8046 2.2946 21.7046 3.1946 21.7046 4.2946V17.4646L19.7046 15.4646V4.2946H8.5346Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconImageNotSupported;
