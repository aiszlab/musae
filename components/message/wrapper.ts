import styled from "@emotion/styled";

/**
 * @author murukal
 * @description wrapper
 */
const Wrapper = styled.div(() => {
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

export default Wrapper;
