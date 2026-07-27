import React from "react";
import { withIcon } from "../../hoc";

const IconDonutLarge = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.025 5.0798C16.085 5.5198 18.505 7.9398 18.945 10.9998H21.975C21.505 6.2798 17.745 2.5198 13.025 2.0498V5.0798ZM18.945 12.9998C18.505 16.0598 16.085 18.4798 13.025 18.9198V21.9498C17.745 21.4798 21.505 17.7198 21.975 12.9998H18.945ZM11.025 18.9198C7.63502 18.4298 5.02502 15.5198 5.02502 11.9998C5.02502 8.4798 7.63502 5.5698 11.025 5.0798V2.0498C5.97502 2.5498 2.02502 6.8098 2.02502 11.9998C2.02502 17.1898 5.97502 21.4498 11.025 21.9498V18.9198Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDonutLarge;
