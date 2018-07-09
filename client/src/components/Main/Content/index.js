import React, { Fragment } from 'react';

import withContent from 'hoc/withContent';

import Header from './Header';
import Experience from './Experience';

const Content = ({ data }) => {
  return (
    <Fragment>
      <Header
        name={data.name}
        title={data.title}
        summary={data.summary}
      />
      <Experience experience={data.experience} />
    </Fragment>
  );
}

export default withContent(Content);
