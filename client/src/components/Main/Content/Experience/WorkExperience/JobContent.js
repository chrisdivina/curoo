import React from 'react';

const JobContent = ({ job, company, dates }) => {
  return (
    <div>
      <h4>{job.title}</h4>
      <h5>{company} ({job.location}), {dates}</h5>
      {job.description && <p>{job.description}</p>}
      {job.tasks && job.tasks.length > 0 &&
        <ul>
          {job.tasks.map((task, i) => (
            <li key={`${job.title}_${job.organization}_task_${i}`}>{task}</li>
          ))}
        </ul>
      }
    </div>
  )
};

export default JobContent;