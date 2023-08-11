import styled from "@emotion/styled";

/**
 * @author murukal
 * @description wrapper
 */
const Wrapper = styled.div(({ theme }) => {
  return {
    position: "fixed",
    top: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
});

export default Wrapper;
