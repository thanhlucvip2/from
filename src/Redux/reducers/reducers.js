import data from "./datas";
import listupdate from "./idlistupdate";
import { combineReducers } from "redux";

var myreducer = combineReducers({
  data,
  listupdate,
});
export default myreducer;
