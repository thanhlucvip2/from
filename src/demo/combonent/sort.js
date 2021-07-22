import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as action from "./../../Redux/actions/action";
Sort.propTypes = {};

function Sort(props) {
  const { sortprops } = props;
  const [sortS, setsortS] = useState({
    sorts: 0,
  });
  sortS.sorts = +sortS.sorts;
  function sortclick(event) {
    const name = event.target.name;
    const value = event.target.value;
    setsortS({
      [name]: value,
    });
  }
  useEffect(() => {
    sortprops(sortS);
  }, [sortS, sortprops]);

  return (
    <span>
      <select
        className="demo10"
        onChange={sortclick}
        value={sortS.sorts}
        name="sorts"
      >
        <option value={0}>Sắp Xếp</option>
        <option value={1}>Từ A - Z</option>
        <option value={-1}>Từ Z - A</option>
        <option value={2}>Kích Hoạt - ẨN</option>
        <option value={-2}>Ẩn - Kích Hoạt</option>
      </select>
    </span>
  );
}
const sortToProps = (dispatch, state) => {
  return {
    sortprops: (sort) => {
      dispatch(action.sortcontrol(sort));
    },
  };
};
export default connect(null, sortToProps)(Sort);
