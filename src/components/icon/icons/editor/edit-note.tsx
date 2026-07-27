import React from "react";
import { withIcon } from "../../hoc";

const IconEditNote = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.93375 8.5H13.9337V10.5H2.93375V8.5ZM2.93375 6.5H13.9337V4.5H2.93375V6.5ZM2.93375 14.5H9.93375V12.5H2.93375V14.5ZM17.9437 11.37L18.6537 10.66C19.0437 10.27 19.6737 10.27 20.0637 10.66L20.7737 11.37C21.1637 11.76 21.1637 12.39 20.7737 12.78L20.0637 13.49L17.9437 11.37ZM17.2337 12.08L11.9337 17.38V19.5H14.0537L19.3537 14.2L17.2337 12.08Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEditNote;
