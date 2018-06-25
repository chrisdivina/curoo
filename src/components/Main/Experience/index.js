import React, { Fragment } from 'react';
import WorkExperience from './WorkExperience';
import Education from './Education';

const Experience = ({experience}) => {
  return (
    <Fragment>
      <WorkExperience work={experience.work} />
      <Education education={experience.education} />
    </Fragment>
  )
};

export default Experience;
