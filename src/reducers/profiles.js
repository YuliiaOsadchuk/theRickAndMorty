import { ADD_PROFILE } from "../actions";

const profiles = (state = [], action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default profiles;
