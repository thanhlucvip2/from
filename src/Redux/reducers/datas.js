import * as types from "./../contants/index";
var data = [
  {
    name: "rượu vang",
    id: random(),
    status: false,
  },
  {
    name: "amật phúc bồn tử",
    id: random(),
    status: true,
  },
  {
    name: "linh chi",
    id: random(),
    status: false,
  },
  {
    name: "rượu phúc bồn tử",
    id: random(),
    status: true,
  },
];

function random() {
  return (
    Math.floor(Math.random() * 1000) +
    "_" +
    Math.floor(Math.random() * 1000) +
    "_" +
    Math.floor(Math.random() * 1000) +
    "_" +
    Math.floor(Math.random() * 1000) +
    "_" +
    Math.floor(Math.random() * 1000)
  );
}

var myreducer = (state = data, action) => {
  switch (action.type) {
    //push list
    case types.PUSHLIST:
      action.list.id = random();
      state.push(action.list);
      localStorage.setItem("data", JSON.stringify(state));
      return [...state];
    //clear list
    case types.CLEARLIST:
      const clear = action.clear;
      const clearIndex = state.findIndex((index) => {
        return index.id === clear;
      });
      state.splice(clearIndex, 1);
      return [...state];
    //update status
    case types.UPDATESTATUS:
      const newStatus = action.updateStatus;
      const statusIndex = state.findIndex((index) => {
        return index.id === newStatus;
      });
      state[statusIndex].status = !state[statusIndex].status;

      return [...state];
    // update list
    case types.NEWUPDATELISTDATA:
      const newlist = action.newlist;
      const indexlistdata = state.findIndex((index) => {
        return index.id === newlist.id;
      });
      state[indexlistdata] = {
        name: newlist.name,
        id: newlist.id,
        status: newlist.status === "true" ? true : false,
      };
      return [...state];
    //filter
    case types.FILTER:
      const datafilter = {
        name: action.datafilter.filtername.toLowerCase(),
      };
      if (datafilter) {
        if (datafilter.name) {
          state = data.filter((datas) => {
            return datas.name.toLowerCase().indexOf(datafilter.name) !== -1;
          });
        }
        if (datafilter.name === "") {
          return data;
        }
      }
      return [...state];

    //keyword search
    case types.KEYWORD:
      const keywords = action.keyword;
      if (keywords) {
        if (keywords.name) {
          state = data.filter((datas) => {
            return datas.name.toLowerCase().indexOf(keywords.name) !== -1;
          });
        }
        if (keywords.name === "") {
          return data;
        }
      }

      return [...state];
    //sort
    case types.SORT:
      if (action.sorts.sorts < 2 && action.sorts.sorts > -2) {
        state.sort((a, b) => {
          if (a.name > b.name) {
            return action.sorts.sorts;
          } else if (a.name < b.name) {
            return -action.sorts.sorts;
          } else {
            return action.sorts.sorts;
          }
        });
      } else {
        state.sort((a, b) => {
          if (a.status < b.status) {
            return action.sorts.sorts;
          } else if (a.status > b.status) {
            return -action.sorts.sorts;
          } else {
            return action.sorts.sorts;
          }
        });
      }

      return [...state];
    default:
      return state;
  }
};
export default myreducer;
