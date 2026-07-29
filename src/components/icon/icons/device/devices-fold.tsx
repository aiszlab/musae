import React from "react";
import { withIcon } from "../../hoc";

const IconDevicesFold = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4.00097H17C17 2.56097 15.53 1.60097 14.21 2.16097L11.21 3.45097C10.48 3.76097 10 4.49097 10 5.29097V20.001C10 21.101 10.9 22.001 12 22.001H20C21.1 22.001 22 21.101 22 20.001V6.00097C22 4.90097 21.1 4.00097 20 4.00097ZM15 17.681L12 18.971V5.29097L15 4.00097V17.681ZM20 20.001H14.67L15.79 19.521C16.52 19.201 17 18.481 17 17.681V6.00097H20V20.001Z"
        fill="currentColor"
      />
      <path d="M4 4.00097H2V6.00097H4V4.00097Z" fill="currentColor" />
      <path d="M4 20.001H2V22.001H4V20.001Z" fill="currentColor" />
      <path d="M4 16.001H2V18.001H4V16.001Z" fill="currentColor" />
      <path d="M4 12.001H2V14.001H4V12.001Z" fill="currentColor" />
      <path d="M4 8.00097H2V10.001H4V8.00097Z" fill="currentColor" />
      <path d="M8 4.00097H6V6.00097H8V4.00097Z" fill="currentColor" />
      <path d="M8 20.001H6V22.001H8V20.001Z" fill="currentColor" />
    </svg>
  );
});

export default IconDevicesFold;
