import styled from "@emotion/styled";
import { useValidTheme } from "../theme/hooks";

/**
 * @author murukal
 *
 * @description
 * content
 */
const Span = styled.span(({ theme }) => {
  const validTheme = useValidTheme(theme);

  return {
    marginLeft: 8,
    marginRight: 8,
    color: "#fff",

    /// typography
    ...validTheme.typography?.label?.large,
  };
});

export default Span;
