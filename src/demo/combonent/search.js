import React, { useState } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/actions/action";
Search.propTypes = {};

function Search(props) {
  const { keywordsearch } = props;
  const [search, setsearch] = useState({
    name: "",
  });
  function changekeyword(event) {
    const name = event.target.name;
    const value = event.target.value;
    setsearch({
      [name]: value,
    });
  }
  function searchKeyword() {
    keywordsearch(search);
  }
  return (
    <span>
      <h4>Tìm Kiếm : </h4>
      <input
        className="demo9"
        name="name"
        value={search.keyword}
        onChange={changekeyword}
      />
      <button className="demo8" onClick={() => searchKeyword()}>
        Tìm
      </button>
    </span>
  );
}
// search
const searchkeywordaction = (dispatch, state) => {
  return {
    keywordsearch: (key) => {
      dispatch(action.keywordsearch(key));
    },
  };
};

export default connect(null, searchkeywordaction)(Search);
