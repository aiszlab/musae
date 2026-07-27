import React from "react";
import { withIcon } from "../../hoc";

const IconBloodtype = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M15 16H9V18H15V16Z" fill="currentColor" />
      <path d="M13 9H11V11H9V13H11V15H13V13H15V11H13V9Z" fill="currentColor" />
      <path
        d="M12 2C6.67 6.55 4 10.48 4 13.8C4 18.78 7.8 22 12 22C16.2 22 20 18.78 20 13.8C20 10.48 17.33 6.55 12 2ZM12 20C8.65 20 6 17.43 6 13.8C6 11.46 7.95 8.36 12 4.66C16.05 8.36 18 11.45 18 13.8C18 17.43 15.35 20 12 20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBloodtype;
