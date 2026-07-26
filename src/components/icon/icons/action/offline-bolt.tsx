import React from "react";
import { withIcon } from "../../hoc";

const IconOfflineBolt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2.01953C6.49002 2.01953 2.02002 6.48953 2.02002 11.9995C2.02002 17.5095 6.49002 21.9795 12 21.9795C17.51 21.9795 21.98 17.5095 21.98 11.9995C21.98 6.48953 17.51 2.01953 12 2.01953ZM12 19.9795C7.60002 19.9795 4.02002 16.3995 4.02002 11.9995C4.02002 7.59953 7.60002 4.01953 12 4.01953C16.4 4.01953 19.98 7.59953 19.98 11.9995C19.98 16.3995 16.4 19.9795 12 19.9795ZM12.75 4.99953L8.25002 13.4995H11.39V18.9995L15.75 10.4995H12.75V4.99953Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOfflineBolt;
