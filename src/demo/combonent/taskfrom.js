import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/actions/action";
Taskform.propTypes = {};

function Taskform(props) {
  const [newData, setnewData] = useState({
    name: "",
    status: false,
  });
  const { closeFrom, idListTableList, listdata, newupdatelistdata } = props;
  //closeForm
  function closeForm() {
    closeFrom(false);
  }
  // change form
  function onHandlechange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setnewData({
      ...newData,
      [name]: value,
    });
  }
  const { newlist } = props;
  //save
  function onHandleSave() {
    if (!newData.id) {
      newData.status = newData.status === "true" ? true : false;
      newlist(newData);
    } else {
      newupdatelistdata(newData);
    }
    closeFrom(false);
  }
  // open task form finish
  useEffect(() => {
    if (idListTableList) {
      const indexdata = listdata.findIndex((a) => {
        return a.id === idListTableList;
      });
      setnewData({
        name: listdata[indexdata].name,
        status: listdata[indexdata].status,
        id: listdata[indexdata].id,
      });
    }
  }, [idListTableList, listdata]);
  // clean form
  function onclean() {
    setnewData({
      name: "",
      status: false,
    });
  }
  return (
    <div>
      <h3 className="demo2">
        <div className="row">
          <div className="col-md-9">{newData.id ? "Sửa" : "Thêm"}</div>
          <div className="col-md-3">
            {" "}
            <button className="closeform" onClick={() => closeForm()}>
              X
            </button>
          </div>
        </div>
      </h3>

      <div className="demo4">
        <h4>Tên</h4>
        <input
          className="demo3"
          name="name"
          onChange={onHandlechange}
          value={newData.name}
        />
        <h4>Trạng Thái</h4>
        <select
          className="demo3"
          name="status"
          onChange={onHandlechange}
          value={newData.status}
        >
          <option value={true}>Kích Hoạt</option>
          <option value={false}>Ẩn</option>
        </select>
        <div>
          <button className="demo6" onClick={() => onHandleSave()}>
            Lưu Lại
          </button>
          <button className="demo6" onClick={() => onclean()}>
            Huỷ Bỏ
          </button>
        </div>
      </div>
    </div>
  );
}

const actionPushList = (dispatch, state) => {
  return {
    // new list
    newlist: (list) => {
      dispatch(action.pushList(list));
    },
    // update finish set id list update = ""
    newupdatelistdata: (newlistdata) => {
      dispatch(action.newupdatelistdata(newlistdata));
    },
  };
};

const IDlisttoprops = (state) => {
  return {
    // id list update
    idListTableList: state.listupdate[0].id,
    // data list update
    listdata: state.data,
  };
};
export default connect(IDlisttoprops, actionPushList)(Taskform);
