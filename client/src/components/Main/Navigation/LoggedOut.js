import React from 'react';
import { withUser } from 'hoc';

const LoggedOut = ({ onLogIn }) => {
  return (
    <nav>
      <ul>
        <li onClick={onLogIn}>Log In</li>
      </ul>
    </nav>
  )
}

export default withUser(LoggedOut);
