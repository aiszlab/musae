import { useMemo } from "react";
import { IconProps } from "./types";

export const useIconProps = (props: IconProps): Required<IconProps> => {
  const size = useMemo(() => props.size || 24, [props.size]);

  const color = useMemo(() => props.color || "black", [props.color]);

  return { size, color };
};
