import { SET_ACTIVE_QUESTION } from "./questionsConstants";

const initalState = {
  active: "",
  allQuestions: [
    "Vad heter din dotter?",
    "Hur gammal var du när ditt barn föddes?",
    "När började ditt barn krypa?",
    "När fick ditt barn sin första tand?",
    "Har något av dina barn haft kolik?",
    "Hur länge ammade din son?",
    "Hur lång tid pottränade ni?",
    "Är ditt barn döpt?",
    "Vad har din pojke för hårfärg?",
    "Vad är er favoritsysselsättning?"
  ]
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state
      };

    case SET_ACTIVE_QUESTION:
      return {
        ...state,
        active: action.payload.question
      };

    default:
      return state;
  }
};

export default reducer;
