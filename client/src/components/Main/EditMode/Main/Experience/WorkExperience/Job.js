import React from 'react';

const Job = ({job}) => {

  const { endDate = '', startDate, url } = job;
  const dates = endDate && endDate.length > 0 ? `${startDate} - ${endDate}` : `Since ${startDate}`;
  const company = url && url.length > 0 ? <a href={url}>{job.organization}</a> : job.organization;

  return (
    <div>
      <h4>{job.title}</h4>
      <h5>{company} ({job.location}), {dates}</h5>
      {job.description && <p>{job.description}</p>}
      {job.tasks && job.tasks.length > 0 &&
        <ul>
          {job.tasks.map(task => (
            <li>{task}</li>
          ))}
        </ul>
      }
    </div>
  );

}

export default Job;
