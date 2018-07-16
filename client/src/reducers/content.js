import fetch from 'cross-fetch';
import experienceReducer from './experience';

export const REQUEST_CONTENT = 'content/request';
export const RECEIVE_CONTENT = 'content/receive';
export const UPDATE_JOB = 'content/job/update';
export const EDIT_JOB = 'content/job/edit';
export const SAVE_JOB = 'content/job/save';
export const CANCEL_EDIT_JOB = 'content/job/cancel_edit';
export const DELETE_JOB = 'content/job/delete';
export const CONFIRM_DELETE = 'content/job/confirm_delete';
const UPDATE_CONTENT = 'content/update';

export const requestContent = () => {
  return {
    type: REQUEST_CONTENT
  }
}

export const receiveContent = (json) => {
  return {
    type: RECEIVE_CONTENT,
    data: json
  }
}

export const fetchData = () => dispatch => {
  dispatch(requestContent());
  return fetch('http://localhost:6565/')
    .then(response => response.json())
    .then(json => dispatch(receiveContent(json)));
}

export const updateContent = data => {
  return {
    type: UPDATE_CONTENT,
    data
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CONTENT:
      return {
        ...state,
        data: action.data,
        isUpdated: false
      }
    case UPDATE_JOB:
    case EDIT_JOB:
    case CANCEL_EDIT_JOB:
    case DELETE_JOB:
      return {
        ...state,
        data: {
          ...state.data,
          experience: experienceReducer(state.data.experience, action)
        }
      }
    case SAVE_JOB:
      return {
        ...state,
        data: {
          ...state.data,
          experience: experienceReducer(state.data.experience, action)
        },
        isUpdated: true
      }
    default:
      return state;
  }
}
