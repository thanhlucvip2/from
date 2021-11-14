import React, { useState } from "react";
import "./css.css";
import SearchSort from "./combonent/searchSort";
import Table from "./combonent/table";
import Taskform from "./combonent/taskfrom";
import { connect } from "react-redux";
import * as action from "./../Redux/actions/action";
Home.propTypes = {};

function Home(props) {
  const { setpushlist } = props;
  const [openForm, setopenForm] = useState(false);
  //openForm
  function openform() {
    setTimeout(() => {
      setopenForm(true);
    }, 1);
    setopenForm(false);
    setpushlist(null);
  }
  //Close From
  function closeFrom(event) {
    setopenForm(event);
  }

  // openform update
  function openformUpdate(data) {
    setopenForm(data);
  }

  //renderForm
  var TaskForm = openForm === true ? <Taskform closeFrom={closeFrom} /> : "";

  return (
    <div className="container">
      <h1 className="demo1">Quản Lý Công Việc</h1>
      <div className="row">
        <div
          className={
            openForm === false
              ? "col-md-0 col-xs-0 col-sm-0"
              : "col-md-4 col-xs-4 col-sm-4"
          }
        >
          {TaskForm}
        </div>
        <div
          className={
            openForm === false
              ? "col-md-12 col-xs-12 col-sm-12"
              : "col-md-8 col-xs-8 col-sm-8"
          }
        >
          <button className="demo7" onClick={() => openform()}>
            + Thêm Công Việc
          </button>

          <SearchSort />
          <Table openformdata={openformUpdate} />
        </div>
      </div>
    </div>
  );
}
const setPush = (dispatch, state) => {
  // update finish set IDnewlist
  return {
    setpushlist: (newpushlist) => {
      dispatch(action.setPushList(newpushlist));
    },
  };
};
export default connect(null, setPush)(Home);
