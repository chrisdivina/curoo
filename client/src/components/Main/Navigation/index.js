import React, { Fragment } from 'react';
import withUser from 'hoc/withUser';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

const Navigation = ({ isLoggedIn, onLogIn }) => {
  return (
    <Fragment>
      { !isLoggedIn && <LoggedOut /> }
      { isLoggedIn && <LoggedIn /> }
    </Fragment>
  );
};

export default withUser(Navigation);
