const initialState = {
  count: 0
};

export const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "INCREASE":
      newState.count++;
      break;
    case "DECREASE":
      newState.count--;
      break;

    default:
      newState.count = 0;
      break;
  }
  return newState;
};
