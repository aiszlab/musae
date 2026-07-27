import React from "react";
import { withIcon } from "../../hoc";

const IconTextIncrease = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M0.994995 19H3.415L4.68499 15.42H10.335L11.595 19H14.015L8.755 5H6.255L0.994995 19ZM5.415 13.39L7.44499 7.6H7.56499L9.595 13.39H5.415ZM20.005 11H23.005V13H20.005V16H18.005V13H15.005V11H18.005V8H20.005V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTextIncrease;
