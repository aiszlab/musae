import styled from "@emotion/styled";
import { useConfiguration } from "../config";
import { ClockClassToken, ComponentToken, MenuClassToken, withDot, withSelf } from "../../utils/class-name";
import { useValidTheme } from "../theme";

export const StyledClock = styled.div((props) => {
  const theme = useValidTheme(props.theme);
  const configuration = useConfiguration();
  const clockClassNames = configuration.classNames[ComponentToken.Clock];
  const menuClassNames = configuration.classNames[ComponentToken.Menu];

  const itemSize = 48;
  const itemGap = 4;

  return {
    [withSelf(clockClassNames[ClockClassToken.Clock])]: {
      [withDot(clockClassNames[ClockClassToken.Column])]: {
        


        li: {
          marginInline: itemGap,
          width: itemSize,

          [withDot(menuClassNames[MenuClassToken.Item])]: {
            paddingLeft: 14,
            display: "flex",
            justifyContent: "center",
          },
        },
      },
    },
  };
});
