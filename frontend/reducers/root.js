import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_reducer";
import entities from "./entities";

const rootReducer = combineReducers({
  session,
  errors,
  entities,
});

export default rootReducer;
