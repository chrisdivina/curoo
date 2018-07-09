import React, { Fragment } from 'react';
import withUser from 'hoc/withUser';
import LoggedInNavigation from './LoggedInNavigation';
import LoggedOutNavigation from './LoggedOutNavigation';

const Navigation = ({ user = {}, onLogIn, onLogOut }) => {

  const { isLoggedIn = false } = user;

  return (
    <Fragment>
      { isLoggedIn &&
        <LoggedInNavigation
          user={user}
          onLogOut={onLogOut}
        />
      }
      { !isLoggedIn &&
        <LoggedOutNavigation
          onLogIn={onLogIn}
        />
      }
    </Fragment>
  )
}

export default withUser(Navigation);
