import { Button } from "../button";
import { Input } from "../input";
import React, { useRef } from "react";
import SearchIcon from "../icon/icons/action/search";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import { useThemeColorVars } from "src/hooks/use-theme-color-vars";
import { useEvent } from "@aiszlab/relax";
import type { SearchProps } from "../../types/search";
import type { InputRef } from "../../types/input";
import { stringify } from "@aiszlab/relax/class-name";

const STYLES = $create({
  search: {
    display: "inline-flex",
    width: sizes.full,
    borderRadius: sizes.infinity,
    boxShadow: `0px 0px 0px ${sizes.xxxxxxxxxxsmall} var(--color-primary) inset`,
  },

  input: {
    ":not(#\\#)": {
      fontSize: sizes.xxxxsmall,
      boxShadow: "none",
      borderTopRightRadius: sizes.none,
      borderBottomRightRadius: sizes.none,
    },

    ":focus-within:not(#\\#)": {
      boxShadow: "none",
    },
  },

  button: {
    borderTopLeftRadius: sizes.none,
    borderBottomLeftRadius: sizes.none,
  },
});

const Search = ({ searchButton, onSearch, className, style }: SearchProps) => {
  const inputRef = useRef<InputRef>(null);
  const styled = {
    search: $props(STYLES.search),
    input: $props(STYLES.input),
    button: $props(STYLES.button),
  };

  const themeColorVars = useThemeColorVars(["outline", "primary"]);

  const search = useEvent(() => {
    onSearch?.(inputRef.current?.getValue());
  });

  return (
    <span
      className={stringify(styled.search.className, className)}
      style={{
        ...styled.search.style,
        ...style,
        ...themeColorVars,
      }}
    >
      <Input className={styled.input.className} style={styled.input.style} ref={inputRef} />

      <Button className={styled.button.className} style={styled.button.style} onClick={search}>
        {searchButton ?? <SearchIcon />}
      </Button>
    </span>
  );
};

export default Search;
