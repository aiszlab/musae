import Styled from "@emotion/styled";
import { useTheme } from "../theme/hooks";

const Message = Styled.div(() => {
  const theme = useTheme();

  return {
    marginTop: 8,
    marginBottom: 8,
    padding: "8px 12px",
    borderRadius: 6,
    ...theme.elevations?.[1],
  };
});

export default Message;
