import React, { useState } from "react";
import PropTypes from "prop-types";
import "./css.css";
import { connect } from "react-redux";
import * as action from "./actions/action";
Form.propTypes = {
  outvalue: PropTypes.func,
};

function Form(props) {
  const [value, setvalue] = useState("");
  const { outvalue } = props;
  function handelchange(para) {
    setvalue(para.target.value);
  }
  function cleanclick() {
    setvalue("");
  }
  function clicksave() {
    var newvalue = {
      name: value,
      gia: Math.floor(Math.random() * 1000 + 100) + ".000 VNĐ",
      id: Math.floor(Math.random() * 1000 + 100),
    };
    outvalue(newvalue);
  }
  return (
    <div>
      <div className="container">
        <div className="panel">From</div>
        <div className="body">
          <input
            type="text"
            placeholder="nhập sản phẩm"
            className="inputuser"
            value={value}
            onChange={handelchange}
          />
          <button className="buttonfrom" onClick={() => cleanclick()}>
            Clean
          </button>
          <button className="buttonfrom" onClick={() => clicksave()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

var statetoprops = (state) => {
  return {};
};
var dispatchtoprops = (dispatch, state) => {
  return {
    outvalue: (lists) => {
      dispatch(action.addlist(lists));
    },
  };
};
export default connect(statetoprops, dispatchtoprops)(Form);
