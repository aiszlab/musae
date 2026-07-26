import React from "react";
import { withIcon } from "../../hoc";

const IconRestaurantMenu = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 6.7279 13.4165 L 10.2801 9.8643 L 1.4686 1.0653 C -0.4895 3.0234 -0.4895 6.1991 1.4686 8.1698 L 6.7279 13.4165ZM 15.2381 11.1446 C 17.1586 12.0358 19.8573 11.4082 21.853 9.4124 C 24.2505 7.015 24.7149 3.5757 22.8697 1.7306 C 21.0372 -0.102 17.5979 0.3499 15.1879 2.7473 C 13.1922 4.7431 12.5646 7.4417 13.4557 9.3622 L 1.205 21.613 L 2.9748 23.3828 L 11.6232 14.7596 L 20.2589 23.3954 L 22.0288 21.6256 L 13.393 12.9897 L 15.2381 11.1446Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRestaurantMenu;
