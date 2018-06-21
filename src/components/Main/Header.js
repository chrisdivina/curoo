import React from 'react';

const Header = ({ name, title, summary }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
};

export default Header;
