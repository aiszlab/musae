import React from "react";
import { withIcon } from "../../hoc";

const IconMonochromePhotos = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4H16.8L15 2H9L7.2 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H12V17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7V6H20V18ZM17 12C17 9.2 14.8 7 12 7V8.8C13.8 8.8 15.2 10.2 15.2 12C15.2 13.8 13.8 15.2 12 15.2V17C14.8 17 17 14.8 17 12ZM8.8 12C8.8 13.8 10.2 15.2 12 15.2V8.8C10.2 8.8 8.8 10.2 8.8 12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMonochromePhotos;
