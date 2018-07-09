import React from 'react';
import withUser from 'hoc/withUser';

const Navigation = ({ onLogIn }) => {
  return (
    <nav>
      <ul>
        <li onClick={onLogIn}>Log In</li>
      </ul>
    </nav>
  );
};

export default withUser(Navigation);
