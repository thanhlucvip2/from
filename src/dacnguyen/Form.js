import React, { useState } from "react";
import PropTypes from "prop-types";
import "./css.css";
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
    outvalue(value);
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

export default Form;
