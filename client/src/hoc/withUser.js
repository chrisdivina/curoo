import React from 'react';
import { connect } from 'react-redux';

import {
  requestLogIn,
  requestLogOut
} from 'reducers/user';

const withUser = WrappedComponent => {

  const User = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => {
    const { user = {} } = state;
    const { isLoggedIn = false } = user;
    return {
      user,
      isLoggedIn
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
      onLogIn: () => dispatch(requestLogIn()),
      onLogOut: () => dispatch(requestLogOut())
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(User);
}

export default withUser;
