import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";
import type { ChipRenderProps } from "./types";

const PADDING_X = new Map<ChipRenderProps["size"], number>([["small", 8]]);
const PADDING_Y = new Map<ChipRenderProps["size"], number>([["small", 4]]);
const RADIUS = new Map<ChipRenderProps["size"], number>([["small", 4]]);

/**
 * @description
 * span with style
 */
export const StyledSpan = styled.span<ChipRenderProps>(({ size, ...props }) => {
  const theme = useValidTheme(props.theme);

  return {
    paddingInline: PADDING_X.get(size) ?? 16,
    paddingBlock: PADDING_Y.get(size) ?? 8,
    borderRadius: RADIUS.get(size) ?? 8,

    backgroundColor: theme.colorRole.primaryContainer,
    color: theme.colorRole.onPrimaryContainer,

    ...theme.typography.label[size],
  };
});
