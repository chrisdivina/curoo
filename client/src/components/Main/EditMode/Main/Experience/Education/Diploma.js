import React from 'react';

const Diploma = ({item}) => {

  const { endDate = '', startDate, url } = item;
  const dates = endDate && endDate.length > 0 ? `${startDate} - ${endDate}` : `Since ${startDate}`;
  const school = url && url.length > 0 ? <a href={url}>{item.organization}</a> : item.organization;

  return (
    <div>
      <h4>{item.title}
        {item.options &&
          <span>({item.options})</span>
        }
        {item.mention &&
          <span>{item.mention}</span>
        }
      </h4>
      <h5>{school} ({item.location}), {endDate}</h5>
      {item.description && <p>{item.description}</p>}
      {item.tasks && item.tasks.length > 0 &&
        <ul>
          {item.tasks.map(task => (
            <li>{task}</li>
          ))}
        </ul>
      }
    </div>
  );

}

export default Diploma;
