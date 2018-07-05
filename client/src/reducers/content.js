import fetch from 'cross-fetch'

const REQUEST_CONTENT = 'content/request';
const RECEIVE_CONTENT = 'content/receive';

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
        data: action.data,
        isLoading: false
      }
    default:
      return state;
  }
}
