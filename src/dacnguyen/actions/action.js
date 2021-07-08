import * as types from "./../contantes/index";

export var viewlist = () => {
  return {
    type: types.update1,
  };
};
export var addlist = (lists) => {
  return {
    type: types.addlist,
    lists,
  };
};
export var cleanlist = (out) => {
  return {
    type: types.cleanlist,
    out,
  };
};
