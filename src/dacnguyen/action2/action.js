import * as types from "./../contants/index";
export var action1 = () => {
  return {
    type: types.update1,
  };
};
export var addlists = (lists) => {
  return {
    type: types.addlist,
    lists,
  };
};
