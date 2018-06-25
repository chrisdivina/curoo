import React from 'react';
import Header from './Header';
import Experience from './Experience';

const Main = ({data}) => {
  return (
    <div>
      <Header
        name={data.name}
        title={data.title}
        summary={data.summary}
      />
      <Experience experience={data.experience} />
    </div>
  )
}

export default Main;
