import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  requestLogIn,
  requestLogOut
} from 'reducers/user';

const withUser = WrappedComponent => {

  class User extends PureComponent {

    render() {
      return (
        <WrappedComponent {...this.props} {...this.state} />
      )
    }

  }

  const mapStateToProps = state => {
    const { user = {} } = state;
    return { user };
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
