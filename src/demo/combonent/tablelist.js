import React from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/actions/action";
Tablelist.propTypes = {};

function Tablelist(props) {
  const { listclean, statusupdate, udpatelist } = props;
  function clearlist(data) {
    listclean(data);
  }
  const { index, id, name, status, openForm } = props;
  // id update list
  function UpdateList(IDdataclear) {
    openForm(true);
    udpatelist(IDdataclear);
  }
  // id update status
  function updateStatus(event) {
    statusupdate(event);
  }
  return (
    <tr>
      <td className="demo11">{index}</td>
      <td className="demo12">{name}</td>
      {/* update status */}
      <td className="demo13">
        {status === true ? (
          <span style={{ color: "blue" }} onClick={() => updateStatus(id)}>
            KÍCH HOẠT
          </span>
        ) : (
          <span style={{ color: "red" }} onClick={() => updateStatus(id)}>
            ẨN
          </span>
        )}
      </td>

      <td className="demo14">
        {/* // update list */}
        <button className="demo16" onClick={() => UpdateList(id)}>
          Sửa
        </button>
        {/* clear list */}
        <button className="demo16" onClick={() => clearlist(id)}>
          Xoá
        </button>
      </td>
    </tr>
  );
}
// clear list
const clearlistToRedux = (dispatch, state) => {
  return {
    listclean: (list) => {
      dispatch(action.clearList(list));
    },
    // update status
    statusupdate: (status) => {
      dispatch(action.updateStatus(status));
    },
    // update list
    udpatelist: (idlistupdate) => {
      dispatch(action.updatelist(idlistupdate));
    },
  };
};

export default connect(null, clearlistToRedux)(Tablelist);
