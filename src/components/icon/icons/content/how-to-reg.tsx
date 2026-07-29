import React from "react";
import { withIcon } from "../../hoc";

const IconHowToReg = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.5 11.75C12.71 11.75 14.5 9.96 14.5 7.75C14.5 5.54 12.71 3.75 10.5 3.75C8.29 3.75 6.5 5.54 6.5 7.75C6.5 9.96 8.29 11.75 10.5 11.75ZM10.5 5.75C11.6 5.75 12.5 6.65 12.5 7.75C12.5 8.85 11.6 9.75 10.5 9.75C9.4 9.75 8.5 8.85 8.5 7.75C8.5 6.65 9.4 5.75 10.5 5.75ZM4.5 17.75C4.7 17.12 7.07 16.07 9.46 15.81L11.5 13.81C11.11 13.77 10.82 13.75 10.5 13.75C7.83 13.75 2.5 15.09 2.5 17.75V19.75H11.5L9.5 17.75H4.5ZM20.1 12.25L14.97 17.42L12.9 15.34L11.5 16.75L14.97 20.25L21.5 13.66L20.1 12.25Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHowToReg;
