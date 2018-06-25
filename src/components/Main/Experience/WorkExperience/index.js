import React from 'react';
import Job from './Job';

const WorkExperience = ({work}) => {

  return (
    <div>
      <h3>{work.title}</h3>
      { work.items.map(job => (
        <Job job={job} />
      ))}
    </div>
  )
};

export default WorkExperience;
