
import { UPDATE_ANALYTICS,CLOSE_ANALYTICS} from '../actions/actionTypes';

export default function analytics(state = [], action) {
  // { posts : [] }

  switch (action.type) {
    case UPDATE_ANALYTICS:
      return action.analytics;

    default:
      return state;
  }
}


