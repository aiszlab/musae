import { useMemo } from "react";
import { IconProps } from "./types";
import { useTheme } from "../theme/hooks";

export const useIconProps = (props: IconProps): Required<IconProps> => {
  const theme = useTheme();

  const size = useMemo(() => props.size || 24, [props.size, theme]);

  const color = useMemo(() => props.color || "white", [props.color]);

  return { size, color };
};
