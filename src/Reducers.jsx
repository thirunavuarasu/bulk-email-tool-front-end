// src/reducers/index.js or src/reducers.js
import { combineReducers } from 'redux';

// Example reducer
const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
