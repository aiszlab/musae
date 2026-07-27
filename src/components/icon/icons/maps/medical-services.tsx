import React from "react";
import { withIcon } from "../../hoc";

const IconMedicalServices = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.6 4.8 H 16.8 V 2.4 C 16.8 1.08 15.72 0 14.4 0 H 9.6 C 8.28 0 7.2 1.08 7.2 2.4 V 4.8 H 2.4 C 1.08 4.8 0 5.88 0 7.2 V 21.6 C 0 22.92 1.08 24 2.4 24 H 21.6 C 22.92 24 24 22.92 24 21.6 V 7.2 C 24 5.88 22.92 4.8 21.6 4.8ZM 9.6 2.4 H 14.4 V 4.8 H 9.6 V 2.4ZM 21.6 21.6 H 2.4 V 7.2 H 21.6 V 21.6Z"
        fill="currentColor"
      />
      <path
        d="M 13.2 9.6 H 10.8 V 13.2 H 7.2 V 15.6 H 10.8 V 19.2 H 13.2 V 15.6 H 16.8 V 13.2 H 13.2 V 9.6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMedicalServices;
