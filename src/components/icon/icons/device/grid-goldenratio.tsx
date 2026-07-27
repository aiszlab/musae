import React from "react";
import { withIcon } from "../../hoc";

const IconGridGoldenratio = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 11V9H15V2H13V9H11V2H9V9H2V11H9V13H2V15H9V22H11V15H13V22H15V15H22V13H15V11H22ZM13 13H11V11H13V13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconGridGoldenratio;
