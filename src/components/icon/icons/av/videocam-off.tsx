import React from "react";
import { withIcon } from "../../hoc";

const IconVideocamOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.98999 8.56969L7.98999 6.56969L3.83999 2.42969L2.42999 3.83969L5.15999 6.56969H4.42999C3.87999 6.56969 3.42999 7.01969 3.42999 7.56969V17.5697C3.42999 18.1197 3.87999 18.5697 4.42999 18.5697H16.43C16.64 18.5697 16.82 18.4897 16.98 18.3897L20.16 21.5697L21.57 20.1597L12.71 11.2997L9.98999 8.56969ZM5.42999 16.5697V8.56969H7.15999L15.16 16.5697H5.42999ZM15.43 8.56969V11.1797L21.43 17.1797V7.06969L17.43 11.0697V7.56969C17.43 7.01969 16.98 6.56969 16.43 6.56969H10.82L12.82 8.56969H15.43Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVideocamOff;
