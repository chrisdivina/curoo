import React from 'react';
import Diploma from './Diploma';

const Education = ({education}) => {

  return (
    <div>
      <h3>{education.title}</h3>
      {education.items.map(diploma => (
        <Diploma item={diploma} />
      ))}
    </div>
  )
};

export default Education;
