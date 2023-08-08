import styled from "@emotion/styled";
import type { WrapperProps } from "./types";
import { useThemeWithPreset } from "../theme-provider/hooks";

const Wrapper = styled.fieldset<WrapperProps>(({ theme, isFocused }) => {
  const themeWithPreset = useThemeWithPreset(theme);

  return {
    textAlign: "start",
    height: 56,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: "flex",
    alignItems: "center",
    borderColor: "#79747e",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    boxSizing: "border-box",

    // if input is focused, change the border
    ...(isFocused && {
      borderColor: themeWithPreset.colors?.primary,
      borderWidth: 2,
    }),
  };
});

export default Wrapper;
