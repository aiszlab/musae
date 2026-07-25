import React from "react";
import { withIcon } from "../../hoc";

const AdminPanelSettings = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 15.62C16.6186 15.62 17.12 15.1186 17.12 14.5C17.12 13.8814 16.6186 13.38 16 13.38C15.3814 13.38 14.88 13.8814 14.88 14.5C14.88 15.1186 15.3814 15.62 16 15.62Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 16.5C15.27 16.5 13.81 16.86 13.76 17.58C14.26 18.29 15.08 18.75 16 18.75C16.92 18.75 17.74 18.29 18.24 17.58C18.19 16.86 16.73 16.5 16 16.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10.09V5.27L9.5 2L2 5.27V10.18C2 14.72 5.2 18.97 9.5 20C10.05 19.87 10.58 19.68 11.1 19.45C12.18 20.99 13.97 22 16 22C19.31 22 22 19.31 22 16C22 13.03 19.84 10.57 17 10.09ZM10 16C10 16.56 10.08 17.11 10.23 17.62C9.99 17.73 9.75 17.84 9.5 17.92C6.33 16.92 4 13.68 4 10.18V6.58L9.5 4.18L15 6.58V10.09C12.16 10.57 10 13.03 10 16ZM16 20C13.79 20 12 18.21 12 16C12 13.79 13.79 12 16 12C18.21 12 20 13.79 20 16C20 18.21 18.21 20 16 20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default AdminPanelSettings;
