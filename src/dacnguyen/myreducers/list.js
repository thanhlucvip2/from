import * as types from "./../contantes/index";

var list = [];

var myreducer = (state = list, action) => {
  switch (action.type) {
    case types.update1:
      return state;
    case types.addlist:
      state.push(action.lists);
      return [...state];
    case types.cleanlist:
      var cleanlist = action.out;
      var findcleanlist = state.findIndex((a) => {
        return a.id === cleanlist.id;
      });

      state.splice(findcleanlist, 1);

      return [...state];
    default:
      return state;
  }
};
export default myreducer;
