
import { UPDATE_ORDER,ADD_ORDER,CLOSE_ORDER} from '../actions/actionTypes';

export default function order(state = [], action) {
  // { posts : [] }

  switch (action.type) {
    case UPDATE_ORDER:
      return action.order;

    case ADD_ORDER:
      return [action.order, ...state];

    default:
      return state;
  }
}


