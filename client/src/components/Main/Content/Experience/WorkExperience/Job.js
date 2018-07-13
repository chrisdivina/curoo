import React from 'react';
import Text from 'components/Text';
import TextArea from 'components/TextArea';

const Job = ({job}) => {

  const { endDate = '', startDate, url } = job;
  const dates = endDate && endDate.length > 0 ? `${startDate} - ${endDate}` : `Since ${startDate}`;
  const company = url && url.length > 0 ? <a href={url}>{job.organization}</a> : job.organization;

  return (
    <div>
      <Text tag="h4">{job.title}</Text>
      <h5>{company} ({job.location}), {dates}</h5>
      {job.description && <TextArea>{job.description}</TextArea>}
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
