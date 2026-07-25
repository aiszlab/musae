import React from "react";
import { withIcon } from "../../hoc";

const RemoveDone = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.67498 2.09961L3.26498 3.50961L13.645 13.8896L12.235 15.2996L7.99498 11.0596L6.58498 12.4696L12.245 18.1296L15.075 15.2996L21.675 21.8996L23.085 20.4896L4.67498 2.09961ZM17.885 12.4796L22.835 7.51961L21.405 6.11961L16.465 11.0596L17.885 12.4796ZM17.175 7.51961L15.765 6.10961L13.645 8.22961L15.055 9.63961L17.175 7.51961ZM0.914978 12.4696L6.57498 18.1296L7.98498 16.7196L2.32498 11.0596L0.914978 12.4696Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default RemoveDone;
