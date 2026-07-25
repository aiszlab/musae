import React from "react";
import { withIcon } from "../../hoc";

const CatchingPokemon = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.5 12 C 14.5 13.38 13.38 14.5 12 14.5 C 10.62 14.5 9.5 13.38 9.5 12 C 9.5 10.62 10.62 9.5 12 9.5 C 13.38 9.5 14.5 10.62 14.5 12 Z M 22 12 C 22 17.52 17.52 22 12 22 C 6.48 22 2 17.52 2 12 C 2 6.48 6.48 2 12 2 C 17.52 2 22 6.48 22 12 Z M 20 12 L 16 12 C 16 9.79 14.21 8 12 8 C 9.79 8 8 9.79 8 12 L 4 12 C 4 16.41 7.59 20 12 20 C 16.41 20 20 16.41 20 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default CatchingPokemon;
