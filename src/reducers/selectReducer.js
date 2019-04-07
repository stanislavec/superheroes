import initialState from './initialState';
import { SELECT } from '../actions/actionTypes';

export default function search(state = initialState.select, action) {
  let newState;
  switch (action.type) {
    case SELECT:
      newState = state.concat(action.selected)
      
      return newState;
    default:
      return state ? state : null;
  }
}
