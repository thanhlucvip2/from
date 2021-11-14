import * as types from "./../contants/index";
var listupdate = [{ id: "" }];
//action newlist to update list
var myreducer = (state = listupdate, action) => {
  switch (action.type) {
    // search id list
    case types.IDUPDATELIST:
      state[0].id = action.idlist;
      return [...state];
    // update finish set id list update = ""
    case types.SETPUSHLIST:
      state = [{ id: "" }];
      return [...state];

    default:
      return state;
  }
};
export default myreducer;
