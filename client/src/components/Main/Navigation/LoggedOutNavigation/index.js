import React from 'react';

const LoggedOutNavigation = ({ onLogIn }) => {
  return (
    <nav>
      <ul>
        <li onClick={onLogIn}>Log In</li>
      </ul>
    </nav>
  );
};

export default LoggedOutNavigation;
