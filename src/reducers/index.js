import { combineReducers } from "redux";
import tasks from "./tasks";
import ui from "./uiAction";
import model from "./model";
const rootReducer = combineReducers({
  tasks,
  ui,
  model,
});

export default rootReducer;
