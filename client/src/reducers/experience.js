import workReducer from './work';
import {
  UPDATE_JOB,
  EDIT_JOB,
  SAVE_JOB,
  CANCEL_EDIT_JOB,
  DELETE_JOB
} from './content';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_JOB:
    case EDIT_JOB:
    case SAVE_JOB:
    case CANCEL_EDIT_JOB:
    case DELETE_JOB:
      return {
        ...state,
        work: workReducer(state.work, action)
      };
    default:
      return state;
  }
}
