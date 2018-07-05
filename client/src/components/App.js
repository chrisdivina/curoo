import React, { Fragment } from 'react';
import withContent from '../hoc/withContent';
import Main from './Main';
import Preloader from './Preloader';

const App = ({ isLoading = true, data = {} }) => {
  return (
    <Fragment>
      { isLoading && <Preloader /> }
      { !isLoading && <Main data={data}/> }
    </Fragment>
  )
}

export default withContent(App);
