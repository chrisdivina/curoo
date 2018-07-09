import React from 'react';
import EditableText from 'components/EditableText';

const Header = ({ name ='', title = '', summary ='' }) => {
  return (
    <div>
      <EditableText
        tag="h1"
        onChange={evt => console.log(evt.target.value)}>{name}</EditableText>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
};

export default Header;
