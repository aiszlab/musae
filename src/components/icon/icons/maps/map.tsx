import React from "react";
import { withIcon } from "../../hoc";

const IconMap = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 23.3327 0 L 23.1194 0.04 L 16 2.7999 L 8 0 L 0.48 2.5333 C 0.2 2.6266 0 2.8666 0 3.1733 V 23.3327 C 0 23.7061 0.2933 23.9994 0.6666 23.9994 L 0.88 23.9594 L 8 21.1995 L 16 23.9994 L 23.5194 21.4661 C 23.7994 21.3728 23.9994 21.1328 23.9994 20.8261 V 0.6666 C 23.9994 0.2933 23.7061 0 23.3327 0ZM 9.3331 3.2933 L 14.6663 5.1599 V 20.7061 L 9.3331 18.8395 V 3.2933ZM 2.6666 4.6132 L 6.6665 3.2666 V 18.8662 L 2.6666 20.4128 V 4.6132ZM 21.3328 19.3862 L 17.3329 20.7328 V 5.1465 L 21.3328 3.5999 V 19.3862Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMap;
