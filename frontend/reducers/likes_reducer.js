import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/likes_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    case RECEIVE_LIKE:
      console.log(action)
      console.log(state)
      nextState[action.like.id] = action.like;
      return nextState;
    case REMOVE_LIKE:
      delete nextState[action.like.id];
      return nextState;
    default:
      return state;
  }
};

export default likesReducer;