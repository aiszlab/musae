import React from "react";
import { withIcon } from "../../hoc";

const DoneOutline = withIcon(({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M19.77 4.92961L21.17 6.32961L8.43 19.0696L2.83 13.4696L4.23 12.0696L8.43 16.2696L19.77 4.92961ZM19.77 2.09961L8.43 13.4396L4.23 9.23961L0 13.4696L8.43 21.8996L24 6.32961L19.77 2.09961Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default DoneOutline;
