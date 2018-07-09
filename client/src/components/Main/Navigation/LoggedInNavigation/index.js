import React from 'react';

const LoggedInNavigation = ({ onLogOut }) => {
  return (
    <nav>
      <ul>
        <li>Save Changes</li>
        <li><p onClick={onLogOut}>Log Out</p></li>
      </ul>
    </nav>
  );
};

export default LoggedInNavigation;
