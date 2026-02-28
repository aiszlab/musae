import { Button } from "../button";
import { Input } from "../input";
import React from "react";
import SearchIcon from "../icon/icons/action/search";

const Search = () => {
  return (
    <div>
      <Input />
      <Button>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
