import * as types from "./../contants/index";
//push list
export var pushList = (list) => {
  return {
    type: types.PUSHLIST,
    list,
  };
};
//------------------------------------------
// clear list
export var clearList = (clear) => {
  return {
    type: types.CLEARLIST,
    clear,
  };
};
//------------------------------------------
// update status
export var updateStatus = (updateStatus) => {
  return {
    type: types.UPDATESTATUS,
    updateStatus,
  };
};
//------------------------------------------
// update list
// search id list
export var updatelist = (idlist) => {
  return {
    type: types.IDUPDATELIST,
    idlist,
  };
};
// newlist
export var newupdatelistdata = (newlist) => {
  return {
    type: types.NEWUPDATELISTDATA,
    newlist,
  };
};
// set list to newlist
export var setPushList = (newpushlist) => {
  return {
    type: types.SETPUSHLIST,
    newpushlist,
  };
};
//------------------------------------------
// filter list
export var filtedata = (datafilter) => {
  return {
    type: types.FILTER,
    datafilter,
  };
};
//------------------------------------------
//search list
export var keywordsearch = (keyword) => {
  return {
    type: types.KEYWORD,
    keyword,
  };
};
//------------------------------------------
// sort list
export var sortcontrol = (sorts) => {
  return {
    type: types.SORT,
    sorts,
  };
};
