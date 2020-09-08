import React from "react";
import { DebounceInput } from "react-debounce-input";

const SearchBox = ({handleSearch}) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      Search >>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={(event) => {handleSearch(event.target.value)}}
      />
    </div>
  );
};

export default SearchBox;
