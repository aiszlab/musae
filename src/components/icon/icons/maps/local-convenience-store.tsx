import React from "react";
import { withIcon } from "../../hoc";

const IconLocalConvenienceStore = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20.4 6 V 2.4 H 3.6 V 6 H 0 V 21.6 H 9.6 V 16.8 H 14.4 V 21.6 H 24 V 6 H 20.4ZM 21.6 19.2 H 16.8 V 14.4 H 7.2 V 19.2 H 2.4 V 8.4 H 6 V 4.8 H 18 V 8.4 H 21.6 V 19.2ZM 7.2 7.2 H 9.6 V 8.4 H 7.2 V 12 H 10.8 V 10.8 H 8.4 V 9.6 H 10.8 V 6 H 7.2 V 7.2ZM 15.6 8.4 H 14.4 V 6 H 13.2 V 9.6 H 15.6 V 12 H 16.8 V 6 H 15.6 V 8.4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalConvenienceStore;
