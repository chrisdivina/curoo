import { REQUEST_CONTENT, RECEIVE_CONTENT } from './content';

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_CONTENT:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_CONTENT:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}
