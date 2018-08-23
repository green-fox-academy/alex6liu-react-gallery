import { combineReducers } from 'redux';

const initState = {
  index: 0,
};

const buttons = (state = initState, action) => {
  switch (action.type) {
    case 'LEFT':
      if (state.index === 0) {
        return { index: 8 };
      }
      return {
        index: state.index + 1,
      };
    case 'RIGHT':
      if (state.index === 8) {
        return {
          index: 0,
        };
      }
      return {
        index: state.index - 1,
      };
    default:
      return state;
  }
};

export default combineReducers({
  buttons,
});
