import React from "react";
import { withIcon } from "../../hoc";

const IconMedicalInformation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.6 6 H 15.6 V 2.4 C 15.6 1.08 14.52 0 13.2 0 H 10.8 C 9.48 0 8.4 1.08 8.4 2.4 V 6 H 2.4 C 1.08 6 0 7.08 0 8.4 V 21.6 C 0 22.92 1.08 24 2.4 24 H 21.6 C 22.92 24 24 22.92 24 21.6 V 8.4 C 24 7.08 22.92 6 21.6 6ZM 10.8 2.4 H 13.2 V 8.4 H 10.8 V 2.4ZM 21.6 21.6 H 2.4 V 8.4 H 8.4 C 8.4 9.72 9.48 10.8 10.8 10.8 H 13.2 C 14.52 10.8 15.6 9.72 15.6 8.4 H 21.6 V 21.6ZM 10.8 16.8 H 8.4 V 19.2 H 6 V 16.8 H 3.6 V 14.4 H 6 V 12 H 8.4 V 14.4 H 10.8 V 16.8ZM 13.2 15 V 13.2 H 20.4 V 15 H 13.2ZM 13.2 18.6 V 16.8 H 18 V 18.6 H 13.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMedicalInformation;
