import React from 'react';
import { withUser } from 'hoc';

const LoggedIn = ({ onLogOut }) => {
  return (
    <nav>
      <ul>
        <li>Save Changes</li>
        <li onClick={onLogOut}>Log Out</li>
      </ul>
    </nav>
  )
}

export default withUser(LoggedIn);
