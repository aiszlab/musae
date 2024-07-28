import React from "react";
import { withIcon } from "../../hoc";

const NotificationImportant = withIcon(({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M10.01 20.76C10.01 21.86 10.9 22.75 12 22.75C13.1 22.75 13.99 21.86 13.99 20.76H10.01ZM12 5.75C14.76 5.75 17 7.99 17 10.75V17.75H7V10.75C7 7.99 9.24 5.75 12 5.75ZM12 1.25C11.17 1.25 10.5 1.92 10.5 2.75V3.92C7.36 4.6 5 7.4 5 10.75V16.75L3 18.75V19.75H21V18.75L19 16.75V10.75C19 7.4 16.64 4.6 13.5 3.92V2.75C13.5 1.92 12.83 1.25 12 1.25ZM11 7.75H13V11.75H11V7.75ZM11 13.75H13V15.75H11V13.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default NotificationImportant;
