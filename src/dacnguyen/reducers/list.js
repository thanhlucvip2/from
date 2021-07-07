import * as types from "./../contants/index";

var list = [];
var myreducer = (state = list, action) => {
  switch (action.type) {
    case types.update1:
      return state;
    case types.addlist:
      var newlist = {
        name: action.lists.name,
        id: action.lists.id,
        gia: action.lists.gia,
      };
      state.push(newlist);
      console.log(list);
      return [...state];
    default:
      return state;
  }
};
export default myreducer;
