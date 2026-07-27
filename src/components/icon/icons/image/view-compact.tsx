import React from "react";
import { withIcon } from "../../hoc";

const IconViewCompact = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 2V18H22V2H2ZM6.5 16H4V13.5H6.5V16ZM6.5 11.25H4V8.75H6.5V11.25ZM6.5 6.5H4V4H6.5V6.5ZM11 16H8.5V13.5H11V16ZM11 11.25H8.5V8.75H11V11.25ZM11 6.5H8.5V4H11V6.5ZM15.5 16H13V13.5H15.5V16ZM15.5 11.25H13V8.75H15.5V11.25ZM15.5 6.5H13V4H15.5V6.5ZM20 16H17.5V13.5H20V16ZM20 11.25H17.5V8.75H20V11.25ZM20 6.5H17.5V4H20V6.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewCompact;
