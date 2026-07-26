import React from "react";
import { withIcon } from "../../hoc";

const IconNoMeals = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 17.2984 13.5144 V 4.5048 C 17.2984 2.5227 19.8211 0 22.9294 0 V 18.2107 L 20.677 15.9583 V 13.5144 H 17.2984ZM 22.3551 23.9993 L 10.5637 12.2193 C 10.1921 12.3206 9.8205 12.3882 9.415 12.3882 V 22.524 H 7.1626 V 12.3882 C 4.6737 12.3882 2.6578 10.3723 2.6578 7.8834 V 4.3133 L 0.0563 1.7006 L 1.6442 0.1126 L 23.943 22.4114 L 22.3551 23.9993ZM 6.2279 7.8834 L 4.9102 6.5657 V 7.8834 H 6.2279ZM 9.415 0 H 7.1626 V 2.4439 L 9.415 4.6963 V 0ZM 13.9198 7.8834 V 0 H 11.6674 V 6.9487 L 13.7509 9.0321 C 13.8523 8.6605 13.9198 8.2888 13.9198 7.8834Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNoMeals;
