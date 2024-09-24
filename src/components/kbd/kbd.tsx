import React, { forwardRef } from "react";
import { KBD_KEYS, KBD_LABELS } from "./utils";
import { toArray } from "@aiszlab/relax";
import type { KbdProps } from "musae/types/kbd";

const Kbd = forwardRef<HTMLElement, KbdProps>(({ keys, children }, ref) => {
  return (
    <kbd ref={ref}>
      {toArray(keys ?? []).map((key, index) => (
        <abbr key={index} title={KBD_LABELS[key]}>
          {KBD_KEYS[key]}
        </abbr>
      ))}

      {!!children && <span>{children}</span>}
    </kbd>
  );
});

export default Kbd;
