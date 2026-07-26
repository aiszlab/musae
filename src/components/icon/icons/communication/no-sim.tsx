import React from "react";
import { withIcon } from "../../hoc";

const IconNoSim = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.44 20.4004L3.97 2.93043L2.56 4.34043L5.3 7.08043L5.18 7.20043V18.1904C5.18 19.2904 6.08 20.1904 7.18 20.1904H17.18C17.53 20.1904 17.86 20.0904 18.15 19.9304L20.03 21.8104L21.44 20.4004ZM7.18 18.1904V8.96043L16.41 18.1904H7.18ZM11.02 4.19043H17.18V13.3004L19.18 15.3004V4.19043C19.18 3.09043 18.28 2.19043 17.18 2.19043H10.19L8.13 4.25043L9.54 5.66043L11.02 4.19043Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNoSim;
