import React from 'react';
import withUser from 'hoc/withUser';

const Navigation = ({ isLoggedIn, onLogOut, onLogIn }) => {
  return (
    <nav>
      <ul>
        { !isLoggedIn && <li onClick={onLogIn}>Login</li> }
        { isLoggedIn && <li>Save Changes</li> }
        { isLoggedIn && <li onClick={onLogOut}>Log Out</li> }
      </ul>
    </nav>
  );
};

export default withUser(Navigation);
