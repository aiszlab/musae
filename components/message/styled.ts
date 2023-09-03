import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

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
const MessageWrapper = styled.div(({ theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    marginTop: 8,
    marginBottom: 8,
    padding: "8px 12px",
    borderRadius: 6,
    backgroundColor: "#ffffff",
    ...validTheme.elevations?.[1],
  };
});

export { HolderWrapper, MessageWrapper };
