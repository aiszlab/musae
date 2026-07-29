import React from "react";
import { withIcon } from "../../hoc";

const IconNoMeetingRoom = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.5649 4.43543V8.31543L14.5649 10.3154V5.43543H17.5649V13.3154L19.5649 15.3154V3.43543H14.5649V2.43543H6.68494L8.68494 4.43543H12.5649ZM2.97494 1.56543L1.56494 2.97543L5.56494 6.97543V18.4354H3.56494V20.4354H14.5649V15.9754L21.0249 22.4354L22.4349 21.0254L2.97494 1.56543ZM12.5649 18.4354H7.56494V8.97543L12.5649 13.9754V18.4354Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNoMeetingRoom;
