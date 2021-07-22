import React from "react";
import Search from "./search";
import Sort from "./sort";

SearchSort.propTypes = {};

function SearchSort(props) {
  return (
    <div>
      <div>
        {/* --search--- */}
        <Search />
        {/* --sort--- */}
        <Sort />
      </div>
    </div>
  );
}

export default SearchSort;
