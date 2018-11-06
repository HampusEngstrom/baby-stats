import { SET_ACTIVE_QUESTION } from "./questionsConstants";

export const setActiveQuestion = question => ({
  type: SET_ACTIVE_QUESTION,
  payload: { question }
});
