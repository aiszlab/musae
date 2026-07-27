import React from "react";
import { withIcon } from "../../hoc";

const IconLabelImportant = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.5 18.9949H14.5C15.17 18.9949 15.77 18.6749 16.13 18.1649L20.5 12.0049L16.13 5.84488C15.77 5.33488 15.17 5.00488 14.5 5.00488H3.5L8.5 12.0049L3.5 18.9949Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLabelImportant;
