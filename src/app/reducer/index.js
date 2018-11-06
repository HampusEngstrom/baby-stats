import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";

import questions from "./../../features/questions/questionsReducer";

const combinedReducers = combineReducers({
  questions
});

const rootReducer = reduceReducers(combinedReducers);

export default rootReducer;
