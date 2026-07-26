import React from "react";
import { withIcon } from "../../hoc";

const IconArrowBackIos = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.835 3.86961L16.055 2.09961L6.16504 11.9996L16.065 21.8996L17.835 20.1296L9.70504 11.9996L17.835 3.86961Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconArrowBackIos;
