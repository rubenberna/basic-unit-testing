import { Types } from 'actions/types';

const initialState = ['hiiii']
export default function comments( state = initialState, action ) {
  switch (action.type) {
    case Types.SAVE_COMMENT:
      console.log(action);
      return [...state, action.payload];
    default:
      return state;
  }
}