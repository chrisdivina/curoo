const REQUEST_LOG_IN = 'user/request_log_in';
const REQUEST_LOG_OUT = 'user/request_log_out';

export const requestLogIn = () => {
  return {
    type: REQUEST_LOG_IN
  };
};

export const requestLogOut = () => {
  return {
    type: REQUEST_LOG_OUT
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOG_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    case REQUEST_LOG_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
