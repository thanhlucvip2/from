import React, { useEffect, useState } from "react";
import Tablelist from "./tablelist";
import { connect } from "react-redux";
import * as action from "./../../Redux/actions/action";
Table.propTypes = {};

function Table(props) {
  const { datas, openformdata, filterData } = props;
  function openform(data) {
    openformdata(data);
  }
  // fillter
  const [filters, setfilters] = useState({
    filtername: "",
  });

  function onchangefulter(event) {
    const value = event.target.value;
    const name = event.target.name;
    setfilters({
      ...filters,
      [name]: value,
    });
  }

  useEffect(() => {
    //filter status string to number
    filters.filterstatus = +filters.filterstatus;
    filterData(filters);
  }, [filters, filterData]);
  return (
    <div style={{ marginTop: "10px" }}>
      {/* <button onClick={() => clickaa()}>s</button> */}
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className="demo11">STT</th>
            <th className="demo12">TÊN</th>
            <th className="demo13">TRẠNG THÁI</th>
            <th className="demo14">HÀNH ĐỘNG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="demo11"></td>
            <td className="demo12">
              <input
                style={{ width: "90%" }}
                name="filtername"
                value={filters.filtername}
                onChange={onchangefulter}
              />
            </td>

            <td className="demo14"></td>
          </tr>
          {datas.map((data, index) => {
            return (
              <Tablelist
                key={data.id}
                index={index}
                id={data.id}
                name={data.name}
                status={data.status}
                //openform
                openForm={openform}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
// render data list
const stateToProps = (state) => {
  return {
    datas: state.data,
  };
};
// filter form
const actionFilter = (dispatch, state) => {
  return {
    filterData: (datafilter) => {
      dispatch(action.filtedata(datafilter));
    },
  };
};
export default connect(stateToProps, actionFilter)(Table);
