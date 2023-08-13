import styled from "@emotion/styled";
import { useTheme } from "../theme/hooks";

/**
 * @author murukal
 *
 * @description
 * content
 */
const Span = styled.span(() => {
  const theme = useTheme();

  return {
    marginLeft: 8,
    marginRight: 8,
    color: "#fff",

    /// typography
    ...theme.typography?.label?.large,
  };
});

export default Span;
