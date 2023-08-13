import styled from "@emotion/styled";
import { useTheme } from "../theme/hooks";

/**
 * @author murukal
 *
 * @description
 * wrapper of holder
 */
const HolderWrapper = styled.div(() => {
  return {
    position: "fixed",
    top: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    pointerEvents: "none",
  };
});

/**
 * @author murukal
 *
 * @description
 * wrapper of message
 */
const MessageWrapper = styled.div(() => {
  const theme = useTheme();

  return {
    marginTop: 8,
    marginBottom: 8,
    padding: "8px 12px",
    borderRadius: 6,
    backgroundColor: "#ffffff",
    ...theme.elevations?.[1],
  };
});

export { HolderWrapper, MessageWrapper };
