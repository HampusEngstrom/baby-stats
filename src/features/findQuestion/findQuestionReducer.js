const initalState = {};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state
      };

    default:
      return state;
  }
};

export default reducer;
