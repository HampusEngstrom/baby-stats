import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";

import findQuestion from "./../../features/findQuestion/findQuestionReducer";

const combinedReducers = combineReducers({
  findQuestion
});

const rootReducer = reduceReducers(combinedReducers);

export default rootReducer;
