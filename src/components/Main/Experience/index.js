import React from 'react';
import WorkExperience from './WorkExperience';

const Experience = ({experience}) => {
  return (
    <Fragment>
      <WorkExperience work={experience.work} />
    </Fragment>
  )
}
