import React from 'react';
import withUser from 'hoc/withUser';

const Navigation = ({ onLogOut }) => {
  return (
    <nav>
      <ul>
        <li>Save Changes</li>
        <li><p onClick={onLogOut}>Log Out</p></li>
      </ul>
    </nav>
  );
};

export default withUser(Navigation);
