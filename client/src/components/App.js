import React, { Fragment } from 'react';
import withContent from '../hoc/withContent';
import Main from './Main';

const App = ({ isLoading = true, data = {} }) => {
  console.log(data);
  return (
    <Fragment>
      { isLoading &&
        <p>Loading data....</p>
      }
      { !isLoading &&
        <Main data={data}/>
      }
    </Fragment>
  )
}

export default withContent(App);
