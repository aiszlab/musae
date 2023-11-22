import styled from "@emotion/styled";

/**
 * @description
 * styled wrapper
 */
export const StyledWrapper = styled.span(() => {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    svg: {
      display: "inline",
    },
  };
});
