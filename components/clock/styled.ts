import styled from "@emotion/styled";
import { Context } from "../config";
import { ClockClassToken, ComponentToken, MenuClassToken, withDot, withSelf } from "../../utils/class-name";
import { useContext } from "react";
import { useValidTheme } from "../theme";

export const StyledClock = styled.div((props) => {
  const theme = useValidTheme(props.theme);
  const configuration = useContext(Context);
  const clockClassNames = configuration.classNames[ComponentToken.Clock];
  const menuClassNames = configuration.classNames[ComponentToken.Menu];

  const itemSize = 48;
  const itemGap = 4;

  return {
    [withSelf(clockClassNames[ClockClassToken.Clock])]: {
      display: "flex",
      maxHeight: 200,

      [withDot(clockClassNames[ClockClassToken.Column])]: {
        overflowY: "hidden",
        overflowX: "hidden",
        width: itemSize + itemGap * 2,
        marginBlock: 4,

        "::-webkit-scrollbar": {
          width: 8,
          backgroundColor: "transparent",
        },

        "::-webkit-scrollbar-thumb": {
          borderRadius: 4,
          backgroundColor: theme.colorRole.secondary,
        },

        "&:not(:first-of-type)": {
          borderLeft: `1px solid ${theme.colorRole.outlineVariant}`,
        },

        ":hover": {
          overflowY: "auto",
        },

        [withDot(menuClassNames[MenuClassToken.GroupItem])]: {
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
