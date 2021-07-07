import React, { useState } from "react";
import PropTypes from "prop-types";
import "./css.css";
import { connect } from "react-redux";
import * as action from "./action2/action";
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
    console.log(value);
    outvalue({
      name: value,
      id: Math.floor(Math.random() * 100000),
      gia: "100nvd",
    });
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
const stateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    outvalue: (lists) => {
      dispatch(action.addlists(lists));
    },
  };
};

export default connect(stateToProps, mapDispatchToProps)(Form);
