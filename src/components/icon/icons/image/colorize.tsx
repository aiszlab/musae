import React from "react";
import { withIcon } from "../../hoc";

const IconColorize = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.6594 5.41L18.5794 6.33L15.8894 9.02L14.9694 8.1L17.6594 5.41ZM17.6694 3C17.4094 3 17.1594 3.1 16.9594 3.29L13.8394 6.41L11.9094 4.5L10.4994 5.91L11.9194 7.33L2.99939 16.25V21H7.74939L16.6694 12.08L18.0894 13.5L19.4994 12.09L17.5794 10.17L20.6994 7.05C21.0994 6.65 21.0994 6.02 20.7094 5.63L18.3694 3.29C18.1694 3.1 17.9194 3 17.6694 3ZM6.91939 19L4.99939 17.08L13.0594 9.02L14.9794 10.94L6.91939 19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconColorize;
