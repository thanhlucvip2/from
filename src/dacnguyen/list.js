import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./css.css";
List.propTypes = {
  outputproduct: PropTypes.array,
  outlist: PropTypes.func,
};

function List(props) {
  const { outputproduct, outlist } = props;
  function clean(para) {
    outlist(para);
  }
  return (
    <div>
      {outputproduct.map((a) => {
        return (
          <h1 key={a.id} className="list-product container">
            <p>{a.name}</p>
            <button onClick={() => clean(a)}>Clean</button>
          </h1>
        );
      })}
    </div>
  );
}
const statetoprops = (state) => {
  return {
    outputproduct: state.list,
  };
};

export default connect(statetoprops)(List);
