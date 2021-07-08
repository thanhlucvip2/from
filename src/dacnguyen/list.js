import React from "react";
import PropTypes from "prop-types";
import "./css.css";
import { connect } from "react-redux";
import * as action from "./actions/action";
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
            <p>Sản Phẩm : {a.name}</p>
            <p>Giá : {a.gia}</p>
            <p>ID là : {a.id}</p>
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
const cleantoprops = (dispatch, state) => {
  return {
    outlist: (out) => {
      dispatch(action.cleanlist(out));
    },
  };
};
export default connect(statetoprops, cleantoprops)(List);
