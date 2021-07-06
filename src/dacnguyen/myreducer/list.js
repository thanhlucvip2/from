import * as types from "./../cointants/indx";
var list = [
  {
    name: "Rượu vang đỏ",
    id: 1,
    gia: "100nvd",
  },
  {
    name: "rượu Phúc Bồn Tử",
    id: 2,
    gia: "100nvd",
  },
  {
    name: "Rượu Linh Chi",
    id: 3,
  },
];
var myreducer = (state = list, action) => {
  switch (action.type) {
    case types.update1:
      return state;

    default:
      return state;
  }
};
export default myreducer;
